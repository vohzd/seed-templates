/* Problem statement, if you use vue3's toRaw(something) on a deeply nested object, you'll still get something back like

something: {
  property1:
  property2:
}

when really, you want something like;


this is by design, and the vue3 core devs basically say write your own util funtion (like lodash's _.cloneDeep)

https://github.com/vuejs/core/issues/5227#issuecomment-1008295725

*/

// this is testing some different approaches

/* 1. this one is from chatgpt

*/

// Utility function to deeply convert Vue refs in an object to their raw values

// Define a generic type for the input object that can have any keys,
// where each property can be a Ref or any value
export type RefObject = Record<string, Ref<any> | any>;

// Define the return type as a Record with string keys and values of any type,
// since we're unwrapping the refs to their raw values
export type PlainObject = Record<string, any>;

// this takes a vuejs ref, but could POTENTIALLY take some other crap

export function toPlainObject(obj: RefObject): PlainObject {
  const result: PlainObject = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    // Check if the property value is a Ref and unwrap it, otherwise, assign it directly
    result[key] = isRef(value) ? value.value : value;
  });
  return result;
}

/* 2. this one is from github
https://github.com/vuejs/core/issues/5303#issuecomment-1543596383


i think this one is broken, i get 'too much recursion'
*/

export function deepToRaw<T extends Record<string, any>>(sourceObj: T): T {
  const objectIterator = (input: any): any => {
    if (Array.isArray(input)) {
      return input.map((item) => objectIterator(item));
    }
    if (isRef(input) || isReactive(input) || isProxy(input)) {
      return objectIterator(toRaw(input));
    }
    if (input && typeof input === "object") {
      return Object.keys(input).reduce((acc, key) => {
        acc[key as keyof typeof acc] = objectIterator(input[key]);
        return acc;
      }, {} as T);
    }
    return input;
  };

  return objectIterator(sourceObj);
}

/* 3, recursive unref
call unref on all nested props until you get what you want
take from: https://www.npmjs.com/package/vue-deepunref
https://github.com/DanHulton/vue-deepunref
*/

/* json way
https://github.com/vuejs/core/issues/5227#issuecomment-1010420912
*/
export function jsonOnly(o: object) {
  return JSON.parse(JSON.stringify(o));
}
// export const jsonOnly = (o: object) => JSON.parse(JSON.stringify(o));
