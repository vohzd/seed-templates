
export function isValidEmailRegex(email: string) {
  // eslint-disable-next-line no-useless-escape
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

export function emailValidatorMiddleware(res, email) {
  try {
    if (!isValidEmailRegex(email)) {
      throw { httpCode: 401, code: "INVALID_EMAIL", reason: "This email is invalid" };
    }
  }
  catch ({ httpCode, code, reason }) {
    return res.status(httpCode).json({ code, reason });
  }
}
