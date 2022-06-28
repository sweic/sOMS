import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateWithoutMenuInput } from "../inputs/SectionCreateWithoutMenuInput";
import { SectionUpdateWithoutMenuInput } from "../inputs/SectionUpdateWithoutMenuInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionUpsertWithWhereUniqueWithoutMenuInput", {
  isAbstract: true
})
export class SectionUpsertWithWhereUniqueWithoutMenuInput {
  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: false
  })
  where!: SectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SectionUpdateWithoutMenuInput, {
    nullable: false
  })
  update!: SectionUpdateWithoutMenuInput;

  @TypeGraphQL.Field(_type => SectionCreateWithoutMenuInput, {
    nullable: false
  })
  create!: SectionCreateWithoutMenuInput;
}
