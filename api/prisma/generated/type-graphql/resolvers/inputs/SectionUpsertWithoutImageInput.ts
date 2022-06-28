import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateWithoutImageInput } from "../inputs/SectionCreateWithoutImageInput";
import { SectionUpdateWithoutImageInput } from "../inputs/SectionUpdateWithoutImageInput";

@TypeGraphQL.InputType("SectionUpsertWithoutImageInput", {
  isAbstract: true
})
export class SectionUpsertWithoutImageInput {
  @TypeGraphQL.Field(_type => SectionUpdateWithoutImageInput, {
    nullable: false
  })
  update!: SectionUpdateWithoutImageInput;

  @TypeGraphQL.Field(_type => SectionCreateWithoutImageInput, {
    nullable: false
  })
  create!: SectionCreateWithoutImageInput;
}
