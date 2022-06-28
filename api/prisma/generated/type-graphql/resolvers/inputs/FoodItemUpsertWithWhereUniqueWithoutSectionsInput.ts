import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateWithoutSectionsInput } from "../inputs/FoodItemCreateWithoutSectionsInput";
import { FoodItemUpdateWithoutSectionsInput } from "../inputs/FoodItemUpdateWithoutSectionsInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemUpsertWithWhereUniqueWithoutSectionsInput", {
  isAbstract: true
})
export class FoodItemUpsertWithWhereUniqueWithoutSectionsInput {
  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: false
  })
  where!: FoodItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodItemUpdateWithoutSectionsInput, {
    nullable: false
  })
  update!: FoodItemUpdateWithoutSectionsInput;

  @TypeGraphQL.Field(_type => FoodItemCreateWithoutSectionsInput, {
    nullable: false
  })
  create!: FoodItemCreateWithoutSectionsInput;
}
