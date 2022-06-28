import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateOrConnectWithoutSectionImageInput } from "../inputs/ImageCreateOrConnectWithoutSectionImageInput";
import { ImageCreateWithoutSectionImageInput } from "../inputs/ImageCreateWithoutSectionImageInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageCreateNestedOneWithoutSectionImageInput", {
  isAbstract: true
})
export class ImageCreateNestedOneWithoutSectionImageInput {
  @TypeGraphQL.Field(_type => ImageCreateWithoutSectionImageInput, {
    nullable: true
  })
  create?: ImageCreateWithoutSectionImageInput | undefined;

  @TypeGraphQL.Field(_type => ImageCreateOrConnectWithoutSectionImageInput, {
    nullable: true
  })
  connectOrCreate?: ImageCreateOrConnectWithoutSectionImageInput | undefined;

  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: true
  })
  connect?: ImageWhereUniqueInput | undefined;
}
