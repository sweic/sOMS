import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateNestedOneWithoutImageInput } from "../inputs/SectionCreateNestedOneWithoutImageInput";

@TypeGraphQL.InputType("ImageCreateWithoutFoodImageInput", {
  isAbstract: true
})
export class ImageCreateWithoutFoodImageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imageURL!: string;

  @TypeGraphQL.Field(_type => SectionCreateNestedOneWithoutImageInput, {
    nullable: true
  })
  sectionImage?: SectionCreateNestedOneWithoutImageInput | undefined;
}
