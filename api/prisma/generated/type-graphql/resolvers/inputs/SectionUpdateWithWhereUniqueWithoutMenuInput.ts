import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionUpdateWithoutMenuInput } from "../inputs/SectionUpdateWithoutMenuInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionUpdateWithWhereUniqueWithoutMenuInput", {
  isAbstract: true
})
export class SectionUpdateWithWhereUniqueWithoutMenuInput {
  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: false
  })
  where!: SectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SectionUpdateWithoutMenuInput, {
    nullable: false
  })
  data!: SectionUpdateWithoutMenuInput;
}
