export async function createAccount(email: string, password: string) {
  console.log("api: checkAccount");

  console.log(email);
  console.log(password);

  console.log("feuwgfgewui");

  const response = await fetch(`https://localhost:8080/account`, {
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
    throw new Error("Bad Request (did you use an actual email address?");
  }

  const json = await response.json();

  console.log(json);

  return json;
}
