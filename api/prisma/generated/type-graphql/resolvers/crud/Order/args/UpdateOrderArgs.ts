import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderUpdateInput } from "../../../inputs/OrderUpdateInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOrderArgs {
  @TypeGraphQL.Field(_type => OrderUpdateInput, {
    nullable: false
  })
  data!: OrderUpdateInput;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;
}
