import * as TypeGraphQL from "type-graphql";

export enum OrderScalarFieldEnum {
  id = "id",
  tableNumber = "tableNumber",
  createdAt = "createdAt",
  completedAt = "completedAt",
  price = "price",
  tableid = "tableid",
  sessionid = "sessionid"
}
TypeGraphQL.registerEnumType(OrderScalarFieldEnum, {
  name: "OrderScalarFieldEnum",
  description: undefined,
});
