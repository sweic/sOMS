import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateWithoutFooditemsInput } from "../inputs/SectionCreateWithoutFooditemsInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionCreateOrConnectWithoutFooditemsInput", {
  isAbstract: true
})
export class SectionCreateOrConnectWithoutFooditemsInput {
  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: false
  })
  where!: SectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SectionCreateWithoutFooditemsInput, {
    nullable: false
  })
  create!: SectionCreateWithoutFooditemsInput;
}
