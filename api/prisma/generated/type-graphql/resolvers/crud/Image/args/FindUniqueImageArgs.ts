import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImageWhereUniqueInput } from "../../../inputs/ImageWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueImageArgs {
  @TypeGraphQL.Field(_type => ImageWhereUniqueInput, {
    nullable: false
  })
  where!: ImageWhereUniqueInput;
}
