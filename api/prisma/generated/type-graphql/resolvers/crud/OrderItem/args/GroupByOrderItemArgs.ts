import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderItemOrderByWithAggregationInput } from "../../../inputs/OrderItemOrderByWithAggregationInput";
import { OrderItemScalarWhereWithAggregatesInput } from "../../../inputs/OrderItemScalarWhereWithAggregatesInput";
import { OrderItemWhereInput } from "../../../inputs/OrderItemWhereInput";
import { OrderItemScalarFieldEnum } from "../../../../enums/OrderItemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemWhereInput, {
    nullable: true
  })
  where?: OrderItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderItemOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OrderItemOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderItemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "orderid" | "foodid" | "quantity" | "totalPrice" | "title">;

  @TypeGraphQL.Field(_type => OrderItemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OrderItemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
