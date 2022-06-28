import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderItemCreateManyInput } from "../../../inputs/OrderItemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrderItemArgs {
  @TypeGraphQL.Field(_type => [OrderItemCreateManyInput], {
    nullable: false
  })
  data!: OrderItemCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
