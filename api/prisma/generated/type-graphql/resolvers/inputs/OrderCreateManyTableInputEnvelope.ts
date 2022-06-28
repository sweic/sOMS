import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyTableInput } from "../inputs/OrderCreateManyTableInput";

@TypeGraphQL.InputType("OrderCreateManyTableInputEnvelope", {
  isAbstract: true
})
export class OrderCreateManyTableInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyTableInput], {
    nullable: false
  })
  data!: OrderCreateManyTableInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
