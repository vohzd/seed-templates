/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useToast } from "@/hooks/useToast";
import { useEffect } from "react";

export default function Toast() {
  const { toast, setToast, clearToast } = useToast();

  console.log(toast);

  useEffect(() => {
    console.log("%cI WILL RUN ONCE AND ONLY ONCE", "font-size: 32px");
    setToast("");
  }, []);

  // useEffect(() => {
  //   // This will now run every time `toast` changes.
  //   console.log("Toast updated: ", toast);

  //   setTimeout(() => {
  //     clearToast();
  //   }, 2000);
  //   // If you want to perform any action when toast updates, do it here.
  //   // For example, displaying the toast message in the UI.
  // }, [toast, clearToast]); // Include `toast` in the dependency array

  return <>{toast}</>;
}
