import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageWhereInput } from "../inputs/ImageWhereInput";

@TypeGraphQL.InputType("ImageRelationFilter", {
  isAbstract: true
})
export class ImageRelationFilter {
  @TypeGraphQL.Field(_type => ImageWhereInput, {
    nullable: true
  })
  is?: ImageWhereInput | undefined;

  @TypeGraphQL.Field(_type => ImageWhereInput, {
    nullable: true
  })
  isNot?: ImageWhereInput | undefined;
}
