import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MenuCreateInput } from "../../../inputs/MenuCreateInput";
import { MenuUpdateInput } from "../../../inputs/MenuUpdateInput";
import { MenuWhereUniqueInput } from "../../../inputs/MenuWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMenuArgs {
  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: false
  })
  where!: MenuWhereUniqueInput;

  @TypeGraphQL.Field(_type => MenuCreateInput, {
    nullable: false
  })
  create!: MenuCreateInput;

  @TypeGraphQL.Field(_type => MenuUpdateInput, {
    nullable: false
  })
  update!: MenuUpdateInput;
}
