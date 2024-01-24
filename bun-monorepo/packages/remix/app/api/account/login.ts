export async function loginAccount(email: string, password: string) {
  console.log("api: checkAccount");

  console.log(email);
  console.log(password);

  console.log("feuwgfgewui");

  const response = await fetch(`https://localhost:8080/account/login`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  // console.log("response");
  // console.log(response);

  if (!response.ok) {
    throw new Error("Something Something");
  }

  const json = await response.json();

  console.log(json);

  return json;
}
