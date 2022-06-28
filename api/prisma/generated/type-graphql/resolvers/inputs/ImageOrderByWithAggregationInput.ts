import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageAvgOrderByAggregateInput } from "../inputs/ImageAvgOrderByAggregateInput";
import { ImageCountOrderByAggregateInput } from "../inputs/ImageCountOrderByAggregateInput";
import { ImageMaxOrderByAggregateInput } from "../inputs/ImageMaxOrderByAggregateInput";
import { ImageMinOrderByAggregateInput } from "../inputs/ImageMinOrderByAggregateInput";
import { ImageSumOrderByAggregateInput } from "../inputs/ImageSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ImageOrderByWithAggregationInput", {
  isAbstract: true
})
export class ImageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imageURL?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ImageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ImageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImageAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ImageAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ImageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ImageMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ImageSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ImageSumOrderByAggregateInput | undefined;
}
