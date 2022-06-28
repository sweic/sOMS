import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TableCreateManySessionInput } from "../inputs/TableCreateManySessionInput";

@TypeGraphQL.InputType("TableCreateManySessionInputEnvelope", {
  isAbstract: true
})
export class TableCreateManySessionInputEnvelope {
  @TypeGraphQL.Field(_type => [TableCreateManySessionInput], {
    nullable: false
  })
  data!: TableCreateManySessionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
