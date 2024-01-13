export async function checkAccount(email: string) {
  console.log("api: checkAccount");

  console.log(email);

  const response = await fetch(`https://localhost:8080/account/check?email=${email}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Bad Request (did you use an actual email address?");
  }

  const { exists } = await response.json();
  console.log("fetch response");
  console.log(exists);
  console.log("fetch responsend");

  return exists;
}
