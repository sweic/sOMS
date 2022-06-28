import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderItemUpdateInput } from "../../../inputs/OrderItemUpdateInput";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemUpdateInput, {
    nullable: false
  })
  data!: OrderItemUpdateInput;

  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false
  })
  where!: OrderItemWhereUniqueInput;
}
