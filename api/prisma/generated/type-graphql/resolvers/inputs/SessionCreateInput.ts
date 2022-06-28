import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MenuCreateNestedOneWithoutSessionsInput } from "../inputs/MenuCreateNestedOneWithoutSessionsInput";
import { OrderCreateNestedManyWithoutSessionInput } from "../inputs/OrderCreateNestedManyWithoutSessionInput";
import { ServiceCreateNestedOneWithoutCurrentInput } from "../inputs/ServiceCreateNestedOneWithoutCurrentInput";
import { TableCreateNestedManyWithoutSessionInput } from "../inputs/TableCreateNestedManyWithoutSessionInput";

@TypeGraphQL.InputType("SessionCreateInput", {
  isAbstract: true
})
export class SessionCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  lastOrder!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  table!: number;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: true
  })
  revenue?: Prisma.Decimal | undefined;

  @TypeGraphQL.Field(_type => MenuCreateNestedOneWithoutSessionsInput, {
    nullable: true
  })
  menu?: MenuCreateNestedOneWithoutSessionsInput | undefined;

  @TypeGraphQL.Field(_type => ServiceCreateNestedOneWithoutCurrentInput, {
    nullable: true
  })
  service?: ServiceCreateNestedOneWithoutCurrentInput | undefined;

  @TypeGraphQL.Field(_type => TableCreateNestedManyWithoutSessionInput, {
    nullable: true
  })
  tables?: TableCreateNestedManyWithoutSessionInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedManyWithoutSessionInput, {
    nullable: true
  })
  orders?: OrderCreateNestedManyWithoutSessionInput | undefined;
}
