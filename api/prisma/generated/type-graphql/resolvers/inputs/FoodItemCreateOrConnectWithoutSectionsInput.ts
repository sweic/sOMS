import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateWithoutSectionsInput } from "../inputs/FoodItemCreateWithoutSectionsInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemCreateOrConnectWithoutSectionsInput", {
  isAbstract: true
})
export class FoodItemCreateOrConnectWithoutSectionsInput {
  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: false
  })
  where!: FoodItemWhereUniqueInput;

  @TypeGraphQL.Field(_type => FoodItemCreateWithoutSectionsInput, {
    nullable: false
  })
  create!: FoodItemCreateWithoutSectionsInput;
}
