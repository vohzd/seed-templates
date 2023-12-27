import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { Link, useLoaderData } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  const res = await fetch("https://localhost:8080/test", {
    method: "GET", // or 'POST', 'PUT', etc.
    headers: {
      "Content-Type": "application/json",
      // ... any other headers
    },
    // If POST or PUT, include body: JSON.stringify(yourData)
  });

  return json(await res.json());
}

export async function action({ request }: ActionFunctionArgs) {
  console.log("ACTIONC ALLL");

  console.log(request);

  const formData = await request.formData();
  console.log(formData);
  return null;
}

export default function Test() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>This is a test</h1>
      <Link to="/">GO HOME</Link>

      <ul>
        {data.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
        <li>MOAR</li>
        <li>
          <form method="post">
            <input placeholder="moar" id="moar" />
            <button type="submit">Submit</button>
          </form>
        </li>
      </ul>
    </div>
  );
}
