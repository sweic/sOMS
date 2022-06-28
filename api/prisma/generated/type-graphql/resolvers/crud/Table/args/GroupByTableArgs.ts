import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TableOrderByWithAggregationInput } from "../../../inputs/TableOrderByWithAggregationInput";
import { TableScalarWhereWithAggregatesInput } from "../../../inputs/TableScalarWhereWithAggregatesInput";
import { TableWhereInput } from "../../../inputs/TableWhereInput";
import { TableScalarFieldEnum } from "../../../../enums/TableScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTableArgs {
  @TypeGraphQL.Field(_type => TableWhereInput, {
    nullable: true
  })
  where?: TableWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TableOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TableOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "tableNumber" | "createdAt" | "completedAt" | "active" | "token" | "sessionid">;

  @TypeGraphQL.Field(_type => TableScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TableScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
