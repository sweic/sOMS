import * as TypeGraphQL from "type-graphql";

export enum TableScalarFieldEnum {
  id = "id",
  tableNumber = "tableNumber",
  createdAt = "createdAt",
  completedAt = "completedAt",
  active = "active",
  token = "token",
  sessionid = "sessionid"
}
TypeGraphQL.registerEnumType(TableScalarFieldEnum, {
  name: "TableScalarFieldEnum",
  description: undefined,
});
