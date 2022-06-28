import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImageWhereInput } from "../../../inputs/ImageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyImageArgs {
  @TypeGraphQL.Field(_type => ImageWhereInput, {
    nullable: true
  })
  where?: ImageWhereInput | undefined;
}
