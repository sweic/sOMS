import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrderArgs {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;
}
