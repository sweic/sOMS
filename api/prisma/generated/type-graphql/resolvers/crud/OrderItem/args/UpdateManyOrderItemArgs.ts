import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderItemUpdateManyMutationInput } from "../../../inputs/OrderItemUpdateManyMutationInput";
import { OrderItemWhereInput } from "../../../inputs/OrderItemWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrderItemUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OrderItemWhereInput, {
    nullable: true
  })
  where?: OrderItemWhereInput | undefined;
}
