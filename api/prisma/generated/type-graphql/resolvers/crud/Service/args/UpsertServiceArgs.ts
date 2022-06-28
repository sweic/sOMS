import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ServiceCreateInput } from "../../../inputs/ServiceCreateInput";
import { ServiceUpdateInput } from "../../../inputs/ServiceUpdateInput";
import { ServiceWhereUniqueInput } from "../../../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertServiceArgs {
  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ServiceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ServiceCreateInput, {
    nullable: false
  })
  create!: ServiceCreateInput;

  @TypeGraphQL.Field(_type => ServiceUpdateInput, {
    nullable: false
  })
  update!: ServiceUpdateInput;
}
