import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MenuWhereInput } from "../../../inputs/MenuWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMenuArgs {
  @TypeGraphQL.Field(_type => MenuWhereInput, {
    nullable: true
  })
  where?: MenuWhereInput | undefined;
}
