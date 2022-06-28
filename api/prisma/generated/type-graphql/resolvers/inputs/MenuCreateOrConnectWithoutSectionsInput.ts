import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateWithoutSectionsInput } from "../inputs/MenuCreateWithoutSectionsInput";
import { MenuWhereUniqueInput } from "../inputs/MenuWhereUniqueInput";

@TypeGraphQL.InputType("MenuCreateOrConnectWithoutSectionsInput", {
  isAbstract: true
})
export class MenuCreateOrConnectWithoutSectionsInput {
  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: false
  })
  where!: MenuWhereUniqueInput;

  @TypeGraphQL.Field(_type => MenuCreateWithoutSectionsInput, {
    nullable: false
  })
  create!: MenuCreateWithoutSectionsInput;
}
