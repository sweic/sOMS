import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateWithoutImageInput } from "../inputs/SectionCreateWithoutImageInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionCreateOrConnectWithoutImageInput", {
  isAbstract: true
})
export class SectionCreateOrConnectWithoutImageInput {
  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: false
  })
  where!: SectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SectionCreateWithoutImageInput, {
    nullable: false
  })
  create!: SectionCreateWithoutImageInput;
}
