import { ObjectType, Field, Int } from "type-graphql";

@ObjectType("User")
export class User {
  @Field((_type) => Int, { nullable: false })
  id!: number;

  @Field((_type) => String, {
    nullable: true,
  })
  token!: String;
}
