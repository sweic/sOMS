import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImageCreateInput } from "../../../inputs/ImageCreateInput";
import { ImageUpdateInput } from "../../../inputs/ImageUpdateInput";
import { ImageWhereUniqueInput } from "../../../inputs/ImageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertImageArgs {
  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: false
  })
  where!: ImageWhereUniqueInput;

  @TypeGraphQL.Field(_type => ImageCreateInput, {
    nullable: false
  })
  create!: ImageCreateInput;

  @TypeGraphQL.Field(_type => ImageUpdateInput, {
    nullable: false
  })
  update!: ImageUpdateInput;
}
