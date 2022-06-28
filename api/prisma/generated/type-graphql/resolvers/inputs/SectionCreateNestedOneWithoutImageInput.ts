import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateOrConnectWithoutImageInput } from "../inputs/SectionCreateOrConnectWithoutImageInput";
import { SectionCreateWithoutImageInput } from "../inputs/SectionCreateWithoutImageInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionCreateNestedOneWithoutImageInput", {
  isAbstract: true
})
export class SectionCreateNestedOneWithoutImageInput {
  @TypeGraphQL.Field(_type => SectionCreateWithoutImageInput, {
    nullable: true
  })
  create?: SectionCreateWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => SectionCreateOrConnectWithoutImageInput, {
    nullable: true
  })
  connectOrCreate?: SectionCreateOrConnectWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: true
  })
  connect?: SectionWhereUniqueInput | undefined;
}
