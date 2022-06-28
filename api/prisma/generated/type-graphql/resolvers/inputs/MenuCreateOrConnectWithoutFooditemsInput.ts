import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateWithoutFooditemsInput } from "../inputs/MenuCreateWithoutFooditemsInput";
import { MenuWhereUniqueInput } from "../inputs/MenuWhereUniqueInput";

@TypeGraphQL.InputType("MenuCreateOrConnectWithoutFooditemsInput", {
  isAbstract: true
})
export class MenuCreateOrConnectWithoutFooditemsInput {
  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: false
  })
  where!: MenuWhereUniqueInput;

  @TypeGraphQL.Field(_type => MenuCreateWithoutFooditemsInput, {
    nullable: false
  })
  create!: MenuCreateWithoutFooditemsInput;
}
