import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order } from "../models/Order";
import { Session } from "../models/Session";
import { TableCount } from "../resolvers/outputs/TableCount";

@TypeGraphQL.ObjectType("Table", {
  isAbstract: true
})
export class Table {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  token!: string;

  session?: Session | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sessionid?: number | null;

  orders?: Order[];

  @TypeGraphQL.Field(_type => TableCount, {
    nullable: true
  })
  _count?: TableCount | null;
}
