import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateOrConnectWithoutOrdersInput } from "../inputs/SessionCreateOrConnectWithoutOrdersInput";
import { SessionCreateWithoutOrdersInput } from "../inputs/SessionCreateWithoutOrdersInput";
import { SessionUpdateWithoutOrdersInput } from "../inputs/SessionUpdateWithoutOrdersInput";
import { SessionUpsertWithoutOrdersInput } from "../inputs/SessionUpsertWithoutOrdersInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionUpdateOneRequiredWithoutOrdersInput", {
  isAbstract: true
})
export class SessionUpdateOneRequiredWithoutOrdersInput {
  @TypeGraphQL.Field(_type => SessionCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: SessionCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: SessionCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: SessionUpsertWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: true
  })
  connect?: SessionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: SessionUpdateWithoutOrdersInput | undefined;
}
