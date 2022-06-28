import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableCreateWithoutSessionInput } from "../inputs/TableCreateWithoutSessionInput";
import { TableUpdateWithoutSessionInput } from "../inputs/TableUpdateWithoutSessionInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";

@TypeGraphQL.InputType("TableUpsertWithWhereUniqueWithoutSessionInput", {
  isAbstract: true
})
export class TableUpsertWithWhereUniqueWithoutSessionInput {
  @TypeGraphQL.Field(_type => TableWhereUniqueInput, {
    nullable: false
  })
  where!: TableWhereUniqueInput;

  @TypeGraphQL.Field(_type => TableUpdateWithoutSessionInput, {
    nullable: false
  })
  update!: TableUpdateWithoutSessionInput;

  @TypeGraphQL.Field(_type => TableCreateWithoutSessionInput, {
    nullable: false
  })
  create!: TableCreateWithoutSessionInput;
}
