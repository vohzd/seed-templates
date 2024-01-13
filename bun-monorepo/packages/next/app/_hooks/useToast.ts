// hooks/useToast.js

"use client";

import { useState } from "react";

export function useToast() {
  const [toast, setToast] = useState("");
  const [show, setShow] = useState(false);

  console.log("TOAST IS");
  console.log(toast);

  // console.log("TOOOOOOOO");
  // console.log(toast);

  // console.log("inside usetoast");le
  // useEffect(() => {
  //   console.log("using effect");
  //   if (toast) {
  //     setShow(true);
  //     const timer = setTimeout(() => setShow(false), 3000); // Adjust duration as needed
  //     return () => clearTimeout(timer);
  //   }
  // }, [toast]);

  // function triggerToast(message: string) {
  //   // console.log("triggering toast!");
  //   console.log("TRIGGER TOAST CALLED");

  //   // console.log("1");
  //   // console.log(toast);

  //   // setToast("");

  //   setToast(message);
  //   // console.log("2");
  //   // console.log(message);
  // }

  function clearToast() {
    console.log("clearing...");
    setToast("");
  }

  return { toast, setToast, clearToast };
}
