import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionUpdateWithoutFooditemsInput } from "../inputs/SectionUpdateWithoutFooditemsInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionUpdateWithWhereUniqueWithoutFooditemsInput", {
  isAbstract: true
})
export class SectionUpdateWithWhereUniqueWithoutFooditemsInput {
  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: false
  })
  where!: SectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SectionUpdateWithoutFooditemsInput, {
    nullable: false
  })
  data!: SectionUpdateWithoutFooditemsInput;
}
