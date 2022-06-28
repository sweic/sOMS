import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ServiceWhereInput } from "../../../inputs/ServiceWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyServiceArgs {
  @TypeGraphQL.Field(_type => ServiceWhereInput, {
    nullable: true
  })
  where?: ServiceWhereInput | undefined;
}
