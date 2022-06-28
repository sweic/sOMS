import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateOrConnectWithoutFooditemsInput } from "../inputs/MenuCreateOrConnectWithoutFooditemsInput";
import { MenuCreateWithoutFooditemsInput } from "../inputs/MenuCreateWithoutFooditemsInput";
import { MenuUpdateWithoutFooditemsInput } from "../inputs/MenuUpdateWithoutFooditemsInput";
import { MenuUpsertWithoutFooditemsInput } from "../inputs/MenuUpsertWithoutFooditemsInput";
import { MenuWhereUniqueInput } from "../inputs/MenuWhereUniqueInput";

@TypeGraphQL.InputType("MenuUpdateOneRequiredWithoutFooditemsInput", {
  isAbstract: true
})
export class MenuUpdateOneRequiredWithoutFooditemsInput {
  @TypeGraphQL.Field(_type => MenuCreateWithoutFooditemsInput, {
    nullable: true
  })
  create?: MenuCreateWithoutFooditemsInput | undefined;

  @TypeGraphQL.Field(_type => MenuCreateOrConnectWithoutFooditemsInput, {
    nullable: true
  })
  connectOrCreate?: MenuCreateOrConnectWithoutFooditemsInput | undefined;

  @TypeGraphQL.Field(_type => MenuUpsertWithoutFooditemsInput, {
    nullable: true
  })
  upsert?: MenuUpsertWithoutFooditemsInput | undefined;

  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: true
  })
  connect?: MenuWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MenuUpdateWithoutFooditemsInput, {
    nullable: true
  })
  update?: MenuUpdateWithoutFooditemsInput | undefined;
}
