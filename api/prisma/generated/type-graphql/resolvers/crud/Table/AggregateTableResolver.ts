import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTableArgs } from "./args/AggregateTableArgs";
import { Table } from "../../../models/Table";
import { AggregateTable } from "../../outputs/AggregateTable";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Table)
export class AggregateTableResolver {
  @TypeGraphQL.Query(_returns => AggregateTable, {
    nullable: false
  })
  async aggregateTable(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTableArgs): Promise<AggregateTable> {
    return getPrismaFromContext(ctx).table.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
