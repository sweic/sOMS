import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MenuUpdateManyMutationInput } from "../../../inputs/MenuUpdateManyMutationInput";
import { MenuWhereInput } from "../../../inputs/MenuWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMenuArgs {
  @TypeGraphQL.Field(_type => MenuUpdateManyMutationInput, {
    nullable: false
  })
  data!: MenuUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MenuWhereInput, {
    nullable: true
  })
  where?: MenuWhereInput | undefined;
}
