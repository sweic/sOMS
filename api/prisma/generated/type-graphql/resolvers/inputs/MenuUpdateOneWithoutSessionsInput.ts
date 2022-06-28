import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateOrConnectWithoutSessionsInput } from "../inputs/MenuCreateOrConnectWithoutSessionsInput";
import { MenuCreateWithoutSessionsInput } from "../inputs/MenuCreateWithoutSessionsInput";
import { MenuUpdateWithoutSessionsInput } from "../inputs/MenuUpdateWithoutSessionsInput";
import { MenuUpsertWithoutSessionsInput } from "../inputs/MenuUpsertWithoutSessionsInput";
import { MenuWhereUniqueInput } from "../inputs/MenuWhereUniqueInput";

@TypeGraphQL.InputType("MenuUpdateOneWithoutSessionsInput", {
  isAbstract: true
})
export class MenuUpdateOneWithoutSessionsInput {
  @TypeGraphQL.Field(_type => MenuCreateWithoutSessionsInput, {
    nullable: true
  })
  create?: MenuCreateWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => MenuCreateOrConnectWithoutSessionsInput, {
    nullable: true
  })
  connectOrCreate?: MenuCreateOrConnectWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => MenuUpsertWithoutSessionsInput, {
    nullable: true
  })
  upsert?: MenuUpsertWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: true
  })
  connect?: MenuWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MenuUpdateWithoutSessionsInput, {
    nullable: true
  })
  update?: MenuUpdateWithoutSessionsInput | undefined;
}
