/* eslint-disable import/no-unresolved */
import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { loginAccount } from "@/api/account/login";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  console.log("congrats, you've submitted a form!!!");
  console.log(email);
  console.log(password);

  const response = await loginAccount(email, password);

  console.log(response);

  // return response ? redirect("/account/login") : redirect("/account/register");

  return redirect("/account/dashboard");
};

export default function Login() {
  return (
    <main>
      <h1>Login Page</h1>
      <Form method="post">
        <input type="email" name="email" placeholder="Your Email" />
        <input type="password" name="password" placeholder="Your Password" />
        <button>Submit</button>
      </Form>
    </main>
  );
}
