import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableScalarWhereInput } from "../inputs/TableScalarWhereInput";
import { TableUpdateManyMutationInput } from "../inputs/TableUpdateManyMutationInput";

@TypeGraphQL.InputType("TableUpdateManyWithWhereWithoutSessionInput", {
  isAbstract: true
})
export class TableUpdateManyWithWhereWithoutSessionInput {
  @TypeGraphQL.Field(_type => TableScalarWhereInput, {
    nullable: false
  })
  where!: TableScalarWhereInput;

  @TypeGraphQL.Field(_type => TableUpdateManyMutationInput, {
    nullable: false
  })
  data!: TableUpdateManyMutationInput;
}
