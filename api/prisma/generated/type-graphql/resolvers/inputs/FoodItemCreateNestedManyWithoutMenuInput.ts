import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateManyMenuInputEnvelope } from "../inputs/FoodItemCreateManyMenuInputEnvelope";
import { FoodItemCreateOrConnectWithoutMenuInput } from "../inputs/FoodItemCreateOrConnectWithoutMenuInput";
import { FoodItemCreateWithoutMenuInput } from "../inputs/FoodItemCreateWithoutMenuInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemCreateNestedManyWithoutMenuInput", {
  isAbstract: true
})
export class FoodItemCreateNestedManyWithoutMenuInput {
  @TypeGraphQL.Field(_type => [FoodItemCreateWithoutMenuInput], {
    nullable: true
  })
  create?: FoodItemCreateWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemCreateOrConnectWithoutMenuInput], {
    nullable: true
  })
  connectOrCreate?: FoodItemCreateOrConnectWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => FoodItemCreateManyMenuInputEnvelope, {
    nullable: true
  })
  createMany?: FoodItemCreateManyMenuInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodItemWhereUniqueInput[] | undefined;
}
