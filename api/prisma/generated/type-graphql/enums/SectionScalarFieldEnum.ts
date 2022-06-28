import * as TypeGraphQL from "type-graphql";

export enum SectionScalarFieldEnum {
  id = "id",
  code = "code",
  title = "title",
  menuid = "menuid",
  imageid = "imageid"
}
TypeGraphQL.registerEnumType(SectionScalarFieldEnum, {
  name: "SectionScalarFieldEnum",
  description: undefined,
});
