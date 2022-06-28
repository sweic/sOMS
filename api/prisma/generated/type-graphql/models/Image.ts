import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FoodItem } from "../models/FoodItem";
import { Section } from "../models/Section";

@TypeGraphQL.ObjectType("Image", {
  isAbstract: true
})
export class Image {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imageURL!: string;

  foodImage?: FoodItem | null;

  sectionImage?: Section | null;
}
