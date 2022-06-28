import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TableOrderByWithRelationInput } from "../../../inputs/TableOrderByWithRelationInput";
import { TableWhereInput } from "../../../inputs/TableWhereInput";
import { TableWhereUniqueInput } from "../../../inputs/TableWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTableArgs {
  @TypeGraphQL.Field(_type => TableWhereInput, {
    nullable: true
  })
  where?: TableWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TableOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TableOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TableWhereUniqueInput, {
    nullable: true
  })
  cursor?: TableWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
