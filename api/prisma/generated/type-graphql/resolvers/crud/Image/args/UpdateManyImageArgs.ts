import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ImageUpdateManyMutationInput } from "../../../inputs/ImageUpdateManyMutationInput";
import { ImageWhereInput } from "../../../inputs/ImageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyImageArgs {
  @TypeGraphQL.Field(_type => ImageUpdateManyMutationInput, {
    nullable: false
  })
  data!: ImageUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ImageWhereInput, {
    nullable: true
  })
  where?: ImageWhereInput | undefined;
}
