import { ReactNode } from "react";
import styles from "./form.module.css";

// todo, correctly type this!!!
type FormProps = {
  children?: ReactNode;
  // onSubmit: (e: FormEvent<HTMLFormElement>) => void; // Correctly typing the onSubmit prop
  onSubmit?: any; // Correctly typing the onSubmit prop
  method?: any;
};

export function Form({ children, onSubmit, method }: FormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
