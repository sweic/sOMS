import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TableCreateManyInput } from "../../../inputs/TableCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTableArgs {
  @TypeGraphQL.Field(_type => [TableCreateManyInput], {
    nullable: false
  })
  data!: TableCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
