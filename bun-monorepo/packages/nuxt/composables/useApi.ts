// import { FetchError } from "ofetch";
import { useHandleError } from "./useHandleError";

export async function useApi(endpoint: string) {
  const { apiUrl } = useAppConfig();
  const url = `${apiUrl}${endpoint}`;

  return {
    async get(query?: object) {
      try {
        // console.log("fetching....");
        // console.log(query);
        const { data, error } = await useFetch(url, {
          method: "GET",
          credentials: "include",

          query,
        });
        if (error.value) {
          useHandleError(error.value);
          return error;
        }

        return data;
      } catch (e) {
        console.log("Network Request Failed...");
        throw new Error("Network Request Failed...");
      }
    },
    async post(body: any) {
      try {
        console.log("post hit");
        const { data, error } = await useFetch(url, {
          method: "POST",
          body,
          // this is absolutely mandatory if you want cookies to work
          credentials: "include",
          // not sure if i truly want this set to true
          watch: false,
        });

        if (error.value) {
          useHandleError(error.value);
          console.log(error.value.statusMessage);
          return {
            code: error.value.statusCode,
            message: error.value.statusMessage,
          };
        }

        return data;
      } catch (e) {
        console.log("Network Request Failed...");
        throw new Error("Network Request Failed...");
      }
    },
  };
}
