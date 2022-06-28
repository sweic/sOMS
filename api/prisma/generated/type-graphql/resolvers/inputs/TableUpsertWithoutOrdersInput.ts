import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableCreateWithoutOrdersInput } from "../inputs/TableCreateWithoutOrdersInput";
import { TableUpdateWithoutOrdersInput } from "../inputs/TableUpdateWithoutOrdersInput";

@TypeGraphQL.InputType("TableUpsertWithoutOrdersInput", {
  isAbstract: true
})
export class TableUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => TableUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: TableUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => TableCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: TableCreateWithoutOrdersInput;
}
