import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../utils/context";
import { verifyCookie } from "../utils/cookies";
import { AdminError } from "../utils/errors";

export const AdminAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const { accessToken, refreshToken } = context.req.cookies;
  if (!verifyCookie(accessToken, refreshToken, context.res))
    throw new AdminError("admin");
  return next();
};
