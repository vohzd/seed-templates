import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny, z } from "zod";

export const validate = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
  try {
    // this can take GET or POST requests (for now, likely to be extended in the future to DELETE and PUT)
    const contents = req.method === "GET" ? req.query : req.body;

    console.log("VALIDATING!!!");
    console.log(contents);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).send(error.errors);
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
};

// todo, maybe put these in different files?
export const accountGet = z.object({
  email: z.string().email(),
});

export const accountBody = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const websiteBody = z.object({
  subdomain: z.string(),
});
