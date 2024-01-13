import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main>
      <h1>Remix App</h1>
      <p>Some fluff</p>
      <Link to="/account">Account</Link>
    </main>
  );
}
