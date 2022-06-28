import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderCreateInput } from "../../../inputs/OrderCreateInput";
import { OrderUpdateInput } from "../../../inputs/OrderUpdateInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOrderArgs {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderCreateInput, {
    nullable: false
  })
  create!: OrderCreateInput;

  @TypeGraphQL.Field(_type => OrderUpdateInput, {
    nullable: false
  })
  update!: OrderUpdateInput;
}
