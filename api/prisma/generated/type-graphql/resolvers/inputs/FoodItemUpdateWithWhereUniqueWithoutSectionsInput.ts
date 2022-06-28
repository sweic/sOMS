import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemUpdateWithoutSectionsInput } from "../inputs/FoodItemUpdateWithoutSectionsInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemUpdateWithWhereUniqueWithoutSectionsInput", {
  isAbstract: true
})
export class FoodItemUpdateWithWhereUniqueWithoutSectionsInput {
  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: false
  })
  where!: FoodItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodItemUpdateWithoutSectionsInput, {
    nullable: false
  })
  data!: FoodItemUpdateWithoutSectionsInput;
}
