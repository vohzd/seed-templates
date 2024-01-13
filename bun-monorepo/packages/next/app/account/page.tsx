"use client";

import Form from "@epitrade/ui/react/Form";

import { useCheckEmail } from "@/hooks/useCheckEmail";

// import { checkEmail } from "@/api/checkEmail";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function AccountPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const { test, check } = useCheckEmail();

  // const api = useApi();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  async function submitLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // const blarg = await checkEmail(email);

    console.log("done...");

    const blarg = check(email);

    console.log(test);
    console.log(blarg);

    // console.log("done");
    // console.log(blarg);
    // console.log("Email:", email);
    // console.log("email check result....");
    // console.log((await blag).checkEmail(email));
    // console.log("fin");
    // console.log(api);
  }

  return (
    <main>
      <h1>Account check</h1>
      <p>Lets check yer account</p>
      <Form onSubmit={submitLogin}>
        <input placeholder="Email" name="email" onChange={handleInputChange} />
        <button>Submit</button>
      </Form>
    </main>
  );
}
