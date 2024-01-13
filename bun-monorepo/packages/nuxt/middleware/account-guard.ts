export default defineNuxtRouteMiddleware(async () => {
  console.log("This should fire off an api request to see if the user is logged in");

  console.log(process.client);

  if (process.client) {
    console.log("DO NOT PASS GO");
    return;
  } else {
    const api = await useApi("/account/check");

    const response = await api.get();

    console.log(response);

    // const response = await fetch("https://localhost:8080/account/check", {
    //   method: "GET",
    //   credentials: "include",
    // });
    // console.log(response);

    return true;
  }

  console.log("proceeding..");
  // const response = await $fetch("https://localhost:8080/account/check", {
  //   method: "GET",
  //   credentials: "include",
  // });

  // console.log("finished checking");
  // console.log(response);

  // return navigateTo("/account");
});
