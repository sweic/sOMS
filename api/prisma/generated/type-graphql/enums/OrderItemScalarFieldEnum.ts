import * as TypeGraphQL from "type-graphql";

export enum OrderItemScalarFieldEnum {
  id = "id",
  orderid = "orderid",
  foodid = "foodid",
  quantity = "quantity",
  totalPrice = "totalPrice",
  title = "title"
}
TypeGraphQL.registerEnumType(OrderItemScalarFieldEnum, {
  name: "OrderItemScalarFieldEnum",
  description: undefined,
});
