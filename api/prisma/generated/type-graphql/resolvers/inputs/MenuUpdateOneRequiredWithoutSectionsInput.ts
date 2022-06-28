import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateOrConnectWithoutSectionsInput } from "../inputs/MenuCreateOrConnectWithoutSectionsInput";
import { MenuCreateWithoutSectionsInput } from "../inputs/MenuCreateWithoutSectionsInput";
import { MenuUpdateWithoutSectionsInput } from "../inputs/MenuUpdateWithoutSectionsInput";
import { MenuUpsertWithoutSectionsInput } from "../inputs/MenuUpsertWithoutSectionsInput";
import { MenuWhereUniqueInput } from "../inputs/MenuWhereUniqueInput";

@TypeGraphQL.InputType("MenuUpdateOneRequiredWithoutSectionsInput", {
  isAbstract: true
})
export class MenuUpdateOneRequiredWithoutSectionsInput {
  @TypeGraphQL.Field(_type => MenuCreateWithoutSectionsInput, {
    nullable: true
  })
  create?: MenuCreateWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => MenuCreateOrConnectWithoutSectionsInput, {
    nullable: true
  })
  connectOrCreate?: MenuCreateOrConnectWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => MenuUpsertWithoutSectionsInput, {
    nullable: true
  })
  upsert?: MenuUpsertWithoutSectionsInput | undefined;

  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: true
  })
  connect?: MenuWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MenuUpdateWithoutSectionsInput, {
    nullable: true
  })
  update?: MenuUpdateWithoutSectionsInput | undefined;
}
