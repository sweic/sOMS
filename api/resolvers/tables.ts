import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { MyContext } from "../utils/context";
import {
  CreateTableArgs,
  Table,
  UpdateTableArgs,
} from "../prisma/generated/type-graphql";
import { getPrismaFromContext } from "../prisma/generated/type-graphql/helpers";
import { getRedisAsync, setRedisAsync } from "../utils/redis";
import { v4 as uuidv4 } from "uuid";
import { AdminAuth } from "../middleware/adminAuth";

@Resolver()
export class TableResolver {
  @Mutation((_returns) => Table)
  @UseMiddleware(AdminAuth)
  async createSafeTable(
    @Ctx() ctx: MyContext,
    @Args() args: CreateTableArgs
  ): Promise<Table> {
    const tableNumber = args.data.tableNumber;
    const res: Table = await getPrismaFromContext(ctx).table.create({
      ...args,
    });
    await setRedisAsync(`TableNum:${tableNumber}`, res.token);
    return res;
  }

  @Mutation((_returns) => Table)
  @UseMiddleware(AdminAuth)
  async vacateSafeTable(
    @Ctx() ctx: MyContext,
    @Args() args: UpdateTableArgs
  ): Promise<Table> {
    const res: Table = await getPrismaFromContext(ctx).table.update({
      ...args,
    });
    const tableNumber = res.tableNumber;
    await setRedisAsync(`TableNum:${tableNumber}`, uuidv4());
    return res;
  }
}
