import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderOrderByWithAggregationInput } from "../../../inputs/OrderOrderByWithAggregationInput";
import { OrderScalarWhereWithAggregatesInput } from "../../../inputs/OrderScalarWhereWithAggregatesInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderScalarFieldEnum } from "../../../../enums/OrderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrderArgs {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OrderOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "tableNumber" | "createdAt" | "completedAt" | "price" | "tableid" | "sessionid">;

  @TypeGraphQL.Field(_type => OrderScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OrderScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
