import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemScalarWhereInput } from "../inputs/FoodItemScalarWhereInput";
import { FoodItemUpdateManyMutationInput } from "../inputs/FoodItemUpdateManyMutationInput";

@TypeGraphQL.InputType("FoodItemUpdateManyWithWhereWithoutMenuInput", {
  isAbstract: true
})
export class FoodItemUpdateManyWithWhereWithoutMenuInput {
  @TypeGraphQL.Field(_type => FoodItemScalarWhereInput, {
    nullable: false
  })
  where!: FoodItemScalarWhereInput;

  @TypeGraphQL.Field(_type => FoodItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: FoodItemUpdateManyMutationInput;
}
