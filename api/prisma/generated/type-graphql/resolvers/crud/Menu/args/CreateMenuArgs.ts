import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MenuCreateInput } from "../../../inputs/MenuCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMenuArgs {
  @TypeGraphQL.Field(_type => MenuCreateInput, {
    nullable: false
  })
  data!: MenuCreateInput;
}
