import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ImageScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ImageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ImageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ImageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ImageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ImageScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ImageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  imageURL?: StringWithAggregatesFilter | undefined;
}
