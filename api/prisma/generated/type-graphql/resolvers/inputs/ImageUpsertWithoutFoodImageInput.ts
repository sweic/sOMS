import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateWithoutFoodImageInput } from "../inputs/ImageCreateWithoutFoodImageInput";
import { ImageUpdateWithoutFoodImageInput } from "../inputs/ImageUpdateWithoutFoodImageInput";

@TypeGraphQL.InputType("ImageUpsertWithoutFoodImageInput", {
  isAbstract: true
})
export class ImageUpsertWithoutFoodImageInput {
  @TypeGraphQL.Field(_type => ImageUpdateWithoutFoodImageInput, {
    nullable: false
  })
  update!: ImageUpdateWithoutFoodImageInput;

  @TypeGraphQL.Field(_type => ImageCreateWithoutFoodImageInput, {
    nullable: false
  })
  create!: ImageCreateWithoutFoodImageInput;
}
