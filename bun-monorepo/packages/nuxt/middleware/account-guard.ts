export default defineNuxtRouteMiddleware(() => {
  console.log("This should fire off an api request to see if the user is logged in");
});
