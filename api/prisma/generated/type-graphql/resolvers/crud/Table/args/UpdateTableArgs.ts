import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TableUpdateInput } from "../../../inputs/TableUpdateInput";
import { TableWhereUniqueInput } from "../../../inputs/TableWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTableArgs {
  @TypeGraphQL.Field(_type => TableUpdateInput, {
    nullable: false
  })
  data!: TableUpdateInput;

  @TypeGraphQL.Field(_type => TableWhereUniqueInput, {
    nullable: false
  })
  where!: TableWhereUniqueInput;
}
