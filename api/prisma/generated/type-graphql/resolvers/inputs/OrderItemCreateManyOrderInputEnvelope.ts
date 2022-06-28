import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateManyOrderInput } from "../inputs/OrderItemCreateManyOrderInput";

@TypeGraphQL.InputType("OrderItemCreateManyOrderInputEnvelope", {
  isAbstract: true
})
export class OrderItemCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderItemCreateManyOrderInput], {
    nullable: false
  })
  data!: OrderItemCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
