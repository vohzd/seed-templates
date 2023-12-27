import { eq } from "drizzle-orm";
import { db } from "../db/index.js";

import { account } from "../db/schema/account.js";
import { hash, verify } from "../utils/password.js";

export async function get(email: string) {
  return await db
    .select()
    .from(account)
    .limit(1)
    .where(eq(account.email, String(email)));
}

export async function create(email: string, password: string) {
  try {
    // todo, check if duplicate..
    return await db
      .insert(account)
      .values({ email, password: await hash(password) })
      .execute();
  } catch (e) {
    console.log("failed...");
    console.log(e);
  }
}

export async function login(email: string, password: string) {
  // gotta do this in two sections, firstly retreive the user
  // Step 1: Retrieve the user record by email
  const user = await db.select().from(account).where(eq(account.email, email)).limit(1).execute();

  // verify the hash
  return await verify(password, String(user[0].password));
}
