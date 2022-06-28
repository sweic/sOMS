import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateoptionsInput } from "../inputs/FoodItemCreateoptionsInput";

@TypeGraphQL.InputType("FoodItemCreateManyMenuInput", {
  isAbstract: true
})
export class FoodItemCreateManyMenuInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  code?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  price!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  available!: boolean;

  @TypeGraphQL.Field(_type => FoodItemCreateoptionsInput, {
    nullable: true
  })
  options?: FoodItemCreateoptionsInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  imageid?: number | undefined;
}
