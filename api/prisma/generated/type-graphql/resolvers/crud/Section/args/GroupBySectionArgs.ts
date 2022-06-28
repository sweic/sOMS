import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SectionOrderByWithAggregationInput } from "../../../inputs/SectionOrderByWithAggregationInput";
import { SectionScalarWhereWithAggregatesInput } from "../../../inputs/SectionScalarWhereWithAggregatesInput";
import { SectionWhereInput } from "../../../inputs/SectionWhereInput";
import { SectionScalarFieldEnum } from "../../../../enums/SectionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySectionArgs {
  @TypeGraphQL.Field(_type => SectionWhereInput, {
    nullable: true
  })
  where?: SectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SectionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SectionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "code" | "title" | "menuid" | "imageid">;

  @TypeGraphQL.Field(_type => SectionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SectionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
