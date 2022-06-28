import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateOrConnectWithoutFooditemsInput } from "../inputs/SectionCreateOrConnectWithoutFooditemsInput";
import { SectionCreateWithoutFooditemsInput } from "../inputs/SectionCreateWithoutFooditemsInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionCreateNestedManyWithoutFooditemsInput", {
  isAbstract: true
})
export class SectionCreateNestedManyWithoutFooditemsInput {
  @TypeGraphQL.Field(_type => [SectionCreateWithoutFooditemsInput], {
    nullable: true
  })
  create?: SectionCreateWithoutFooditemsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionCreateOrConnectWithoutFooditemsInput], {
    nullable: true
  })
  connectOrCreate?: SectionCreateOrConnectWithoutFooditemsInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionWhereUniqueInput], {
    nullable: true
  })
  connect?: SectionWhereUniqueInput[] | undefined;
}
