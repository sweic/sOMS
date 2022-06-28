import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateOrConnectWithoutSectionsInput } from "../inputs/MenuCreateOrConnectWithoutSectionsInput";
import { MenuCreateWithoutSectionsInput } from "../inputs/MenuCreateWithoutSectionsInput";
import { MenuWhereUniqueInput } from "../inputs/MenuWhereUniqueInput";

@TypeGraphQL.InputType("MenuCreateNestedOneWithoutSectionsInput", {
  isAbstract: true
})
export class MenuCreateNestedOneWithoutSectionsInput {
  @TypeGraphQL.Field(_type => MenuCreateWithoutSectionsInput, {
    nullable: true
  })
  create?: MenuCreateWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => MenuCreateOrConnectWithoutSectionsInput, {
    nullable: true
  })
  connectOrCreate?: MenuCreateOrConnectWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: true
  })
  connect?: MenuWhereUniqueInput | undefined;
}
