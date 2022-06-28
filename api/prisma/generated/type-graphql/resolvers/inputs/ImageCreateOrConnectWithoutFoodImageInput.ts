import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateWithoutFoodImageInput } from "../inputs/ImageCreateWithoutFoodImageInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageCreateOrConnectWithoutFoodImageInput", {
  isAbstract: true
})
export class ImageCreateOrConnectWithoutFoodImageInput {
  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: false
  })
  where!: ImageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ImageCreateWithoutFoodImageInput, {
    nullable: false
  })
  create!: ImageCreateWithoutFoodImageInput;
}
