import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FoodItem } from "../models/FoodItem";
import { Section } from "../models/Section";
import { Session } from "../models/Session";
import { MenuCount } from "../resolvers/outputs/MenuCount";

@TypeGraphQL.ObjectType("Menu", {
  isAbstract: true
})
export class Menu {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedat!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  sessions?: Session[];

  sections?: Section[];

  fooditems?: FoodItem[];

  @TypeGraphQL.Field(_type => MenuCount, {
    nullable: true
  })
  _count?: MenuCount | null;
}
