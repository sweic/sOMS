import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../utils/context";

export const LogAccess: MiddlewareFn<MyContext> = ({ context, info }, next) => {
  if (context.dataLoaderInitialized) return next();
  context.dataLoaderInitialized = true;
  const requestTime = new Date(Date.now() + 8 * 60 * 60 * 1000 * 24);
  console.log("*****************************");
  console.log(
    `Request coming in! ${requestTime.getHours()}:${requestTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${requestTime.getSeconds()}`
  );
  console.log("Type:", info.path.typename?.toUpperCase());
  console.log("Name:", info.fieldName.toUpperCase());
  console.log("*****************************");

  return next();
};
