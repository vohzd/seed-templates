/* eslint-disable import/no-unresolved */

import { getTestData } from "@/api/testData/index";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const test = await getTestData();

  return json(test);
};

export default function Account() {
  const products = useLoaderData<typeof loader>();

  return (
    <main>
      <h1>Account Dashboard</h1>
      <p>Welcome!!!!</p>
      {products.map((product: object) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </main>
  );
}
