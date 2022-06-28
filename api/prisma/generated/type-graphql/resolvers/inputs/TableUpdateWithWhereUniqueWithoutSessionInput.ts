import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableUpdateWithoutSessionInput } from "../inputs/TableUpdateWithoutSessionInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";

@TypeGraphQL.InputType("TableUpdateWithWhereUniqueWithoutSessionInput", {
  isAbstract: true
})
export class TableUpdateWithWhereUniqueWithoutSessionInput {
  @TypeGraphQL.Field(_type => TableWhereUniqueInput, {
    nullable: false
  })
  where!: TableWhereUniqueInput;

  @TypeGraphQL.Field(_type => TableUpdateWithoutSessionInput, {
    nullable: false
  })
  data!: TableUpdateWithoutSessionInput;
}
