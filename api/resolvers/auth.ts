import dotenv from "dotenv";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { MyContext } from "../utils/context";
import { User } from "../entities/user";
import { sendCookies, verifyCookie } from "../utils/cookies";
dotenv.config();
@Resolver()
export class AuthResolver {
  @Mutation(() => User)
  async validateUser(
    @Arg("token") token: string,
    @Ctx() { req, res }: MyContext
  ): Promise<User> {
    if (token === process.env.USER_AUTH_TOKEN) {
      sendCookies(res);
      return {
        id: 0,
        token: "",
      };
    }
    return {
      id: 1,
      token: "",
    };
  }

  @Query(() => Boolean)
  async validateJWT(@Ctx() { req, res }: MyContext): Promise<boolean> {
    const { accessToken, refreshToken } = req.cookies;
    if (!accessToken && !refreshToken) return false;
    return verifyCookie(accessToken, refreshToken, res);
  }
}
