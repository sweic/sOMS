import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableCreateOrConnectWithoutOrdersInput } from "../inputs/TableCreateOrConnectWithoutOrdersInput";
import { TableCreateWithoutOrdersInput } from "../inputs/TableCreateWithoutOrdersInput";
import { TableUpdateWithoutOrdersInput } from "../inputs/TableUpdateWithoutOrdersInput";
import { TableUpsertWithoutOrdersInput } from "../inputs/TableUpsertWithoutOrdersInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";

@TypeGraphQL.InputType("TableUpdateOneRequiredWithoutOrdersInput", {
  isAbstract: true
})
export class TableUpdateOneRequiredWithoutOrdersInput {
  @TypeGraphQL.Field(_type => TableCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: TableCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => TableCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: TableCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => TableUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: TableUpsertWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => TableWhereUniqueInput, {
    nullable: true
  })
  connect?: TableWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TableUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: TableUpdateWithoutOrdersInput | undefined;
}
