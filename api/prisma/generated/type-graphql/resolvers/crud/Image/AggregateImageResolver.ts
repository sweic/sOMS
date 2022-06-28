import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateImageArgs } from "./args/AggregateImageArgs";
import { Image } from "../../../models/Image";
import { AggregateImage } from "../../outputs/AggregateImage";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Image)
export class AggregateImageResolver {
  @TypeGraphQL.Query(_returns => AggregateImage, {
    nullable: false
  })
  async aggregateImage(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateImageArgs): Promise<AggregateImage> {
    return getPrismaFromContext(ctx).image.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
