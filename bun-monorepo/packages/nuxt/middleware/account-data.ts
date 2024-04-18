export default defineNuxtRouteMiddleware(async () => {
  console.log("This should fire off an api request to see if the user is logged in");

  console.log(process.client);

  if (process.client) {
    console.log("DO NOT PASS GO");
    return;
  } else {
    // i should probably add the guard to express and simply try to retreive the users data etc
    // the express middleware should return a 403 if the jwt is bad

    // ignore this...
    // const api = await useApi("/account/check-cookie");

    // const response = await api.get();

    // console.log(response);

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
