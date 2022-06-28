import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateFoodItemArgs } from "./args/AggregateFoodItemArgs";
import { CreateFoodItemArgs } from "./args/CreateFoodItemArgs";
import { CreateManyFoodItemArgs } from "./args/CreateManyFoodItemArgs";
import { DeleteFoodItemArgs } from "./args/DeleteFoodItemArgs";
import { DeleteManyFoodItemArgs } from "./args/DeleteManyFoodItemArgs";
import { FindFirstFoodItemArgs } from "./args/FindFirstFoodItemArgs";
import { FindManyFoodItemArgs } from "./args/FindManyFoodItemArgs";
import { FindUniqueFoodItemArgs } from "./args/FindUniqueFoodItemArgs";
import { GroupByFoodItemArgs } from "./args/GroupByFoodItemArgs";
import { UpdateFoodItemArgs } from "./args/UpdateFoodItemArgs";
import { UpdateManyFoodItemArgs } from "./args/UpdateManyFoodItemArgs";
import { UpsertFoodItemArgs } from "./args/UpsertFoodItemArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { FoodItem } from "../../../models/FoodItem";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateFoodItem } from "../../outputs/AggregateFoodItem";
import { FoodItemGroupBy } from "../../outputs/FoodItemGroupBy";
import { AdminAuth } from "../../../../../../middleware/adminAuth";

@TypeGraphQL.Resolver((_of) => FoodItem)
export class FoodItemCrudResolver {
  @TypeGraphQL.Query((_returns) => FoodItem, {
    nullable: true,
  })
  async foodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueFoodItemArgs
  ): Promise<FoodItem | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).foodItem.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => FoodItem, {
    nullable: true,
  })
  async findFirstFoodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstFoodItemArgs
  ): Promise<FoodItem | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).foodItem.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [FoodItem], {
    nullable: false,
  })
  async foodItems(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyFoodItemArgs
  ): Promise<FoodItem[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).foodItem.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  @TypeGraphQL.UseMiddleware(AdminAuth)
  @TypeGraphQL.Mutation((_returns) => FoodItem, {
    nullable: false,
  })
  async createFoodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateFoodItemArgs
  ): Promise<FoodItem> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).foodItem.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyFoodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyFoodItemArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).foodItem.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  @TypeGraphQL.UseMiddleware(AdminAuth)
  @TypeGraphQL.Mutation((_returns) => FoodItem, {
    nullable: true,
  })
  async deleteFoodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteFoodItemArgs
  ): Promise<FoodItem | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).foodItem.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  @TypeGraphQL.UseMiddleware(AdminAuth)
  @TypeGraphQL.Mutation((_returns) => FoodItem, {
    nullable: true,
  })
  async updateFoodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateFoodItemArgs
  ): Promise<FoodItem | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).foodItem.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyFoodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyFoodItemArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).foodItem.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyFoodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyFoodItemArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).foodItem.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => FoodItem, {
    nullable: false,
  })
  async upsertFoodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertFoodItemArgs
  ): Promise<FoodItem> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).foodItem.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateFoodItem, {
    nullable: false,
  })
  async aggregateFoodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateFoodItemArgs
  ): Promise<AggregateFoodItem> {
    return getPrismaFromContext(ctx).foodItem.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query((_returns) => [FoodItemGroupBy], {
    nullable: false,
  })
  async groupByFoodItem(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByFoodItemArgs
  ): Promise<FoodItemGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).foodItem.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null
        )
      ),
    });
  }
}
