import { Form } from "@remix-run/react";
export default function Login() {
  return (
    <main>
      <h1>Login Page</h1>
      <Form method="post">
        <h1>I am a form!</h1>
        <input type="text" name="email" />
        <button>Submit</button>
      </Form>
    </main>
  );
}
