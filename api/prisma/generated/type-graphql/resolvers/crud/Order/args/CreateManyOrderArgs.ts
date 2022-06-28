import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderCreateManyInput } from "../../../inputs/OrderCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrderArgs {
  @TypeGraphQL.Field(_type => [OrderCreateManyInput], {
    nullable: false
  })
  data!: OrderCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
