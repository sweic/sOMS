import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MenuUpdateInput } from "../../../inputs/MenuUpdateInput";
import { MenuWhereUniqueInput } from "../../../inputs/MenuWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMenuArgs {
  @TypeGraphQL.Field(_type => MenuUpdateInput, {
    nullable: false
  })
  data!: MenuUpdateInput;

  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: false
  })
  where!: MenuWhereUniqueInput;
}
