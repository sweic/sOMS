import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderOrderByWithRelationInput } from "../../../inputs/OrderOrderByWithRelationInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateOrderArgs {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OrderOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
