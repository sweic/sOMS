import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionScalarWhereInput } from "../inputs/SectionScalarWhereInput";
import { SectionUpdateManyMutationInput } from "../inputs/SectionUpdateManyMutationInput";

@TypeGraphQL.InputType("SectionUpdateManyWithWhereWithoutMenuInput", {
  isAbstract: true
})
export class SectionUpdateManyWithWhereWithoutMenuInput {
  @TypeGraphQL.Field(_type => SectionScalarWhereInput, {
    nullable: false
  })
  where!: SectionScalarWhereInput;

  @TypeGraphQL.Field(_type => SectionUpdateManyMutationInput, {
    nullable: false
  })
  data!: SectionUpdateManyMutationInput;
}
