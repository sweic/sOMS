import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateWithoutFooditemsInput } from "../inputs/MenuCreateWithoutFooditemsInput";
import { MenuUpdateWithoutFooditemsInput } from "../inputs/MenuUpdateWithoutFooditemsInput";

@TypeGraphQL.InputType("MenuUpsertWithoutFooditemsInput", {
  isAbstract: true
})
export class MenuUpsertWithoutFooditemsInput {
  @TypeGraphQL.Field(_type => MenuUpdateWithoutFooditemsInput, {
    nullable: false
  })
  update!: MenuUpdateWithoutFooditemsInput;

  @TypeGraphQL.Field(_type => MenuCreateWithoutFooditemsInput, {
    nullable: false
  })
  create!: MenuCreateWithoutFooditemsInput;
}
