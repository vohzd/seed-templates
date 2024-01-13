/* eslint-disable import/no-unresolved */
// import { Form } from "@epitrade/ui/Form";

// function testFunc(e) {
//   console.log("I am a test fn");
//   console.log(e);
// }
import type { ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { checkAccount } from "@/api/account/check";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const email = formData.get("email") as string;

  console.log("congrats, you've submitted a form!!!");
  console.log(email);
  console.log(typeof email);

  const response = await checkAccount(email);

  console.log(response);

  return true;
};

export default function Account() {
  return (
    <main>
      <h1>Welcome to the account page</h1>
      <Form method="post">
        <h1>I am a form!</h1>
        <input type="text" name="email" />
        <button>Submit</button>
      </Form>
    </main>
  );
}
