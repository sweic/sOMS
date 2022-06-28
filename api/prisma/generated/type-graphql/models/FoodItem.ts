import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Image } from "../models/Image";
import { Menu } from "../models/Menu";
import { Section } from "../models/Section";
import { FoodItemCount } from "../resolvers/outputs/FoodItemCount";

@TypeGraphQL.ObjectType("FoodItem", {
  isAbstract: true
})
export class FoodItem {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  code!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  sections?: Section[];

  menu?: Menu;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  menuid!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  price!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  available!: boolean;

  @TypeGraphQL.Field(_type => [GraphQLScalars.JSONResolver], {
    nullable: false
  })
  options!: Prisma.JsonValue[];

  image?: Image | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  imageid?: number | null;

  @TypeGraphQL.Field(_type => FoodItemCount, {
    nullable: true
  })
  _count?: FoodItemCount | null;
}
