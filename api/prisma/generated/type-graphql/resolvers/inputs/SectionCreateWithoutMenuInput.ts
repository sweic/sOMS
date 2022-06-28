import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateNestedManyWithoutSectionsInput } from "../inputs/FoodItemCreateNestedManyWithoutSectionsInput";
import { ImageCreateNestedOneWithoutSectionImageInput } from "../inputs/ImageCreateNestedOneWithoutSectionImageInput";

@TypeGraphQL.InputType("SectionCreateWithoutMenuInput", {
  isAbstract: true
})
export class SectionCreateWithoutMenuInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  code?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => FoodItemCreateNestedManyWithoutSectionsInput, {
    nullable: true
  })
  fooditems?: FoodItemCreateNestedManyWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => ImageCreateNestedOneWithoutSectionImageInput, {
    nullable: true
  })
  image?: ImageCreateNestedOneWithoutSectionImageInput | undefined;
}
