import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MenuOrderByWithRelationInput } from "../../../inputs/MenuOrderByWithRelationInput";
import { MenuWhereInput } from "../../../inputs/MenuWhereInput";
import { MenuWhereUniqueInput } from "../../../inputs/MenuWhereUniqueInput";
import { MenuScalarFieldEnum } from "../../../../enums/MenuScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstMenuArgs {
  @TypeGraphQL.Field(_type => MenuWhereInput, {
    nullable: true
  })
  where?: MenuWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MenuOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MenuOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MenuWhereUniqueInput, {
    nullable: true
  })
  cursor?: MenuWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MenuScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "updatedat" | "title"> | undefined;
}
