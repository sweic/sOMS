import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SectionCreateInput } from "../../../inputs/SectionCreateInput";
import { SectionUpdateInput } from "../../../inputs/SectionUpdateInput";
import { SectionWhereUniqueInput } from "../../../inputs/SectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSectionArgs {
  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: false
  })
  where!: SectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SectionCreateInput, {
    nullable: false
  })
  create!: SectionCreateInput;

  @TypeGraphQL.Field(_type => SectionUpdateInput, {
    nullable: false
  })
  update!: SectionUpdateInput;
}
