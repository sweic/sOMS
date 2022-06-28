import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableCreateManySessionInputEnvelope } from "../inputs/TableCreateManySessionInputEnvelope";
import { TableCreateOrConnectWithoutSessionInput } from "../inputs/TableCreateOrConnectWithoutSessionInput";
import { TableCreateWithoutSessionInput } from "../inputs/TableCreateWithoutSessionInput";
import { TableScalarWhereInput } from "../inputs/TableScalarWhereInput";
import { TableUpdateManyWithWhereWithoutSessionInput } from "../inputs/TableUpdateManyWithWhereWithoutSessionInput";
import { TableUpdateWithWhereUniqueWithoutSessionInput } from "../inputs/TableUpdateWithWhereUniqueWithoutSessionInput";
import { TableUpsertWithWhereUniqueWithoutSessionInput } from "../inputs/TableUpsertWithWhereUniqueWithoutSessionInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";

@TypeGraphQL.InputType("TableUpdateManyWithoutSessionInput", {
  isAbstract: true
})
export class TableUpdateManyWithoutSessionInput {
  @TypeGraphQL.Field(_type => [TableCreateWithoutSessionInput], {
    nullable: true
  })
  create?: TableCreateWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableCreateOrConnectWithoutSessionInput], {
    nullable: true
  })
  connectOrCreate?: TableCreateOrConnectWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableUpsertWithWhereUniqueWithoutSessionInput], {
    nullable: true
  })
  upsert?: TableUpsertWithWhereUniqueWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => TableCreateManySessionInputEnvelope, {
    nullable: true
  })
  createMany?: TableCreateManySessionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TableWhereUniqueInput], {
    nullable: true
  })
  set?: TableWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TableWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableWhereUniqueInput], {
    nullable: true
  })
  delete?: TableWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableWhereUniqueInput], {
    nullable: true
  })
  connect?: TableWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableUpdateWithWhereUniqueWithoutSessionInput], {
    nullable: true
  })
  update?: TableUpdateWithWhereUniqueWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableUpdateManyWithWhereWithoutSessionInput], {
    nullable: true
  })
  updateMany?: TableUpdateManyWithWhereWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TableScalarWhereInput[] | undefined;
}
