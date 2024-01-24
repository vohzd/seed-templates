export async function getTestData() {
  const response = await fetch(`https://localhost:8080/test`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Bad Request (did you use an actual email address?)");
  }

  const something = await response.json();

  console.log("some data here");
  console.log(something);

  return something;
}
