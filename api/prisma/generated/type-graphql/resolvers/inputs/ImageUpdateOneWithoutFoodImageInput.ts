import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageCreateOrConnectWithoutFoodImageInput } from "../inputs/ImageCreateOrConnectWithoutFoodImageInput";
import { ImageCreateWithoutFoodImageInput } from "../inputs/ImageCreateWithoutFoodImageInput";
import { ImageUpdateWithoutFoodImageInput } from "../inputs/ImageUpdateWithoutFoodImageInput";
import { ImageUpsertWithoutFoodImageInput } from "../inputs/ImageUpsertWithoutFoodImageInput";
import { ImageWhereUniqueInput } from "../inputs/ImageWhereUniqueInput";

@TypeGraphQL.InputType("ImageUpdateOneWithoutFoodImageInput", {
  isAbstract: true
})
export class ImageUpdateOneWithoutFoodImageInput {
  @TypeGraphQL.Field(_type => ImageCreateWithoutFoodImageInput, {
    nullable: true
  })
  create?: ImageCreateWithoutFoodImageInput | undefined;

  @TypeGraphQL.Field(_type => ImageCreateOrConnectWithoutFoodImageInput, {
    nullable: true
  })
  connectOrCreate?: ImageCreateOrConnectWithoutFoodImageInput | undefined;

  @TypeGraphQL.Field(_type => ImageUpsertWithoutFoodImageInput, {
    nullable: true
  })
  upsert?: ImageUpsertWithoutFoodImageInput | undefined;

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

  @TypeGraphQL.Field(_type => ImageUpdateWithoutFoodImageInput, {
    nullable: true
  })
  update?: ImageUpdateWithoutFoodImageInput | undefined;
}
