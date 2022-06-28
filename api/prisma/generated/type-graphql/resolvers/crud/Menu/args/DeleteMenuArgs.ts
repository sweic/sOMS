import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MenuWhereUniqueInput } from "../../../inputs/MenuWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteMenuArgs {
  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: false
  })
  where!: MenuWhereUniqueInput;
}
