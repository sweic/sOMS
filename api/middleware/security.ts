import hpp from "hpp";
import helmet from "helmet";
import { Express, NextFunction, Request, Response } from "express";
import { v4 as uuid } from "uuid";
export default function useSecurityMiddlewares(
  server: Express,
  { enableNonce, enableCSP }: { enableNonce: boolean; enableCSP: boolean }
) {
  server.disable("x-powered-by");
  server.use(hpp());
  server.use(helmet.xssFilter());
  server.use(helmet.frameguard({ action: "DENY" }));
  server.use(helmet.ieNoOpen());
  server.use(helmet.noSniff());

  if (enableNonce) {
    server.use((request: Request, response: Response, next: NextFunction) => {
      response.locals.nonce = uuid();
      next();
    });
  }
  const cspConfig = {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-eval'", "cdn.polyfill.io"],
      imgSrc: ["https:", "http:", "'self'", "data:", "blob:"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["https:", "wss:"],
      childSrc: ["https:", "http:"],
      objectSrc: ["'none'"],
      mediaSrc: ["'none'"],
    },
    reportOnly: process.env.NODE_ENV === "development" || false,
  };

  if (enableCSP) {
    server.use(helmet.contentSecurityPolicy(cspConfig));
  }
}
