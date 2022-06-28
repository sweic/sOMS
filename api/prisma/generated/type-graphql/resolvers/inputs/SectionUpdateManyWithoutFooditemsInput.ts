import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateOrConnectWithoutFooditemsInput } from "../inputs/SectionCreateOrConnectWithoutFooditemsInput";
import { SectionCreateWithoutFooditemsInput } from "../inputs/SectionCreateWithoutFooditemsInput";
import { SectionScalarWhereInput } from "../inputs/SectionScalarWhereInput";
import { SectionUpdateManyWithWhereWithoutFooditemsInput } from "../inputs/SectionUpdateManyWithWhereWithoutFooditemsInput";
import { SectionUpdateWithWhereUniqueWithoutFooditemsInput } from "../inputs/SectionUpdateWithWhereUniqueWithoutFooditemsInput";
import { SectionUpsertWithWhereUniqueWithoutFooditemsInput } from "../inputs/SectionUpsertWithWhereUniqueWithoutFooditemsInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionUpdateManyWithoutFooditemsInput", {
  isAbstract: true
})
export class SectionUpdateManyWithoutFooditemsInput {
  @TypeGraphQL.Field(_type => [SectionCreateWithoutFooditemsInput], {
    nullable: true
  })
  create?: SectionCreateWithoutFooditemsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionCreateOrConnectWithoutFooditemsInput], {
    nullable: true
  })
  connectOrCreate?: SectionCreateOrConnectWithoutFooditemsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionUpsertWithWhereUniqueWithoutFooditemsInput], {
    nullable: true
  })
  upsert?: SectionUpsertWithWhereUniqueWithoutFooditemsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [SectionUpdateWithWhereUniqueWithoutFooditemsInput], {
    nullable: true
  })
  update?: SectionUpdateWithWhereUniqueWithoutFooditemsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionUpdateManyWithWhereWithoutFooditemsInput], {
    nullable: true
  })
  updateMany?: SectionUpdateManyWithWhereWithoutFooditemsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SectionScalarWhereInput[] | undefined;
}
