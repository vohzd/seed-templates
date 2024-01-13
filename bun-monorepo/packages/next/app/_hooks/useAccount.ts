import { useEffect, useState } from "react";

import { validateCookie } from "utils/account";

export function useAccount() {

  const [account, setAccount] = useState("");

  useEffect(() => {
    console.log("initiallingsgsg changed");

    async function sendCookie(){
      const response = await validateCookie();
      setAccount(response);
    }

    if (!account){
      sendCookie();
    }

  }, [account]);

  return account;

}
