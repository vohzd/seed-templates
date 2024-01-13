"use client";

import { checkEmail } from "@/api/checkEmail";
import { useEffect } from "react";
import { useToast } from "./useToast";
export function useCheckEmail() {
  const { toast, setToast } = useToast();

  console.log(`current toast is ${toast}`);

  useEffect(() => {
    console.log("i was mounted just onmce.....");

    // const checked = checkEmail("ttest");
  }, []);

  async function check(email: string) {
    const test = await checkEmail(email);
    console.log(test);

    setToast("finished....");
  }

  return {
    test: 1234,
    check,
  };
}
