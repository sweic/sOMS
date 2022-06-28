import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateOrConnectWithoutImageInput } from "../inputs/FoodItemCreateOrConnectWithoutImageInput";
import { FoodItemCreateWithoutImageInput } from "../inputs/FoodItemCreateWithoutImageInput";
import { FoodItemUpdateWithoutImageInput } from "../inputs/FoodItemUpdateWithoutImageInput";
import { FoodItemUpsertWithoutImageInput } from "../inputs/FoodItemUpsertWithoutImageInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemUpdateOneWithoutImageInput", {
  isAbstract: true
})
export class FoodItemUpdateOneWithoutImageInput {
  @TypeGraphQL.Field(_type => FoodItemCreateWithoutImageInput, {
    nullable: true
  })
  create?: FoodItemCreateWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemCreateOrConnectWithoutImageInput, {
    nullable: true
  })
  connectOrCreate?: FoodItemCreateOrConnectWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemUpsertWithoutImageInput, {
    nullable: true
  })
  upsert?: FoodItemUpsertWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => FoodItemWhereUniqueInput, {
    nullable: true
  })
  connect?: FoodItemWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FoodItemUpdateWithoutImageInput, {
    nullable: true
  })
  update?: FoodItemUpdateWithoutImageInput | undefined;
}
