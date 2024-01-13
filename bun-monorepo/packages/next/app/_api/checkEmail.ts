"use client";

export async function checkEmail(email: string) {
  try {
    const response = await fetch(`https://localhost:8080/account/check?email=${email}`, {
      credentials: "include",
    });

    console.log(response);
    if (!response.ok) {
      // console.log("HANDLE A TOAST HERE");
      // console.log(response);
      // setToast("blah blah blah");
      // triggerToast("")
    }
    const { exists } = await response.json();
    // console.log("API FINISHED....");

    // console.log(exists);

    // setExists(exists);
    return exists;
  } catch (e) {
    console.log("HANDLE THIS ERROR");
    console.log(e);
    return null;
  }

  // if (exists === true) {
  //   router.push("/account/login");
  // }

  // if (exists === false) {
  //   router.push("/account/register");
  // }
}
