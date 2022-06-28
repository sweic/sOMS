import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateWithoutSectionImageInput } from "../inputs/ImageCreateWithoutSectionImageInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageCreateOrConnectWithoutSectionImageInput", {
  isAbstract: true
})
export class ImageCreateOrConnectWithoutSectionImageInput {
  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: false
  })
  where!: ImageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ImageCreateWithoutSectionImageInput, {
    nullable: false
  })
  create!: ImageCreateWithoutSectionImageInput;
}
