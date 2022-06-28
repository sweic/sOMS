import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateOrConnectWithoutSectionsInput } from "../inputs/FoodItemCreateOrConnectWithoutSectionsInput";
import { FoodItemCreateWithoutSectionsInput } from "../inputs/FoodItemCreateWithoutSectionsInput";
import { FoodItemScalarWhereInput } from "../inputs/FoodItemScalarWhereInput";
import { FoodItemUpdateManyWithWhereWithoutSectionsInput } from "../inputs/FoodItemUpdateManyWithWhereWithoutSectionsInput";
import { FoodItemUpdateWithWhereUniqueWithoutSectionsInput } from "../inputs/FoodItemUpdateWithWhereUniqueWithoutSectionsInput";
import { FoodItemUpsertWithWhereUniqueWithoutSectionsInput } from "../inputs/FoodItemUpsertWithWhereUniqueWithoutSectionsInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemUpdateManyWithoutSectionsInput", {
  isAbstract: true
})
export class FoodItemUpdateManyWithoutSectionsInput {
  @TypeGraphQL.Field(_type => [FoodItemCreateWithoutSectionsInput], {
    nullable: true
  })
  create?: FoodItemCreateWithoutSectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemCreateOrConnectWithoutSectionsInput], {
    nullable: true
  })
  connectOrCreate?: FoodItemCreateOrConnectWithoutSectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemUpsertWithWhereUniqueWithoutSectionsInput], {
    nullable: true
  })
  upsert?: FoodItemUpsertWithWhereUniqueWithoutSectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereUniqueInput], {
    nullable: true
  })
  set?: FoodItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FoodItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereUniqueInput], {
    nullable: true
  })
  delete?: FoodItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodItemWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemUpdateWithWhereUniqueWithoutSectionsInput], {
    nullable: true
  })
  update?: FoodItemUpdateWithWhereUniqueWithoutSectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemUpdateManyWithWhereWithoutSectionsInput], {
    nullable: true
  })
  updateMany?: FoodItemUpdateManyWithWhereWithoutSectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FoodItemScalarWhereInput[] | undefined;
}
