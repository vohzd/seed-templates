import Link from "next/link";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Homepage here</h1>
      <p>Soem cruft</p>

      <Link href="/account">Go to Account</Link>
      <Link href="/test">Go to Test</Link>
    </main>
  );
}
