export async function hash(password: string) {
  return await Bun.password.hash(password);
}

export async function verify(password: string, hash: string) {
  return (await Bun.password.verify(password, hash)) ? hash : undefined;
}
