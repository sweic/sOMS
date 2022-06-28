import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderItemCreateInput } from "../../../inputs/OrderItemCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemCreateInput, {
    nullable: false
  })
  data!: OrderItemCreateInput;
}
