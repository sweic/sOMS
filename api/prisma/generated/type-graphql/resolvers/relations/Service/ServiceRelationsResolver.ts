import * as TypeGraphQL from "type-graphql";
import { Service } from "../../../models/Service";
import { Session } from "../../../models/Session";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Service)
export class ServiceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Session, {
    nullable: true
  })
  async current(@TypeGraphQL.Root() service: Service, @TypeGraphQL.Ctx() ctx: any): Promise<Session | null> {
    return getPrismaFromContext(ctx).service.findUnique({
      where: {
        id: service.id,
      },
    }).current({});
  }
}
