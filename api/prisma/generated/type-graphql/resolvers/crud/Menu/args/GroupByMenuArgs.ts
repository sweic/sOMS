import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MenuOrderByWithAggregationInput } from "../../../inputs/MenuOrderByWithAggregationInput";
import { MenuScalarWhereWithAggregatesInput } from "../../../inputs/MenuScalarWhereWithAggregatesInput";
import { MenuWhereInput } from "../../../inputs/MenuWhereInput";
import { MenuScalarFieldEnum } from "../../../../enums/MenuScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMenuArgs {
  @TypeGraphQL.Field(_type => MenuWhereInput, {
    nullable: true
  })
  where?: MenuWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MenuOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MenuOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MenuScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "updatedat" | "title">;

  @TypeGraphQL.Field(_type => MenuScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MenuScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
