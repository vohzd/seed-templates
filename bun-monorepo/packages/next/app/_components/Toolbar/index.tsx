
import styles from "components/Toolbar/index.module.css";

import AccountStatus from "components/Account/Status";

import Link from "next/link";

export default function Toolbar() {
  return (
    <header className={styles.toolbar}>
      <Link href="/">memorymark</Link>
      <AccountStatus />
    </header >
  );
}
