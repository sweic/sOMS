import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateManyMenuInput } from "../inputs/FoodItemCreateManyMenuInput";

@TypeGraphQL.InputType("FoodItemCreateManyMenuInputEnvelope", {
  isAbstract: true
})
export class FoodItemCreateManyMenuInputEnvelope {
  @TypeGraphQL.Field(_type => [FoodItemCreateManyMenuInput], {
    nullable: false
  })
  data!: FoodItemCreateManyMenuInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
