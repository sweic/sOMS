import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FoodItemListRelationFilter } from "../inputs/FoodItemListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { SectionListRelationFilter } from "../inputs/SectionListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MenuWhereInput", {
  isAbstract: true
})
export class MenuWhereInput {
  @TypeGraphQL.Field(_type => [MenuWhereInput], {
    nullable: true
  })
  AND?: MenuWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MenuWhereInput], {
    nullable: true
  })
  OR?: MenuWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MenuWhereInput], {
    nullable: true
  })
  NOT?: MenuWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedat?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SessionListRelationFilter, {
    nullable: true
  })
  sessions?: SessionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SectionListRelationFilter, {
    nullable: true
  })
  sections?: SectionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FoodItemListRelationFilter, {
    nullable: true
  })
  fooditems?: FoodItemListRelationFilter | undefined;
}
