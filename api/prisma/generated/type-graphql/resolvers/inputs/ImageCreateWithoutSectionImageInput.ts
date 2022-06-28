import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateNestedOneWithoutImageInput } from "../inputs/FoodItemCreateNestedOneWithoutImageInput";

@TypeGraphQL.InputType("ImageCreateWithoutSectionImageInput", {
  isAbstract: true
})
export class ImageCreateWithoutSectionImageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imageURL!: string;

  @TypeGraphQL.Field(_type => FoodItemCreateNestedOneWithoutImageInput, {
    nullable: true
  })
  foodImage?: FoodItemCreateNestedOneWithoutImageInput | undefined;
}
