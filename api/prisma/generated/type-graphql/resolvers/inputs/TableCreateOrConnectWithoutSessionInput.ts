import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableCreateWithoutSessionInput } from "../inputs/TableCreateWithoutSessionInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";

@TypeGraphQL.InputType("TableCreateOrConnectWithoutSessionInput", {
  isAbstract: true
})
export class TableCreateOrConnectWithoutSessionInput {
  @TypeGraphQL.Field(_type => TableWhereUniqueInput, {
    nullable: false
  })
  where!: TableWhereUniqueInput;

  @TypeGraphQL.Field(_type => TableCreateWithoutSessionInput, {
    nullable: false
  })
  create!: TableCreateWithoutSessionInput;
}
