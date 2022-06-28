import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableCreateManySessionInputEnvelope } from "../inputs/TableCreateManySessionInputEnvelope";
import { TableCreateOrConnectWithoutSessionInput } from "../inputs/TableCreateOrConnectWithoutSessionInput";
import { TableCreateWithoutSessionInput } from "../inputs/TableCreateWithoutSessionInput";
import { TableWhereUniqueInput } from "../inputs/TableWhereUniqueInput";

@TypeGraphQL.InputType("TableCreateNestedManyWithoutSessionInput", {
  isAbstract: true
})
export class TableCreateNestedManyWithoutSessionInput {
  @TypeGraphQL.Field(_type => [TableCreateWithoutSessionInput], {
    nullable: true
  })
  create?: TableCreateWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => [TableCreateOrConnectWithoutSessionInput], {
    nullable: true
  })
  connectOrCreate?: TableCreateOrConnectWithoutSessionInput[] | undefined;

  @TypeGraphQL.Field(_type => TableCreateManySessionInputEnvelope, {
    nullable: true
  })
  createMany?: TableCreateManySessionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TableWhereUniqueInput], {
    nullable: true
  })
  connect?: TableWhereUniqueInput[] | undefined;
}
