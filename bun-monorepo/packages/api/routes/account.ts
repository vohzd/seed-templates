import express from "express";

import { create, get, login } from "../services/account.js";
import { accountBody, accountGet, validate } from "../utils/validators/zod.js";

const router = express.Router();

router.get("/", validate(accountGet), async (req, res) => {
  const { email } = req.query;
  const result = await get(email as string);
  res.send(!!result.length);
});

router.post("/", validate(accountBody), async (req, res) => {
  console.log("serverside validation passed...");
  const { email, password } = req.body;

  const result = await create(email, password);

  // todo, send the actual responses on failure (401)
  console.log("created...");
  console.log(result);
  res.send(true);
});

router.post("/login", validate(accountBody), async (req, res) => {
  const { email, password } = req.body;
  console.log("CHECKING ACCOUNT");

  // TODO, see if you can set up a global try/catch handling system, rather than having it per route
  try {
    const hash = await login(email, password);

    if (hash) {
      console.log("Login successful for:", email);

      console.log("hashing is");
      console.log(hash);

      // THIS IS TEMPORARY, DO NOT PUSH THIS TO PROD
      // YOU NEED TO IMPLEMENT JWT CREATION USING JOSE
      const generateJWT = (hash: string) => hash;

      res.cookie("bunbunbun", generateJWT(hash), {
        maxAge: 1000 * 60 * 2400,
        sameSite: "lax", // Necessary for cross-origin, but requires Secure in production
        secure: false, // Set to true in production with HTTPS
        httpOnly: false,
      });

      res.send(true);
    } else {
      console.log("Login failed for:", email);
      res.status(401).send(false); // 401 Unauthorized
    }
  } catch (e) {
    console.error("Error during login:", e);
    res.status(500).send("Error during login");
  }
});

export default router;
