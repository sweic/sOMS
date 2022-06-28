import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TableWhereInput } from "../../../inputs/TableWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTableArgs {
  @TypeGraphQL.Field(_type => TableWhereInput, {
    nullable: true
  })
  where?: TableWhereInput | undefined;
}
