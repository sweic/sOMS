import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Menu } from "../models/Menu";
import { Order } from "../models/Order";
import { Service } from "../models/Service";
import { Table } from "../models/Table";
import { SessionCount } from "../resolvers/outputs/SessionCount";

@TypeGraphQL.ObjectType("Session", {
  isAbstract: true
})
export class Session {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  lastOrder!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  table!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  revenue!: Prisma.Decimal;

  menu?: Menu | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  menuid?: number | null;

  service?: Service | null;

  tables?: Table[];

  orders?: Order[];

  @TypeGraphQL.Field(_type => SessionCount, {
    nullable: true
  })
  _count?: SessionCount | null;
}
