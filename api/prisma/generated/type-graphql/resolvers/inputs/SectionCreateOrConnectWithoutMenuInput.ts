import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateWithoutMenuInput } from "../inputs/SectionCreateWithoutMenuInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionCreateOrConnectWithoutMenuInput", {
  isAbstract: true
})
export class SectionCreateOrConnectWithoutMenuInput {
  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: false
  })
  where!: SectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SectionCreateWithoutMenuInput, {
    nullable: false
  })
  create!: SectionCreateWithoutMenuInput;
}
