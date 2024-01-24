/* eslint-disable import/no-unresolved */

import type { ActionFunctionArgs } from "@remix-run/node";
// import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { createAccount } from "@/api/account/create";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log("congrats, you've submitted a form!!!");
  console.log(email);
  console.log(password);

  const test = await createAccount(email, password);

  console.log("yepo");
  console.log(test);
  // // const response = await checkAccount(email);

  // console.log(response);

  // return response ? redirect("/account/login") : redirect("/account/register");

  // return redirect("/account/register");

  return test;
};

export default function Register() {
  return (
    <main>
      <h1>Register</h1>
      <Form method="post">
        <input type="text" name="email" placeholder="Your Email" />
        <input type="password" name="password" placeholder="Your Password" />
        <button>Submit</button>
      </Form>
    </main>
  );
}
