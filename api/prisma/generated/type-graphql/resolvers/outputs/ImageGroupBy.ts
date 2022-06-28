import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ImageAvgAggregate } from "../outputs/ImageAvgAggregate";
import { ImageCountAggregate } from "../outputs/ImageCountAggregate";
import { ImageMaxAggregate } from "../outputs/ImageMaxAggregate";
import { ImageMinAggregate } from "../outputs/ImageMinAggregate";
import { ImageSumAggregate } from "../outputs/ImageSumAggregate";

@TypeGraphQL.ObjectType("ImageGroupBy", {
  isAbstract: true
})
export class ImageGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imageURL!: string;

  @TypeGraphQL.Field(_type => ImageCountAggregate, {
    nullable: true
  })
  _count!: ImageCountAggregate | null;

  @TypeGraphQL.Field(_type => ImageAvgAggregate, {
    nullable: true
  })
  _avg!: ImageAvgAggregate | null;

  @TypeGraphQL.Field(_type => ImageSumAggregate, {
    nullable: true
  })
  _sum!: ImageSumAggregate | null;

  @TypeGraphQL.Field(_type => ImageMinAggregate, {
    nullable: true
  })
  _min!: ImageMinAggregate | null;

  @TypeGraphQL.Field(_type => ImageMaxAggregate, {
    nullable: true
  })
  _max!: ImageMaxAggregate | null;
}
