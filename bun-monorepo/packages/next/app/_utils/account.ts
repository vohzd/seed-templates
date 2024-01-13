import { post } from "./httpClient";

import Router from "next/router";

export const checkAccount = async ({ email }) => {


  console.log("ENAUKL HERE");
  console.log(email);
  const { exists } = await post("/api/account/check", { email });

  console.log("finished.....");
  console.log(exists);

  exists ? Router.push(`/account/login?email=${email}`) : Router.push(`/account/register?email=${email}`);

};


export async function loginAccount(email, password) {

  console.log("LOGGING IN!");

  const { data, success } = await post("/api/account/login", { email, password });

  console.log(data);
  console.log(success);

  if (success) {
    Router.push("/account/dashboard");
  }



  return data;
}


export async function registerAccount(email, password) {

  const { success } = await post("/api/account/register", { email, password });

  if (success) {
    Router.push("/account");
  }

  return success;
}


export async function validateCookie(){
  console.log("VALIDATE ME!");

  try {
    return await post("/api/account/validate-cookie");
  }

  catch (e){
    return false;
  }

}
