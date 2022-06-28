import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MenuOrderByWithRelationInput } from "../../../inputs/MenuOrderByWithRelationInput";
import { MenuWhereInput } from "../../../inputs/MenuWhereInput";
import { MenuWhereUniqueInput } from "../../../inputs/MenuWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMenuArgs {
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
}
