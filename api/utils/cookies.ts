import { Response } from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export function generateToken() {
  return jwt.sign(uuidv4(), process.env.JWT_SECRET as jwt.Secret);
}

export function sendCookies(res: Response) {
  return res
    .cookie("accessToken", generateToken(), {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      expires: new Date(new Date().getTime() + 60 * 1000 * 5),
    })
    .cookie("refreshToken", generateToken(), {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      expires: new Date(new Date().getTime() + 60 * 1000 * 60 * 24),
    });
}

export function verifyCookie(
  accessToken: string,
  refreshToken: string,
  res: Response
): boolean {
  var accessErr, accessString, refreshErr, refreshString;
  jwt.verify(
    accessToken,
    process.env.JWT_SECRET as jwt.Secret,
    (_accessErr, _accessString) => {
      accessString = _accessString;
      if (_accessErr) {
        accessErr = _accessErr;
        jwt.verify(
          refreshToken,
          process.env.JWT_SECRET as jwt.Secret,
          (_refreshErr, _refreshString) => {
            refreshString = _refreshString;
            if (_refreshErr) {
              refreshErr = _refreshErr;
              return;
            }
            sendCookies(res);
            return;
          }
        );
      }
      return;
    }
  );
  if (refreshErr && accessErr) return false;
  return true;
}
