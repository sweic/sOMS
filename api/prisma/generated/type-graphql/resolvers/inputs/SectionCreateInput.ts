import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateNestedManyWithoutSectionsInput } from "../inputs/FoodItemCreateNestedManyWithoutSectionsInput";
import { ImageCreateNestedOneWithoutSectionImageInput } from "../inputs/ImageCreateNestedOneWithoutSectionImageInput";
import { MenuCreateNestedOneWithoutSectionsInput } from "../inputs/MenuCreateNestedOneWithoutSectionsInput";

@TypeGraphQL.InputType("SectionCreateInput", {
  isAbstract: true
})
export class SectionCreateInput {
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

  @TypeGraphQL.Field(_type => MenuCreateNestedOneWithoutSectionsInput, {
    nullable: false
  })
  menu!: MenuCreateNestedOneWithoutSectionsInput;

  @TypeGraphQL.Field(_type => ImageCreateNestedOneWithoutSectionImageInput, {
    nullable: true
  })
  image?: ImageCreateNestedOneWithoutSectionImageInput | undefined;
}
