import { useState } from "react";

const defaultData = [
  {
    name: "yes123", url: "stfu.com"
  },
  {
    name: "no", url: "stfu2.com"
  },
  {
    name: "no321", url: "stfu4.com"
  }
];

export type Website = {
  url: string;
  name: string;
}


export function useWebsites() {

  const [websites, setWebsites] = useState(defaultData);

  function addNewWebsite(newWebsite: Website){
    setWebsites([...websites, newWebsite]);
  }

  return [websites, addNewWebsite];


}
