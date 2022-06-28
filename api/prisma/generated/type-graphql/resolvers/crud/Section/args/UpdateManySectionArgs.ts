import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SectionUpdateManyMutationInput } from "../../../inputs/SectionUpdateManyMutationInput";
import { SectionWhereInput } from "../../../inputs/SectionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySectionArgs {
  @TypeGraphQL.Field(_type => SectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: SectionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SectionWhereInput, {
    nullable: true
  })
  where?: SectionWhereInput | undefined;
}
