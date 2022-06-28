import * as TypeGraphQL from "type-graphql";

export enum FoodItemScalarFieldEnum {
  id = "id",
  code = "code",
  title = "title",
  menuid = "menuid",
  price = "price",
  available = "available",
  options = "options",
  imageid = "imageid"
}
TypeGraphQL.registerEnumType(FoodItemScalarFieldEnum, {
  name: "FoodItemScalarFieldEnum",
  description: undefined,
});
