import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateWithoutSectionsInput } from "../inputs/MenuCreateWithoutSectionsInput";
import { MenuUpdateWithoutSectionsInput } from "../inputs/MenuUpdateWithoutSectionsInput";

@TypeGraphQL.InputType("MenuUpsertWithoutSectionsInput", {
  isAbstract: true
})
export class MenuUpsertWithoutSectionsInput {
  @TypeGraphQL.Field(_type => MenuUpdateWithoutSectionsInput, {
    nullable: false
  })
  update!: MenuUpdateWithoutSectionsInput;

  @TypeGraphQL.Field(_type => MenuCreateWithoutSectionsInput, {
    nullable: false
  })
  create!: MenuCreateWithoutSectionsInput;
}
