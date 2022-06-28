import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateManyMenuInputEnvelope } from "../inputs/SectionCreateManyMenuInputEnvelope";
import { SectionCreateOrConnectWithoutMenuInput } from "../inputs/SectionCreateOrConnectWithoutMenuInput";
import { SectionCreateWithoutMenuInput } from "../inputs/SectionCreateWithoutMenuInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionCreateNestedManyWithoutMenuInput", {
  isAbstract: true
})
export class SectionCreateNestedManyWithoutMenuInput {
  @TypeGraphQL.Field(_type => [SectionCreateWithoutMenuInput], {
    nullable: true
  })
  create?: SectionCreateWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => [SectionCreateOrConnectWithoutMenuInput], {
    nullable: true
  })
  connectOrCreate?: SectionCreateOrConnectWithoutMenuInput[] | undefined;

  @TypeGraphQL.Field(_type => SectionCreateManyMenuInputEnvelope, {
    nullable: true
  })
  createMany?: SectionCreateManyMenuInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SectionWhereUniqueInput], {
    nullable: true
  })
  connect?: SectionWhereUniqueInput[] | undefined;
}
