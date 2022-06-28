import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableCreateWithoutOrdersInput } from "../inputs/TableCreateWithoutOrdersInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";

@TypeGraphQL.InputType("TableCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class TableCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => TableWhereUniqueInput, {
    nullable: false
  })
  where!: TableWhereUniqueInput;

  @TypeGraphQL.Field(_type => TableCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: TableCreateWithoutOrdersInput;
}
