import * as TypeGraphQL from "type-graphql";

export enum SessionScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  lastOrder = "lastOrder",
  table = "table",
  revenue = "revenue",
  menuid = "menuid"
}
TypeGraphQL.registerEnumType(SessionScalarFieldEnum, {
  name: "SessionScalarFieldEnum",
  description: undefined,
});
