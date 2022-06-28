import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManySessionInput } from "../inputs/OrderCreateManySessionInput";

@TypeGraphQL.InputType("OrderCreateManySessionInputEnvelope", {
  isAbstract: true
})
export class OrderCreateManySessionInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManySessionInput], {
    nullable: false
  })
  data!: OrderCreateManySessionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
