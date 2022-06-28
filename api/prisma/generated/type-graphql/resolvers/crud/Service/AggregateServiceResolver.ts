import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateServiceArgs } from "./args/AggregateServiceArgs";
import { Service } from "../../../models/Service";
import { AggregateService } from "../../outputs/AggregateService";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Service)
export class AggregateServiceResolver {
  @TypeGraphQL.Query(_returns => AggregateService, {
    nullable: false
  })
  async aggregateService(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateServiceArgs): Promise<AggregateService> {
    return getPrismaFromContext(ctx).service.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
