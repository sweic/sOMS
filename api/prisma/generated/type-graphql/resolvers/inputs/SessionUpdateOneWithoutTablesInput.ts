import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateOrConnectWithoutTablesInput } from "../inputs/SessionCreateOrConnectWithoutTablesInput";
import { SessionCreateWithoutTablesInput } from "../inputs/SessionCreateWithoutTablesInput";
import { SessionUpdateWithoutTablesInput } from "../inputs/SessionUpdateWithoutTablesInput";
import { SessionUpsertWithoutTablesInput } from "../inputs/SessionUpsertWithoutTablesInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionUpdateOneWithoutTablesInput", {
  isAbstract: true
})
export class SessionUpdateOneWithoutTablesInput {
  @TypeGraphQL.Field(_type => SessionCreateWithoutTablesInput, {
    nullable: true
  })
  create?: SessionCreateWithoutTablesInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateOrConnectWithoutTablesInput, {
    nullable: true
  })
  connectOrCreate?: SessionCreateOrConnectWithoutTablesInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpsertWithoutTablesInput, {
    nullable: true
  })
  upsert?: SessionUpsertWithoutTablesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: true
  })
  connect?: SessionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateWithoutTablesInput, {
    nullable: true
  })
  update?: SessionUpdateWithoutTablesInput | undefined;
}
