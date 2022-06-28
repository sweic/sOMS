import { Arg, Query, Ctx, ObjectType, Field } from "type-graphql";
import { MyContext } from "../utils/context";
import { Menu, Table } from "../prisma/generated/type-graphql";
import { CustomerValidationError, DatabaseError } from "../utils/errors";
@ObjectType()
class Result {
  @Field((type) => Table)
  customerTable: Table | undefined;

  @Field((type) => Menu)
  currentMenu: Menu | null | undefined;
}
export class TokenResolver {
  @Query(() => Result)
  async validateTableToken(
    @Arg("token") token: string,
    @Ctx() { req, res, prisma }: MyContext
  ): Promise<Result> {
    const tableData = await prisma.table.findFirst({
      where: {
        token: {
          equals: token,
        },
      },
      include: {
        session: {
          include: {
            menu: true,
          },
        },
      },
    });
    if (!tableData || tableData.active === false || !tableData.session)
      throw new CustomerValidationError("expired");
    if (!tableData.session.menu) throw new DatabaseError("menu 404");
    return {
      customerTable: tableData,
      currentMenu: tableData.session?.menu,
    };
  }
}
