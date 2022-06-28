import * as TypeGraphQL from "type-graphql";

export enum ServiceScalarFieldEnum {
  id = "id",
  currentid = "currentid",
  dummy = "dummy"
}
TypeGraphQL.registerEnumType(ServiceScalarFieldEnum, {
  name: "ServiceScalarFieldEnum",
  description: undefined,
});
