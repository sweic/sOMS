import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ServiceCreateOrConnectWithoutCurrentInput } from "../inputs/ServiceCreateOrConnectWithoutCurrentInput";
import { ServiceCreateWithoutCurrentInput } from "../inputs/ServiceCreateWithoutCurrentInput";
import { ServiceUpdateWithoutCurrentInput } from "../inputs/ServiceUpdateWithoutCurrentInput";
import { ServiceUpsertWithoutCurrentInput } from "../inputs/ServiceUpsertWithoutCurrentInput";
import { ServiceWhereUniqueInput } from "../inputs/ServiceWhereUniqueInput";

@TypeGraphQL.InputType("ServiceUpdateOneWithoutCurrentInput", {
  isAbstract: true
})
export class ServiceUpdateOneWithoutCurrentInput {
  @TypeGraphQL.Field(_type => ServiceCreateWithoutCurrentInput, {
    nullable: true
  })
  create?: ServiceCreateWithoutCurrentInput | undefined;

  @TypeGraphQL.Field(_type => ServiceCreateOrConnectWithoutCurrentInput, {
    nullable: true
  })
  connectOrCreate?: ServiceCreateOrConnectWithoutCurrentInput | undefined;

  @TypeGraphQL.Field(_type => ServiceUpsertWithoutCurrentInput, {
    nullable: true
  })
  upsert?: ServiceUpsertWithoutCurrentInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ServiceWhereUniqueInput, {
    nullable: true
  })
  connect?: ServiceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ServiceUpdateWithoutCurrentInput, {
    nullable: true
  })
  update?: ServiceUpdateWithoutCurrentInput | undefined;
}
