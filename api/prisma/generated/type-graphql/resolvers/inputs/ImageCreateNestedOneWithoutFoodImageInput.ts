import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateOrConnectWithoutFoodImageInput } from "../inputs/ImageCreateOrConnectWithoutFoodImageInput";
import { ImageCreateWithoutFoodImageInput } from "../inputs/ImageCreateWithoutFoodImageInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageCreateNestedOneWithoutFoodImageInput", {
  isAbstract: true
})
export class ImageCreateNestedOneWithoutFoodImageInput {
  @TypeGraphQL.Field(_type => ImageCreateWithoutFoodImageInput, {
    nullable: true
  })
  create?: ImageCreateWithoutFoodImageInput | undefined;

  @TypeGraphQL.Field(_type => ImageCreateOrConnectWithoutFoodImageInput, {
    nullable: true
  })
  connectOrCreate?: ImageCreateOrConnectWithoutFoodImageInput | undefined;

  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: true
  })
  connect?: ImageWhereUniqueInput | undefined;
}
