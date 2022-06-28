import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateNestedOneWithoutTablesInput } from "../inputs/SessionCreateNestedOneWithoutTablesInput";

@TypeGraphQL.InputType("TableCreateWithoutOrdersInput", {
  isAbstract: true
})
export class TableCreateWithoutOrdersInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tableNumber!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;

  @TypeGraphQL.Field(_type => SessionCreateNestedOneWithoutTablesInput, {
    nullable: true
  })
  session?: SessionCreateNestedOneWithoutTablesInput | undefined;
}
