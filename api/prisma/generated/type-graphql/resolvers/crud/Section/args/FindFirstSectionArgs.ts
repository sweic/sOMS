import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SectionOrderByWithRelationInput } from "../../../inputs/SectionOrderByWithRelationInput";
import { SectionWhereInput } from "../../../inputs/SectionWhereInput";
import { SectionWhereUniqueInput } from "../../../inputs/SectionWhereUniqueInput";
import { SectionScalarFieldEnum } from "../../../../enums/SectionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSectionArgs {
  @TypeGraphQL.Field(_type => SectionWhereInput, {
    nullable: true
  })
  where?: SectionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SectionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SectionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SectionWhereUniqueInput, {
    nullable: true
  })
  cursor?: SectionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SectionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "code" | "title" | "menuid" | "imageid"> | undefined;
}
