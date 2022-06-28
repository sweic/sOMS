import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateWithoutSectionImageInput } from "../inputs/ImageCreateWithoutSectionImageInput";
import { ImageUpdateWithoutSectionImageInput } from "../inputs/ImageUpdateWithoutSectionImageInput";

@TypeGraphQL.InputType("ImageUpsertWithoutSectionImageInput", {
  isAbstract: true
})
export class ImageUpsertWithoutSectionImageInput {
  @TypeGraphQL.Field(_type => ImageUpdateWithoutSectionImageInput, {
    nullable: false
  })
  update!: ImageUpdateWithoutSectionImageInput;

  @TypeGraphQL.Field(_type => ImageCreateWithoutSectionImageInput, {
    nullable: false
  })
  create!: ImageCreateWithoutSectionImageInput;
}
