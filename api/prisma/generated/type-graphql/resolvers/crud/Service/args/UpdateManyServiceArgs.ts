import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ServiceUpdateManyMutationInput } from "../../../inputs/ServiceUpdateManyMutationInput";
import { ServiceWhereInput } from "../../../inputs/ServiceWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyServiceArgs {
  @TypeGraphQL.Field(_type => ServiceUpdateManyMutationInput, {
    nullable: false
  })
  data!: ServiceUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ServiceWhereInput, {
    nullable: true
  })
  where?: ServiceWhereInput | undefined;
}
