import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateManyMenuInputEnvelope } from "../inputs/FoodItemCreateManyMenuInputEnvelope";
import { FoodItemCreateOrConnectWithoutMenuInput } from "../inputs/FoodItemCreateOrConnectWithoutMenuInput";
import { FoodItemCreateWithoutMenuInput } from "../inputs/FoodItemCreateWithoutMenuInput";
import { FoodItemScalarWhereInput } from "../inputs/FoodItemScalarWhereInput";
import { FoodItemUpdateManyWithWhereWithoutMenuInput } from "../inputs/FoodItemUpdateManyWithWhereWithoutMenuInput";
import { FoodItemUpdateWithWhereUniqueWithoutMenuInput } from "../inputs/FoodItemUpdateWithWhereUniqueWithoutMenuInput";
import { FoodItemUpsertWithWhereUniqueWithoutMenuInput } from "../inputs/FoodItemUpsertWithWhereUniqueWithoutMenuInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemUpdateManyWithoutMenuInput", {
  isAbstract: true
})
export class FoodItemUpdateManyWithoutMenuInput {
  @TypeGraphQL.Field(_type => [FoodItemCreateWithoutMenuInput], {
    nullable: true
  })
  create?: FoodItemCreateWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemCreateOrConnectWithoutMenuInput], {
    nullable: true
  })
  connectOrCreate?: FoodItemCreateOrConnectWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemUpsertWithWhereUniqueWithoutMenuInput], {
    nullable: true
  })
  upsert?: FoodItemUpsertWithWhereUniqueWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodItemCreateManyMenuInputEnvelope, {
    nullable: true
  })
  createMany?: FoodItemCreateManyMenuInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereUniqueInput], {
    nullable: true
  })
  set?: FoodItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FoodItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereUniqueInput], {
    nullable: true
  })
  delete?: FoodItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemUpdateWithWhereUniqueWithoutMenuInput], {
    nullable: true
  })
  update?: FoodItemUpdateWithWhereUniqueWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemUpdateManyWithWhereWithoutMenuInput], {
    nullable: true
  })
  updateMany?: FoodItemUpdateManyWithWhereWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FoodItemScalarWhereInput[] | undefined;
}
