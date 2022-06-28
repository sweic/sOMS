import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateWithoutFooditemsInput } from "../inputs/SectionCreateWithoutFooditemsInput";
import { SectionUpdateWithoutFooditemsInput } from "../inputs/SectionUpdateWithoutFooditemsInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionUpsertWithWhereUniqueWithoutFooditemsInput", {
  isAbstract: true
})
export class SectionUpsertWithWhereUniqueWithoutFooditemsInput {
  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: false
  })
  where!: SectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SectionUpdateWithoutFooditemsInput, {
    nullable: false
  })
  update!: SectionUpdateWithoutFooditemsInput;

  @TypeGraphQL.Field(_type => SectionCreateWithoutFooditemsInput, {
    nullable: false
  })
  create!: SectionCreateWithoutFooditemsInput;
}
