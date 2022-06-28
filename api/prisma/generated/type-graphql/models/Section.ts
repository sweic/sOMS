import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FoodItem } from "../models/FoodItem";
import { Image } from "../models/Image";
import { Menu } from "../models/Menu";
import { SectionCount } from "../resolvers/outputs/SectionCount";

@TypeGraphQL.ObjectType("Section", {
  isAbstract: true
})
export class Section {
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

  fooditems?: FoodItem[];

  menu?: Menu;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  menuid!: number;

  image?: Image | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  imageid?: number | null;

  @TypeGraphQL.Field(_type => SectionCount, {
    nullable: true
  })
  _count?: SectionCount | null;
}
