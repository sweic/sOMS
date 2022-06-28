import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TableCreateInput } from "../../../inputs/TableCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTableArgs {
  @TypeGraphQL.Field(_type => TableCreateInput, {
    nullable: false
  })
  data!: TableCreateInput;
}
