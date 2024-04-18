import { type RefObject } from "~/utils/toPlainObject";

// import ky from "ky";

export async function useApi(endpoint: string) {
  const { apiUrl } = useAppConfig();
  const url = `${apiUrl}${endpoint}`;

  return {
    async get(vueQuery: RefObject) {
      try {
        const query = toPlainObject(vueQuery);

        const { data } = await useFetch(url, {
          method: "GET",
          credentials: "include",
          query,
        });

        // this is vue being fucking stupid and always returning a Proxy
        return toRaw(data.value);
      } catch (e) {
        throw new Error("Network Request Failed...");
      }
    },
    async post(body: any) {
      try {
        console.log("post hit");

        // const { data } = await axios.post(
        //   url,
        //   { body },
        //   {
        //     withCredentials: true,
        //   }
        // );

        console.log("posting..");
        console.log(body);

        const { data, error } = await useFetch(url, {
          method: "POST",
          body,
          // this is absolutely mandatory if you want cookies to work
          credentials: "include",
          // not sure if i truly want this set to true
          watch: false,
        });

        console.log("data");
        console.log(data);
        console.log("error");
        console.log(error);

        if (error.value) {
          console.log("failed...");
          useHandleError(error.value);
          console.log(error.value.statusMessage);
          return {
            code: error.value.statusCode,
            message: error.value.statusMessage,
          };
        }

        return data.value;
      } catch (e) {
        console.log("Network Request Failed...");
        throw new Error("Network Request Failed...");
      }
    },
  };
}
