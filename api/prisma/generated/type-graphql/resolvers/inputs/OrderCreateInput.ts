import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderItemCreateNestedManyWithoutOrderInput } from "../inputs/OrderItemCreateNestedManyWithoutOrderInput";
import { SessionCreateNestedOneWithoutOrdersInput } from "../inputs/SessionCreateNestedOneWithoutOrdersInput";
import { TableCreateNestedOneWithoutOrdersInput } from "../inputs/TableCreateNestedOneWithoutOrdersInput";

@TypeGraphQL.InputType("OrderCreateInput", {
  isAbstract: true
})
export class OrderCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tableNumber!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  price!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => TableCreateNestedOneWithoutOrdersInput, {
    nullable: false
  })
  table!: TableCreateNestedOneWithoutOrdersInput;

  @TypeGraphQL.Field(_type => OrderItemCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  orderitems?: OrderItemCreateNestedManyWithoutOrderInput | undefined;

  @TypeGraphQL.Field(_type => SessionCreateNestedOneWithoutOrdersInput, {
    nullable: false
  })
  session!: SessionCreateNestedOneWithoutOrdersInput;
}
