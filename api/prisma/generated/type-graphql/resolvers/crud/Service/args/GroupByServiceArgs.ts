import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ServiceOrderByWithAggregationInput } from "../../../inputs/ServiceOrderByWithAggregationInput";
import { ServiceScalarWhereWithAggregatesInput } from "../../../inputs/ServiceScalarWhereWithAggregatesInput";
import { ServiceWhereInput } from "../../../inputs/ServiceWhereInput";
import { ServiceScalarFieldEnum } from "../../../../enums/ServiceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByServiceArgs {
  @TypeGraphQL.Field(_type => ServiceWhereInput, {
    nullable: true
  })
  where?: ServiceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ServiceOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ServiceOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ServiceScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "currentid" | "dummy">;

  @TypeGraphQL.Field(_type => ServiceScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ServiceScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
