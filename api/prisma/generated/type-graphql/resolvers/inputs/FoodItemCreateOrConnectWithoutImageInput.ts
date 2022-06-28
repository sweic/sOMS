import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateWithoutImageInput } from "../inputs/FoodItemCreateWithoutImageInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemCreateOrConnectWithoutImageInput", {
  isAbstract: true
})
export class FoodItemCreateOrConnectWithoutImageInput {
  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: false
  })
  where!: FoodItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodItemCreateWithoutImageInput, {
    nullable: false
  })
  create!: FoodItemCreateWithoutImageInput;
}
