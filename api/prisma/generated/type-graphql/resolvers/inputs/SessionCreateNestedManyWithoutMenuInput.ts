import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateManyMenuInputEnvelope } from "../inputs/SessionCreateManyMenuInputEnvelope";
import { SessionCreateOrConnectWithoutMenuInput } from "../inputs/SessionCreateOrConnectWithoutMenuInput";
import { SessionCreateWithoutMenuInput } from "../inputs/SessionCreateWithoutMenuInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionCreateNestedManyWithoutMenuInput", {
  isAbstract: true
})
export class SessionCreateNestedManyWithoutMenuInput {
  @TypeGraphQL.Field(_type => [SessionCreateWithoutMenuInput], {
    nullable: true
  })
  create?: SessionCreateWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionCreateOrConnectWithoutMenuInput], {
    nullable: true
  })
  connectOrCreate?: SessionCreateOrConnectWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => SessionCreateManyMenuInputEnvelope, {
    nullable: true
  })
  createMany?: SessionCreateManyMenuInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
    nullable: true
  })
  connect?: SessionWhereUniqueInput[] | undefined;
}
