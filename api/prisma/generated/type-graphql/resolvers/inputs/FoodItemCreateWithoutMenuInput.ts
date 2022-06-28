import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateoptionsInput } from "../inputs/FoodItemCreateoptionsInput";
import { ImageCreateNestedOneWithoutFoodImageInput } from "../inputs/ImageCreateNestedOneWithoutFoodImageInput";
import { SectionCreateNestedManyWithoutFooditemsInput } from "../inputs/SectionCreateNestedManyWithoutFooditemsInput";

@TypeGraphQL.InputType("FoodItemCreateWithoutMenuInput", {
  isAbstract: true
})
export class FoodItemCreateWithoutMenuInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  code?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => SectionCreateNestedManyWithoutFooditemsInput, {
    nullable: true
  })
  sections?: SectionCreateNestedManyWithoutFooditemsInput | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  price!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  available!: boolean;

  @TypeGraphQL.Field(_type => FoodItemCreateoptionsInput, {
    nullable: true
  })
  options?: FoodItemCreateoptionsInput | undefined;

  @TypeGraphQL.Field(_type => ImageCreateNestedOneWithoutFoodImageInput, {
    nullable: true
  })
  image?: ImageCreateNestedOneWithoutFoodImageInput | undefined;
}
