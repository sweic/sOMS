import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImageOrderByWithAggregationInput } from "../../../inputs/ImageOrderByWithAggregationInput";
import { ImageScalarWhereWithAggregatesInput } from "../../../inputs/ImageScalarWhereWithAggregatesInput";
import { ImageWhereInput } from "../../../inputs/ImageWhereInput";
import { ImageScalarFieldEnum } from "../../../../enums/ImageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByImageArgs {
  @TypeGraphQL.Field(_type => ImageWhereInput, {
    nullable: true
  })
  where?: ImageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ImageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ImageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "imageURL">;

  @TypeGraphQL.Field(_type => ImageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ImageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
