export async function checkAccount(email: string) {
  const response = await fetch(`https://localhost:8080/account/check?email=${email}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Bad Request (did you use an actual email address?)");
  }

  const { exists } = await response.json();

  return exists;
}
