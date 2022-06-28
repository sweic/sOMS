import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ServiceCreateManyInput } from "../../../inputs/ServiceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyServiceArgs {
  @TypeGraphQL.Field(_type => [ServiceCreateManyInput], {
    nullable: false
  })
  data!: ServiceCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
