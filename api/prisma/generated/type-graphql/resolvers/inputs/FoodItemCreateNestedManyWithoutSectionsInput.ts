import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FoodItemCreateOrConnectWithoutSectionsInput } from "../inputs/FoodItemCreateOrConnectWithoutSectionsInput";
import { FoodItemCreateWithoutSectionsInput } from "../inputs/FoodItemCreateWithoutSectionsInput";
import { FoodItemWhereUniqueInput } from "../inputs/FoodItemWhereUniqueInput";

@TypeGraphQL.InputType("FoodItemCreateNestedManyWithoutSectionsInput", {
  isAbstract: true
})
export class FoodItemCreateNestedManyWithoutSectionsInput {
  @TypeGraphQL.Field(_type => [FoodItemCreateWithoutSectionsInput], {
    nullable: true
  })
  create?: FoodItemCreateWithoutSectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemCreateOrConnectWithoutSectionsInput], {
    nullable: true
  })
  connectOrCreate?: FoodItemCreateOrConnectWithoutSectionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [FoodItemWhereUniqueInput], {
    nullable: true
  })
  connect?: FoodItemWhereUniqueInput[] | undefined;
}
