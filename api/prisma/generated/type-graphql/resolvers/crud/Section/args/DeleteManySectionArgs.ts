import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SectionWhereInput } from "../../../inputs/SectionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySectionArgs {
  @TypeGraphQL.Field(_type => SectionWhereInput, {
    nullable: true
  })
  where?: SectionWhereInput | undefined;
}
