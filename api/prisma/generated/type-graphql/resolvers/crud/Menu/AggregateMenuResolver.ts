import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMenuArgs } from "./args/AggregateMenuArgs";
import { Menu } from "../../../models/Menu";
import { AggregateMenu } from "../../outputs/AggregateMenu";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Menu)
export class AggregateMenuResolver {
  @TypeGraphQL.Query(_returns => AggregateMenu, {
    nullable: false
  })
  async aggregateMenu(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMenuArgs): Promise<AggregateMenu> {
    return getPrismaFromContext(ctx).menu.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
