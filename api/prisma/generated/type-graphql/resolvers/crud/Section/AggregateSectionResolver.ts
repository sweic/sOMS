import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSectionArgs } from "./args/AggregateSectionArgs";
import { Section } from "../../../models/Section";
import { AggregateSection } from "../../outputs/AggregateSection";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Section)
export class AggregateSectionResolver {
  @TypeGraphQL.Query(_returns => AggregateSection, {
    nullable: false
  })
  async aggregateSection(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSectionArgs): Promise<AggregateSection> {
    return getPrismaFromContext(ctx).section.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
