import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
export interface MyContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  dataLoaderInitialized: boolean;
}
