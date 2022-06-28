import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderItemWhereInput } from "../../../inputs/OrderItemWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemWhereInput, {
    nullable: true
  })
  where?: OrderItemWhereInput | undefined;
}
