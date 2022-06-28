import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SectionCreateManyInput } from "../../../inputs/SectionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySectionArgs {
  @TypeGraphQL.Field(_type => [SectionCreateManyInput], {
    nullable: false
  })
  data!: SectionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
