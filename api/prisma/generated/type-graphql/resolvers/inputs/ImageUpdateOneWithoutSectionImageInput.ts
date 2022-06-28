import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateOrConnectWithoutSectionImageInput } from "../inputs/ImageCreateOrConnectWithoutSectionImageInput";
import { ImageCreateWithoutSectionImageInput } from "../inputs/ImageCreateWithoutSectionImageInput";
import { ImageUpdateWithoutSectionImageInput } from "../inputs/ImageUpdateWithoutSectionImageInput";
import { ImageUpsertWithoutSectionImageInput } from "../inputs/ImageUpsertWithoutSectionImageInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageUpdateOneWithoutSectionImageInput", {
  isAbstract: true
})
export class ImageUpdateOneWithoutSectionImageInput {
  @TypeGraphQL.Field(_type => ImageCreateWithoutSectionImageInput, {
    nullable: true
  })
  create?: ImageCreateWithoutSectionImageInput | undefined;

  @TypeGraphQL.Field(_type => ImageCreateOrConnectWithoutSectionImageInput, {
    nullable: true
  })
  connectOrCreate?: ImageCreateOrConnectWithoutSectionImageInput | undefined;

  @TypeGraphQL.Field(_type => ImageUpsertWithoutSectionImageInput, {
    nullable: true
  })
  upsert?: ImageUpsertWithoutSectionImageInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: true
  })
  connect?: ImageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ImageUpdateWithoutSectionImageInput, {
    nullable: true
  })
  update?: ImageUpdateWithoutSectionImageInput | undefined;
}
