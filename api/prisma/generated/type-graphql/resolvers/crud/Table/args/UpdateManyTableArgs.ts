import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TableUpdateManyMutationInput } from "../../../inputs/TableUpdateManyMutationInput";
import { TableWhereInput } from "../../../inputs/TableWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTableArgs {
  @TypeGraphQL.Field(_type => TableUpdateManyMutationInput, {
    nullable: false
  })
  data!: TableUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TableWhereInput, {
    nullable: true
  })
  where?: TableWhereInput | undefined;
}
