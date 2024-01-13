async function getData() {
  const res = await fetch("https://localhost:8080/test");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function TestPage() {
  const data = await getData();

  console.log("page loaded");
  console.log(data);

  return (
    <main>
      <ul>
        <li>Data here</li>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </main>
  );
}
