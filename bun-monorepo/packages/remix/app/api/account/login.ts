import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export async function loginAccount(email: string, password: string) {
  console.log("api: checkAccount");

  console.log(email);
  console.log(password);

  console.log("feuwgfgewui");

  const response = await fetch(`http://localhost:8080/account/login`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  // const cookie = response.headers;

  // console.log("const");
  // // console.log(cookie);
  // console.log(response.headers);
  // console.log("ewogfwouiefgiowe");

  if (!response.ok) {
    throw new Error("Something Something");
  }

  const json = await response.json();

  console.log(json);
  console.log("ewihfwieoh");
  console.log(json.cookie);
  const userPrefs = createCookie("user-prefs", {
    maxAge: 604_800, // one week
    secrets: ["weioefhiofh"],
    path: "/",
    sameSite: "lax",
  });

  console.log("ewiofgweiofgw");
  console.log(userPrefs);

  return userPrefs;
}
