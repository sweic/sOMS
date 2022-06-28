import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrderArgs {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;
}
