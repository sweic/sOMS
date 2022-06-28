import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SectionCreateOrConnectWithoutImageInput } from "../inputs/SectionCreateOrConnectWithoutImageInput";
import { SectionCreateWithoutImageInput } from "../inputs/SectionCreateWithoutImageInput";
import { SectionUpdateWithoutImageInput } from "../inputs/SectionUpdateWithoutImageInput";
import { SectionUpsertWithoutImageInput } from "../inputs/SectionUpsertWithoutImageInput";
import { SectionWhereUniqueInput } from "../inputs/SectionWhereUniqueInput";

@TypeGraphQL.InputType("SectionUpdateOneWithoutImageInput", {
  isAbstract: true
})
export class SectionUpdateOneWithoutImageInput {
  @TypeGraphQL.Field(_type => SectionCreateWithoutImageInput, {
    nullable: true
  })
  create?: SectionCreateWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => SectionCreateOrConnectWithoutImageInput, {
    nullable: true
  })
  connectOrCreate?: SectionCreateOrConnectWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => SectionUpsertWithoutImageInput, {
    nullable: true
  })
  upsert?: SectionUpsertWithoutImageInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: true
  })
  connect?: SectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SectionUpdateWithoutImageInput, {
    nullable: true
  })
  update?: SectionUpdateWithoutImageInput | undefined;
}
