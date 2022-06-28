import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderUpdateManyMutationInput } from "../../../inputs/OrderUpdateManyMutationInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrderArgs {
  @TypeGraphQL.Field(_type => OrderUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrderUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;
}
