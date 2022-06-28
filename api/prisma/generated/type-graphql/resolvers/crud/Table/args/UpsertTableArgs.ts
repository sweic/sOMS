import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TableCreateInput } from "../../../inputs/TableCreateInput";
import { TableUpdateInput } from "../../../inputs/TableUpdateInput";
import { TableWhereUniqueInput } from "../../../inputs/TableWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTableArgs {
  @TypeGraphQL.Field(_type => TableWhereUniqueInput, {
    nullable: false
  })
  where!: TableWhereUniqueInput;

  @TypeGraphQL.Field(_type => TableCreateInput, {
    nullable: false
  })
  create!: TableCreateInput;

  @TypeGraphQL.Field(_type => TableUpdateInput, {
    nullable: false
  })
  update!: TableUpdateInput;
}
