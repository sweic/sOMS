import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateManyMenuInput } from "../inputs/SectionCreateManyMenuInput";

@TypeGraphQL.InputType("SectionCreateManyMenuInputEnvelope", {
  isAbstract: true
})
export class SectionCreateManyMenuInputEnvelope {
  @TypeGraphQL.Field(_type => [SectionCreateManyMenuInput], {
    nullable: false
  })
  data!: SectionCreateManyMenuInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
