import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateManyMenuInputEnvelope } from "../inputs/SectionCreateManyMenuInputEnvelope";
import { SectionCreateOrConnectWithoutMenuInput } from "../inputs/SectionCreateOrConnectWithoutMenuInput";
import { SectionCreateWithoutMenuInput } from "../inputs/SectionCreateWithoutMenuInput";
import { SectionScalarWhereInput } from "../inputs/SectionScalarWhereInput";
import { SectionUpdateManyWithWhereWithoutMenuInput } from "../inputs/SectionUpdateManyWithWhereWithoutMenuInput";
import { SectionUpdateWithWhereUniqueWithoutMenuInput } from "../inputs/SectionUpdateWithWhereUniqueWithoutMenuInput";
import { SectionUpsertWithWhereUniqueWithoutMenuInput } from "../inputs/SectionUpsertWithWhereUniqueWithoutMenuInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionUpdateManyWithoutMenuInput", {
  isAbstract: true
})
export class SectionUpdateManyWithoutMenuInput {
  @TypeGraphQL.Field(_type => [SectionCreateWithoutMenuInput], {
    nullable: true
  })
  create?: SectionCreateWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionCreateOrConnectWithoutMenuInput], {
    nullable: true
  })
  connectOrCreate?: SectionCreateOrConnectWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionUpsertWithWhereUniqueWithoutMenuInput], {
    nullable: true
  })
  upsert?: SectionUpsertWithWhereUniqueWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => SectionCreateManyMenuInputEnvelope, {
    nullable: true
  })
  createMany?: SectionCreateManyMenuInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SectionWhereUniqueInput], {
    nullable: true
  })
  set?: SectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionWhereUniqueInput], {
    nullable: true
  })
  delete?: SectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionWhereUniqueInput], {
    nullable: true
  })
  connect?: SectionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionUpdateWithWhereUniqueWithoutMenuInput], {
    nullable: true
  })
  update?: SectionUpdateWithWhereUniqueWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionUpdateManyWithWhereWithoutMenuInput], {
    nullable: true
  })
  updateMany?: SectionUpdateManyWithWhereWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SectionScalarWhereInput[] | undefined;
}
