import Link from "next/link";

import styles from "./index.module.css";

// import { useAccount } from "hooks/useAccount";


export default function Status() {


  const account = false;

  // const account = useAccount();

  // console.log("USE ACCOUNT");
  // console.log(account);

  return (
    <div className={styles.status}>

      { account
        ? <Link href="/account/dashboard">My Account</Link>
        : <><Link href="/account/check">Login</Link></>
      }

    </div>
  );

};
