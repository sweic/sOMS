import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MenuCreateManyInput } from "../../../inputs/MenuCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMenuArgs {
  @TypeGraphQL.Field(_type => [MenuCreateManyInput], {
    nullable: false
  })
  data!: MenuCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
