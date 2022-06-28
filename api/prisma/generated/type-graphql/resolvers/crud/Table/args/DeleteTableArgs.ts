import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TableWhereUniqueInput } from "../../../inputs/TableWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteTableArgs {
  @TypeGraphQL.Field(_type => TableWhereUniqueInput, {
    nullable: false
  })
  where!: TableWhereUniqueInput;
}
