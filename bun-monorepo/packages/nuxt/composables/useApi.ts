// import { FetchError } from "ofetch";

import ky from "ky";

export async function useApi(endpoint: string) {
  const { apiUrl } = useAppConfig();
  const url = `${apiUrl}${endpoint}`;

  return {
    async get(query?: object) {
      try {
        // console.log("fetching....");
        // console.log(query);
        // const { data, error } = await useFetch(url, {
        //   method: "GET",
        //   credentials: "include",

        //   query,
        // });

        const response = await ky
          .get(url, {
            credentials: "include",
            searchParams: {
              ...Object(query),
            },
          })
          .json();

        console.log("response");
        console.log(response);

        // something.
        // if (error.value) {
        //   useHandleError(error.value);
        //   return error;
        // }

        return response;
      } catch (e) {
        console.log("Network Request Failed...");
        console.log(e);
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

        // console.log("finished posting..");
        // console.log(data);

        // const { data, error } = await useFetch(url, {
        //   method: "POST",
        //   body,
        //   // this is absolutely mandatory if you want cookies to work
        //   credentials: "include",
        //   // not sure if i truly want this set to true
        //   watch: false,
        // });

        // if (error.value) {

        //   console.log("failed...");
        //   // useHandleError(error.value);
        //   // console.log(error.value.statusMessage);
        //   // return {
        //   //   code: error.value.statusCode,
        //   //   message: error.value.statusMessage,
        //   // };
        // }

        return data;
      } catch (e) {
        console.log("Network Request Failed...");
        throw new Error("Network Request Failed...");
      }
    },
  };
}
