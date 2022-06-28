import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderItemOrderByWithRelationInput } from "../../../inputs/OrderItemOrderByWithRelationInput";
import { OrderItemWhereInput } from "../../../inputs/OrderItemWhereInput";
import { OrderItemWhereUniqueInput } from "../../../inputs/OrderItemWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOrderItemArgs {
  @TypeGraphQL.Field(_type => OrderItemWhereInput, {
    nullable: true
  })
  where?: OrderItemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderItemOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OrderItemOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderItemWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrderItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
