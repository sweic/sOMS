import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateManyMenuInputEnvelope } from "../inputs/SessionCreateManyMenuInputEnvelope";
import { SessionCreateOrConnectWithoutMenuInput } from "../inputs/SessionCreateOrConnectWithoutMenuInput";
import { SessionCreateWithoutMenuInput } from "../inputs/SessionCreateWithoutMenuInput";
import { SessionScalarWhereInput } from "../inputs/SessionScalarWhereInput";
import { SessionUpdateManyWithWhereWithoutMenuInput } from "../inputs/SessionUpdateManyWithWhereWithoutMenuInput";
import { SessionUpdateWithWhereUniqueWithoutMenuInput } from "../inputs/SessionUpdateWithWhereUniqueWithoutMenuInput";
import { SessionUpsertWithWhereUniqueWithoutMenuInput } from "../inputs/SessionUpsertWithWhereUniqueWithoutMenuInput";
import { SessionWhereUniqueInput } from "../inputs/SessionWhereUniqueInput";

@TypeGraphQL.InputType("SessionUpdateManyWithoutMenuInput", {
  isAbstract: true
})
export class SessionUpdateManyWithoutMenuInput {
  @TypeGraphQL.Field(_type => [SessionCreateWithoutMenuInput], {
    nullable: true
  })
  create?: SessionCreateWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionCreateOrConnectWithoutMenuInput], {
    nullable: true
  })
  connectOrCreate?: SessionCreateOrConnectWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionUpsertWithWhereUniqueWithoutMenuInput], {
    nullable: true
  })
  upsert?: SessionUpsertWithWhereUniqueWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => SessionCreateManyMenuInputEnvelope, {
    nullable: true
  })
  createMany?: SessionCreateManyMenuInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
    nullable: true
  })
  set?: SessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
    nullable: true
  })
  delete?: SessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereUniqueInput], {
    nullable: true
  })
  connect?: SessionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionUpdateWithWhereUniqueWithoutMenuInput], {
    nullable: true
  })
  update?: SessionUpdateWithWhereUniqueWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionUpdateManyWithWhereWithoutMenuInput], {
    nullable: true
  })
  updateMany?: SessionUpdateManyWithWhereWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SessionScalarWhereInput[] | undefined;
}
