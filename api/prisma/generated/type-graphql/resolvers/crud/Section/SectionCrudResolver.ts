import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSectionArgs } from "./args/AggregateSectionArgs";
import { CreateManySectionArgs } from "./args/CreateManySectionArgs";
import { CreateSectionArgs } from "./args/CreateSectionArgs";
import { DeleteManySectionArgs } from "./args/DeleteManySectionArgs";
import { DeleteSectionArgs } from "./args/DeleteSectionArgs";
import { FindFirstSectionArgs } from "./args/FindFirstSectionArgs";
import { FindManySectionArgs } from "./args/FindManySectionArgs";
import { FindUniqueSectionArgs } from "./args/FindUniqueSectionArgs";
import { GroupBySectionArgs } from "./args/GroupBySectionArgs";
import { UpdateManySectionArgs } from "./args/UpdateManySectionArgs";
import { UpdateSectionArgs } from "./args/UpdateSectionArgs";
import { UpsertSectionArgs } from "./args/UpsertSectionArgs";
import {
  transformFields,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";
import { Section } from "../../../models/Section";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSection } from "../../outputs/AggregateSection";
import { SectionGroupBy } from "../../outputs/SectionGroupBy";
import { AdminAuth } from "../../../../../../middleware/adminAuth";

@TypeGraphQL.Resolver((_of) => Section)
export class SectionCrudResolver {
  @TypeGraphQL.Query((_returns) => Section, {
    nullable: true,
  })
  async section(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueSectionArgs
  ): Promise<Section | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).section.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Section, {
    nullable: true,
  })
  async findFirstSection(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstSectionArgs
  ): Promise<Section | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).section.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Section], {
    nullable: false,
  })
  async sections(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManySectionArgs
  ): Promise<Section[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).section.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  @TypeGraphQL.UseMiddleware(AdminAuth)
  @TypeGraphQL.Mutation((_returns) => Section, {
    nullable: false,
  })
  async createSection(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateSectionArgs
  ): Promise<Section> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).section.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManySection(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManySectionArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).section.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  @TypeGraphQL.UseMiddleware(AdminAuth)
  @TypeGraphQL.Mutation((_returns) => Section, {
    nullable: true,
  })
  async deleteSection(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteSectionArgs
  ): Promise<Section | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).section.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
  @TypeGraphQL.UseMiddleware(AdminAuth)
  @TypeGraphQL.Mutation((_returns) => Section, {
    nullable: true,
  })
  async updateSection(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateSectionArgs
  ): Promise<Section | null> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).section.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManySection(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManySectionArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).section.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManySection(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManySectionArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).section.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Section, {
    nullable: false,
  })
  async upsertSection(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertSectionArgs
  ): Promise<Section> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).section.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateSection, {
    nullable: false,
  })
  async aggregateSection(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateSectionArgs
  ): Promise<AggregateSection> {
    return getPrismaFromContext(ctx).section.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Query((_returns) => [SectionGroupBy], {
    nullable: false,
  })
  async groupBySection(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupBySectionArgs
  ): Promise<SectionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).section.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null
        )
      ),
    });
  }
}
