import * as TypeGraphQL from "type-graphql";

export enum MenuScalarFieldEnum {
  id = "id",
  updatedat = "updatedat",
  title = "title"
}
TypeGraphQL.registerEnumType(MenuScalarFieldEnum, {
  name: "MenuScalarFieldEnum",
  description: undefined,
});
