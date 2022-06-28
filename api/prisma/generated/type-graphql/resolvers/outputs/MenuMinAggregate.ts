import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("MenuMinAggregate", {
  isAbstract: true
})
export class MenuMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedat!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;
}
