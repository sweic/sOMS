import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableCreateOrConnectWithoutOrdersInput } from "../inputs/TableCreateOrConnectWithoutOrdersInput";
import { TableCreateWithoutOrdersInput } from "../inputs/TableCreateWithoutOrdersInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";

@TypeGraphQL.InputType("TableCreateNestedOneWithoutOrdersInput", {
  isAbstract: true
})
export class TableCreateNestedOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => TableCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: TableCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => TableCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: TableCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => TableWhereUniqueInput, {
    nullable: true
  })
  connect?: TableWhereUniqueInput | undefined;
}
