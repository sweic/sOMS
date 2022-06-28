import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImageCreateInput } from "../../../inputs/ImageCreateInput";

@TypeGraphQL.ArgsType()
export class CreateImageArgs {
  @TypeGraphQL.Field(_type => ImageCreateInput, {
    nullable: false
  })
  data!: ImageCreateInput;
}
