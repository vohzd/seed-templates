import * as jose from "jose";

export async function hash(password: string) {
  const secret = new TextEncoder().encode(password);

  const alg = "HS256";

  return await new jose.SignJWT({ "urn:example:claim": true })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("72h")
    .sign(secret);
}

export async function verify(password: string, jwt: string) {
  const secret = new TextEncoder().encode(password);

  console.log("received the following");
  console.log("plaintext pwd");
  console.log(password);
  console.log("jwt pwd");
  console.log(jwt);
  const { payload, protectedHeader } = await jose.jwtVerify(jwt, secret, {
    issuer: "urn:example:issuer",
    audience: "urn:example:audience",
  });

  console.log("here we are");
  console.log(protectedHeader);
  console.log(payload);
  console.log("doonme////.");

  return payload;
}
