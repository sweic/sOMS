import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImageUpdateInput } from "../../../inputs/ImageUpdateInput";
import { ImageWhereUniqueInput } from "../../../inputs/ImageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateImageArgs {
  @TypeGraphQL.Field(_type => ImageUpdateInput, {
    nullable: false
  })
  data!: ImageUpdateInput;

  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: false
  })
  where!: ImageWhereUniqueInput;
}
