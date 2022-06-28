import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateOrConnectWithoutImageInput } from "../inputs/FoodItemCreateOrConnectWithoutImageInput";
import { FoodItemCreateWithoutImageInput } from "../inputs/FoodItemCreateWithoutImageInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemCreateNestedOneWithoutImageInput", {
  isAbstract: true
})
export class FoodItemCreateNestedOneWithoutImageInput {
  @TypeGraphQL.Field(_type => FoodItemCreateWithoutImageInput, {
    nullable: true
  })
  create?: FoodItemCreateWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemCreateOrConnectWithoutImageInput, {
    nullable: true
  })
  connectOrCreate?: FoodItemCreateOrConnectWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: true
  })
  connect?: FoodItemWhereUniqueInput | undefined;
}
