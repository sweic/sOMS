import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCreateNestedOneWithoutServiceInput } from "../inputs/SessionCreateNestedOneWithoutServiceInput";

@TypeGraphQL.InputType("ServiceCreateInput", {
  isAbstract: true
})
export class ServiceCreateInput {
  @TypeGraphQL.Field(_type => SessionCreateNestedOneWithoutServiceInput, {
    nullable: true
  })
  current?: SessionCreateNestedOneWithoutServiceInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  dummy?: string | undefined;
}
