import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ServiceWhereUniqueInput } from "../../../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueServiceArgs {
  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: false
  })
  where!: ServiceWhereUniqueInput;
}
