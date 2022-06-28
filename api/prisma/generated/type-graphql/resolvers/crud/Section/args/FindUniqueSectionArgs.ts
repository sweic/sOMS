import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SectionWhereUniqueInput } from "../../../inputs/SectionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSectionArgs {
  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: false
  })
  where!: SectionWhereUniqueInput;
}
