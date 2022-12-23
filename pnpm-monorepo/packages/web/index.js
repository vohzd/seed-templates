import { Button } from "@epitrade/ui";

console.log("Index File Loaded...");

console.log(Button);

if (window){
  console.log("in the browser...");
  console.log(document.body);

  document.body.append(Button)

}

