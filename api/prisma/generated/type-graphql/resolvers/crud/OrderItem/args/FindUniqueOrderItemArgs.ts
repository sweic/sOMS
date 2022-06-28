import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: false
  })
  where!: OrderItemWhereUniqueInput;
}
