import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SectionUpdateInput } from "../../../inputs/SectionUpdateInput";
import { SectionWhereUniqueInput } from "../../../inputs/SectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSectionArgs {
  @TypeGraphQL.Field(_type => SectionUpdateInput, {
    nullable: false
  })
  data!: SectionUpdateInput;

  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: false
  })
  where!: SectionWhereUniqueInput;
}
