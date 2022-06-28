import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SectionCreateInput } from "../../../inputs/SectionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateSectionArgs {
  @TypeGraphQL.Field(_type => SectionCreateInput, {
    nullable: false
  })
  data!: SectionCreateInput;
}
