import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateNestedManyWithoutMenuInput } from "../inputs/FoodItemCreateNestedManyWithoutMenuInput";
import { SessionCreateNestedManyWithoutMenuInput } from "../inputs/SessionCreateNestedManyWithoutMenuInput";

@TypeGraphQL.InputType("MenuCreateWithoutSectionsInput", {
  isAbstract: true
})
export class MenuCreateWithoutSectionsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedat?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => SessionCreateNestedManyWithoutMenuInput, {
    nullable: true
  })
  sessions?: SessionCreateNestedManyWithoutMenuInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemCreateNestedManyWithoutMenuInput, {
    nullable: true
  })
  fooditems?: FoodItemCreateNestedManyWithoutMenuInput | undefined;
}
