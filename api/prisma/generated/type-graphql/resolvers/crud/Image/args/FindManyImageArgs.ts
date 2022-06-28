import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImageOrderByWithRelationInput } from "../../../inputs/ImageOrderByWithRelationInput";
import { ImageWhereInput } from "../../../inputs/ImageWhereInput";
import { ImageWhereUniqueInput } from "../../../inputs/ImageWhereUniqueInput";
import { ImageScalarFieldEnum } from "../../../../enums/ImageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyImageArgs {
  @TypeGraphQL.Field(_type => ImageWhereInput, {
    nullable: true
  })
  where?: ImageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ImageOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ImageOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: true
  })
  cursor?: ImageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ImageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "imageURL"> | undefined;
}
