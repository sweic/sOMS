import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { OrderItem } from "../models/OrderItem";
import { Session } from "../models/Session";
import { Table } from "../models/Table";
import { OrderCount } from "../resolvers/outputs/OrderCount";

@TypeGraphQL.ObjectType("Order", {
  isAbstract: true
})
export class Order {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tableNumber!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  completedAt?: Date | null;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  price!: Prisma.Decimal;

  table?: Table;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tableid!: number;

  orderitems?: OrderItem[];

  session?: Session;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  sessionid!: number;

  @TypeGraphQL.Field(_type => OrderCount, {
    nullable: true
  })
  _count?: OrderCount | null;
}
