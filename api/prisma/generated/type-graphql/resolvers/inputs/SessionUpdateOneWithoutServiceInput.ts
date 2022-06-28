import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateOrConnectWithoutServiceInput } from "../inputs/SessionCreateOrConnectWithoutServiceInput";
import { SessionCreateWithoutServiceInput } from "../inputs/SessionCreateWithoutServiceInput";
import { SessionUpdateWithoutServiceInput } from "../inputs/SessionUpdateWithoutServiceInput";
import { SessionUpsertWithoutServiceInput } from "../inputs/SessionUpsertWithoutServiceInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionUpdateOneWithoutServiceInput", {
  isAbstract: true
})
export class SessionUpdateOneWithoutServiceInput {
  @TypeGraphQL.Field(_type => SessionCreateWithoutServiceInput, {
    nullable: true
  })
  create?: SessionCreateWithoutServiceInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateOrConnectWithoutServiceInput, {
    nullable: true
  })
  connectOrCreate?: SessionCreateOrConnectWithoutServiceInput | undefined;

  @TypeGraphQL.Field(_type => SessionUpsertWithoutServiceInput, {
    nullable: true
  })
  upsert?: SessionUpsertWithoutServiceInput | undefined;

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

  @TypeGraphQL.Field(_type => SessionUpdateWithoutServiceInput, {
    nullable: true
  })
  update?: SessionUpdateWithoutServiceInput | undefined;
}
