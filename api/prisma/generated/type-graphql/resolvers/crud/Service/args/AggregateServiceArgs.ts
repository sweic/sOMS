import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ServiceOrderByWithRelationInput } from "../../../inputs/ServiceOrderByWithRelationInput";
import { ServiceWhereInput } from "../../../inputs/ServiceWhereInput";
import { ServiceWhereUniqueInput } from "../../../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateServiceArgs {
  @TypeGraphQL.Field(_type => ServiceWhereInput, {
    nullable: true
  })
  where?: ServiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ServiceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ServiceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: true
  })
  cursor?: ServiceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
