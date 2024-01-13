import { toast as ReactToastify } from "react-toastify";

export function toast(title) {
  ReactToastify(title, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  });
}
