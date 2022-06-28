import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateFoodItem = {
  __typename?: 'AggregateFoodItem';
  _avg?: Maybe<FoodItemAvgAggregate>;
  _count?: Maybe<FoodItemCountAggregate>;
  _max?: Maybe<FoodItemMaxAggregate>;
  _min?: Maybe<FoodItemMinAggregate>;
  _sum?: Maybe<FoodItemSumAggregate>;
};

export type AggregateImage = {
  __typename?: 'AggregateImage';
  _avg?: Maybe<ImageAvgAggregate>;
  _count?: Maybe<ImageCountAggregate>;
  _max?: Maybe<ImageMaxAggregate>;
  _min?: Maybe<ImageMinAggregate>;
  _sum?: Maybe<ImageSumAggregate>;
};

export type AggregateMenu = {
  __typename?: 'AggregateMenu';
  _avg?: Maybe<MenuAvgAggregate>;
  _count?: Maybe<MenuCountAggregate>;
  _max?: Maybe<MenuMaxAggregate>;
  _min?: Maybe<MenuMinAggregate>;
  _sum?: Maybe<MenuSumAggregate>;
};

export type AggregateOrder = {
  __typename?: 'AggregateOrder';
  _avg?: Maybe<OrderAvgAggregate>;
  _count?: Maybe<OrderCountAggregate>;
  _max?: Maybe<OrderMaxAggregate>;
  _min?: Maybe<OrderMinAggregate>;
  _sum?: Maybe<OrderSumAggregate>;
};

export type AggregateOrderItem = {
  __typename?: 'AggregateOrderItem';
  _avg?: Maybe<OrderItemAvgAggregate>;
  _count?: Maybe<OrderItemCountAggregate>;
  _max?: Maybe<OrderItemMaxAggregate>;
  _min?: Maybe<OrderItemMinAggregate>;
  _sum?: Maybe<OrderItemSumAggregate>;
};

export type AggregateSection = {
  __typename?: 'AggregateSection';
  _avg?: Maybe<SectionAvgAggregate>;
  _count?: Maybe<SectionCountAggregate>;
  _max?: Maybe<SectionMaxAggregate>;
  _min?: Maybe<SectionMinAggregate>;
  _sum?: Maybe<SectionSumAggregate>;
};

export type AggregateService = {
  __typename?: 'AggregateService';
  _avg?: Maybe<ServiceAvgAggregate>;
  _count?: Maybe<ServiceCountAggregate>;
  _max?: Maybe<ServiceMaxAggregate>;
  _min?: Maybe<ServiceMinAggregate>;
  _sum?: Maybe<ServiceSumAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _avg?: Maybe<SessionAvgAggregate>;
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  _sum?: Maybe<SessionSumAggregate>;
};

export type AggregateTable = {
  __typename?: 'AggregateTable';
  _avg?: Maybe<TableAvgAggregate>;
  _count?: Maybe<TableCountAggregate>;
  _max?: Maybe<TableMaxAggregate>;
  _min?: Maybe<TableMinAggregate>;
  _sum?: Maybe<TableSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']>;
  divide?: InputMaybe<Scalars['Decimal']>;
  increment?: InputMaybe<Scalars['Decimal']>;
  multiply?: InputMaybe<Scalars['Decimal']>;
  set?: InputMaybe<Scalars['Decimal']>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type DecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type FoodItem = {
  __typename?: 'FoodItem';
  _count?: Maybe<FoodItemCount>;
  available: Scalars['Boolean'];
  code: Scalars['Int'];
  id: Scalars['Int'];
  image?: Maybe<Image>;
  imageid?: Maybe<Scalars['Int']>;
  menu: Menu;
  menuid: Scalars['Int'];
  options: Array<Scalars['JSON']>;
  price: Scalars['Decimal'];
  sections: Array<Section>;
  title: Scalars['String'];
};


export type FoodItemSectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};

export type FoodItemAvgAggregate = {
  __typename?: 'FoodItemAvgAggregate';
  code?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  imageid?: Maybe<Scalars['Float']>;
  menuid?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Decimal']>;
};

export type FoodItemAvgOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type FoodItemCount = {
  __typename?: 'FoodItemCount';
  sections: Scalars['Int'];
};

export type FoodItemCountAggregate = {
  __typename?: 'FoodItemCountAggregate';
  _all: Scalars['Int'];
  available: Scalars['Int'];
  code: Scalars['Int'];
  id: Scalars['Int'];
  imageid: Scalars['Int'];
  menuid: Scalars['Int'];
  options: Scalars['Int'];
  price: Scalars['Int'];
  title: Scalars['Int'];
};

export type FoodItemCountOrderByAggregateInput = {
  available?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  options?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FoodItemCreateInput = {
  available: Scalars['Boolean'];
  code?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<ImageCreateNestedOneWithoutFoodImageInput>;
  menu: MenuCreateNestedOneWithoutFooditemsInput;
  options?: InputMaybe<FoodItemCreateoptionsInput>;
  price: Scalars['Decimal'];
  sections?: InputMaybe<SectionCreateNestedManyWithoutFooditemsInput>;
  title: Scalars['String'];
};

export type FoodItemCreateManyInput = {
  available: Scalars['Boolean'];
  code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  imageid?: InputMaybe<Scalars['Int']>;
  menuid: Scalars['Int'];
  options?: InputMaybe<FoodItemCreateoptionsInput>;
  price: Scalars['Decimal'];
  title: Scalars['String'];
};

export type FoodItemCreateManyMenuInput = {
  available: Scalars['Boolean'];
  code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  imageid?: InputMaybe<Scalars['Int']>;
  options?: InputMaybe<FoodItemCreateoptionsInput>;
  price: Scalars['Decimal'];
  title: Scalars['String'];
};

export type FoodItemCreateManyMenuInputEnvelope = {
  data: Array<FoodItemCreateManyMenuInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type FoodItemCreateNestedManyWithoutMenuInput = {
  connect?: InputMaybe<Array<FoodItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodItemCreateOrConnectWithoutMenuInput>>;
  create?: InputMaybe<Array<FoodItemCreateWithoutMenuInput>>;
  createMany?: InputMaybe<FoodItemCreateManyMenuInputEnvelope>;
};

export type FoodItemCreateNestedManyWithoutSectionsInput = {
  connect?: InputMaybe<Array<FoodItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodItemCreateOrConnectWithoutSectionsInput>>;
  create?: InputMaybe<Array<FoodItemCreateWithoutSectionsInput>>;
};

export type FoodItemCreateNestedOneWithoutImageInput = {
  connect?: InputMaybe<FoodItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodItemCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<FoodItemCreateWithoutImageInput>;
};

export type FoodItemCreateOrConnectWithoutImageInput = {
  create: FoodItemCreateWithoutImageInput;
  where: FoodItemWhereUniqueInput;
};

export type FoodItemCreateOrConnectWithoutMenuInput = {
  create: FoodItemCreateWithoutMenuInput;
  where: FoodItemWhereUniqueInput;
};

export type FoodItemCreateOrConnectWithoutSectionsInput = {
  create: FoodItemCreateWithoutSectionsInput;
  where: FoodItemWhereUniqueInput;
};

export type FoodItemCreateWithoutImageInput = {
  available: Scalars['Boolean'];
  code?: InputMaybe<Scalars['Int']>;
  menu: MenuCreateNestedOneWithoutFooditemsInput;
  options?: InputMaybe<FoodItemCreateoptionsInput>;
  price: Scalars['Decimal'];
  sections?: InputMaybe<SectionCreateNestedManyWithoutFooditemsInput>;
  title: Scalars['String'];
};

export type FoodItemCreateWithoutMenuInput = {
  available: Scalars['Boolean'];
  code?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<ImageCreateNestedOneWithoutFoodImageInput>;
  options?: InputMaybe<FoodItemCreateoptionsInput>;
  price: Scalars['Decimal'];
  sections?: InputMaybe<SectionCreateNestedManyWithoutFooditemsInput>;
  title: Scalars['String'];
};

export type FoodItemCreateWithoutSectionsInput = {
  available: Scalars['Boolean'];
  code?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<ImageCreateNestedOneWithoutFoodImageInput>;
  menu: MenuCreateNestedOneWithoutFooditemsInput;
  options?: InputMaybe<FoodItemCreateoptionsInput>;
  price: Scalars['Decimal'];
  title: Scalars['String'];
};

export type FoodItemCreateoptionsInput = {
  set: Array<Scalars['JSON']>;
};

export type FoodItemGroupBy = {
  __typename?: 'FoodItemGroupBy';
  _avg?: Maybe<FoodItemAvgAggregate>;
  _count?: Maybe<FoodItemCountAggregate>;
  _max?: Maybe<FoodItemMaxAggregate>;
  _min?: Maybe<FoodItemMinAggregate>;
  _sum?: Maybe<FoodItemSumAggregate>;
  available: Scalars['Boolean'];
  code: Scalars['Int'];
  id: Scalars['Int'];
  imageid?: Maybe<Scalars['Int']>;
  menuid: Scalars['Int'];
  options?: Maybe<Array<Scalars['JSON']>>;
  price: Scalars['Decimal'];
  title: Scalars['String'];
};

export type FoodItemListRelationFilter = {
  every?: InputMaybe<FoodItemWhereInput>;
  none?: InputMaybe<FoodItemWhereInput>;
  some?: InputMaybe<FoodItemWhereInput>;
};

export type FoodItemMaxAggregate = {
  __typename?: 'FoodItemMaxAggregate';
  available?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageid?: Maybe<Scalars['Int']>;
  menuid?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Decimal']>;
  title?: Maybe<Scalars['String']>;
};

export type FoodItemMaxOrderByAggregateInput = {
  available?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FoodItemMinAggregate = {
  __typename?: 'FoodItemMinAggregate';
  available?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageid?: Maybe<Scalars['Int']>;
  menuid?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Decimal']>;
  title?: Maybe<Scalars['String']>;
};

export type FoodItemMinOrderByAggregateInput = {
  available?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FoodItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodItemOrderByWithAggregationInput = {
  _avg?: InputMaybe<FoodItemAvgOrderByAggregateInput>;
  _count?: InputMaybe<FoodItemCountOrderByAggregateInput>;
  _max?: InputMaybe<FoodItemMaxOrderByAggregateInput>;
  _min?: InputMaybe<FoodItemMinOrderByAggregateInput>;
  _sum?: InputMaybe<FoodItemSumOrderByAggregateInput>;
  available?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  options?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FoodItemOrderByWithRelationInput = {
  available?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageOrderByWithRelationInput>;
  imageid?: InputMaybe<SortOrder>;
  menu?: InputMaybe<MenuOrderByWithRelationInput>;
  menuid?: InputMaybe<SortOrder>;
  options?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sections?: InputMaybe<SectionOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
};

export type FoodItemRelationFilter = {
  is?: InputMaybe<FoodItemWhereInput>;
  isNot?: InputMaybe<FoodItemWhereInput>;
};

export enum FoodItemScalarFieldEnum {
  Available = 'available',
  Code = 'code',
  Id = 'id',
  Imageid = 'imageid',
  Menuid = 'menuid',
  Options = 'options',
  Price = 'price',
  Title = 'title'
}

export type FoodItemScalarWhereInput = {
  AND?: InputMaybe<Array<FoodItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodItemScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodItemScalarWhereInput>>;
  available?: InputMaybe<BoolFilter>;
  code?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  imageid?: InputMaybe<IntNullableFilter>;
  menuid?: InputMaybe<IntFilter>;
  options?: InputMaybe<JsonNullableListFilter>;
  price?: InputMaybe<DecimalFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FoodItemScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FoodItemScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FoodItemScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FoodItemScalarWhereWithAggregatesInput>>;
  available?: InputMaybe<BoolWithAggregatesFilter>;
  code?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  imageid?: InputMaybe<IntNullableWithAggregatesFilter>;
  menuid?: InputMaybe<IntWithAggregatesFilter>;
  options?: InputMaybe<JsonNullableListFilter>;
  price?: InputMaybe<DecimalWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type FoodItemSumAggregate = {
  __typename?: 'FoodItemSumAggregate';
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageid?: Maybe<Scalars['Int']>;
  menuid?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Decimal']>;
};

export type FoodItemSumOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
};

export type FoodItemUpdateInput = {
  available?: InputMaybe<BoolFieldUpdateOperationsInput>;
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutFoodImageInput>;
  menu?: InputMaybe<MenuUpdateOneRequiredWithoutFooditemsInput>;
  options?: InputMaybe<FoodItemUpdateoptionsInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  sections?: InputMaybe<SectionUpdateManyWithoutFooditemsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodItemUpdateManyMutationInput = {
  available?: InputMaybe<BoolFieldUpdateOperationsInput>;
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  options?: InputMaybe<FoodItemUpdateoptionsInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodItemUpdateManyWithWhereWithoutMenuInput = {
  data: FoodItemUpdateManyMutationInput;
  where: FoodItemScalarWhereInput;
};

export type FoodItemUpdateManyWithWhereWithoutSectionsInput = {
  data: FoodItemUpdateManyMutationInput;
  where: FoodItemScalarWhereInput;
};

export type FoodItemUpdateManyWithoutMenuInput = {
  connect?: InputMaybe<Array<FoodItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodItemCreateOrConnectWithoutMenuInput>>;
  create?: InputMaybe<Array<FoodItemCreateWithoutMenuInput>>;
  createMany?: InputMaybe<FoodItemCreateManyMenuInputEnvelope>;
  delete?: InputMaybe<Array<FoodItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodItemWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodItemWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodItemUpdateWithWhereUniqueWithoutMenuInput>>;
  updateMany?: InputMaybe<Array<FoodItemUpdateManyWithWhereWithoutMenuInput>>;
  upsert?: InputMaybe<Array<FoodItemUpsertWithWhereUniqueWithoutMenuInput>>;
};

export type FoodItemUpdateManyWithoutSectionsInput = {
  connect?: InputMaybe<Array<FoodItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodItemCreateOrConnectWithoutSectionsInput>>;
  create?: InputMaybe<Array<FoodItemCreateWithoutSectionsInput>>;
  delete?: InputMaybe<Array<FoodItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodItemWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodItemWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodItemUpdateWithWhereUniqueWithoutSectionsInput>>;
  updateMany?: InputMaybe<Array<FoodItemUpdateManyWithWhereWithoutSectionsInput>>;
  upsert?: InputMaybe<Array<FoodItemUpsertWithWhereUniqueWithoutSectionsInput>>;
};

export type FoodItemUpdateOneWithoutImageInput = {
  connect?: InputMaybe<FoodItemWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodItemCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<FoodItemCreateWithoutImageInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<FoodItemUpdateWithoutImageInput>;
  upsert?: InputMaybe<FoodItemUpsertWithoutImageInput>;
};

export type FoodItemUpdateWithWhereUniqueWithoutMenuInput = {
  data: FoodItemUpdateWithoutMenuInput;
  where: FoodItemWhereUniqueInput;
};

export type FoodItemUpdateWithWhereUniqueWithoutSectionsInput = {
  data: FoodItemUpdateWithoutSectionsInput;
  where: FoodItemWhereUniqueInput;
};

export type FoodItemUpdateWithoutImageInput = {
  available?: InputMaybe<BoolFieldUpdateOperationsInput>;
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  menu?: InputMaybe<MenuUpdateOneRequiredWithoutFooditemsInput>;
  options?: InputMaybe<FoodItemUpdateoptionsInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  sections?: InputMaybe<SectionUpdateManyWithoutFooditemsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodItemUpdateWithoutMenuInput = {
  available?: InputMaybe<BoolFieldUpdateOperationsInput>;
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutFoodImageInput>;
  options?: InputMaybe<FoodItemUpdateoptionsInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  sections?: InputMaybe<SectionUpdateManyWithoutFooditemsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodItemUpdateWithoutSectionsInput = {
  available?: InputMaybe<BoolFieldUpdateOperationsInput>;
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutFoodImageInput>;
  menu?: InputMaybe<MenuUpdateOneRequiredWithoutFooditemsInput>;
  options?: InputMaybe<FoodItemUpdateoptionsInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FoodItemUpdateoptionsInput = {
  push?: InputMaybe<Array<Scalars['JSON']>>;
  set?: InputMaybe<Array<Scalars['JSON']>>;
};

export type FoodItemUpsertWithWhereUniqueWithoutMenuInput = {
  create: FoodItemCreateWithoutMenuInput;
  update: FoodItemUpdateWithoutMenuInput;
  where: FoodItemWhereUniqueInput;
};

export type FoodItemUpsertWithWhereUniqueWithoutSectionsInput = {
  create: FoodItemCreateWithoutSectionsInput;
  update: FoodItemUpdateWithoutSectionsInput;
  where: FoodItemWhereUniqueInput;
};

export type FoodItemUpsertWithoutImageInput = {
  create: FoodItemCreateWithoutImageInput;
  update: FoodItemUpdateWithoutImageInput;
};

export type FoodItemWhereInput = {
  AND?: InputMaybe<Array<FoodItemWhereInput>>;
  NOT?: InputMaybe<Array<FoodItemWhereInput>>;
  OR?: InputMaybe<Array<FoodItemWhereInput>>;
  available?: InputMaybe<BoolFilter>;
  code?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<ImageRelationFilter>;
  imageid?: InputMaybe<IntNullableFilter>;
  menu?: InputMaybe<MenuRelationFilter>;
  menuid?: InputMaybe<IntFilter>;
  options?: InputMaybe<JsonNullableListFilter>;
  price?: InputMaybe<DecimalFilter>;
  sections?: InputMaybe<SectionListRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FoodItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  imageid?: InputMaybe<Scalars['Int']>;
};

export type Image = {
  __typename?: 'Image';
  foodImage?: Maybe<FoodItem>;
  id: Scalars['Int'];
  imageURL: Scalars['String'];
  sectionImage?: Maybe<Section>;
};

export type ImageAvgAggregate = {
  __typename?: 'ImageAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type ImageAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ImageCountAggregate = {
  __typename?: 'ImageCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  imageURL: Scalars['Int'];
};

export type ImageCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  imageURL?: InputMaybe<SortOrder>;
};

export type ImageCreateInput = {
  foodImage?: InputMaybe<FoodItemCreateNestedOneWithoutImageInput>;
  imageURL: Scalars['String'];
  sectionImage?: InputMaybe<SectionCreateNestedOneWithoutImageInput>;
};

export type ImageCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  imageURL: Scalars['String'];
};

export type ImageCreateNestedOneWithoutFoodImageInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutFoodImageInput>;
  create?: InputMaybe<ImageCreateWithoutFoodImageInput>;
};

export type ImageCreateNestedOneWithoutSectionImageInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutSectionImageInput>;
  create?: InputMaybe<ImageCreateWithoutSectionImageInput>;
};

export type ImageCreateOrConnectWithoutFoodImageInput = {
  create: ImageCreateWithoutFoodImageInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateOrConnectWithoutSectionImageInput = {
  create: ImageCreateWithoutSectionImageInput;
  where: ImageWhereUniqueInput;
};

export type ImageCreateWithoutFoodImageInput = {
  imageURL: Scalars['String'];
  sectionImage?: InputMaybe<SectionCreateNestedOneWithoutImageInput>;
};

export type ImageCreateWithoutSectionImageInput = {
  foodImage?: InputMaybe<FoodItemCreateNestedOneWithoutImageInput>;
  imageURL: Scalars['String'];
};

export type ImageGroupBy = {
  __typename?: 'ImageGroupBy';
  _avg?: Maybe<ImageAvgAggregate>;
  _count?: Maybe<ImageCountAggregate>;
  _max?: Maybe<ImageMaxAggregate>;
  _min?: Maybe<ImageMinAggregate>;
  _sum?: Maybe<ImageSumAggregate>;
  id: Scalars['Int'];
  imageURL: Scalars['String'];
};

export type ImageMaxAggregate = {
  __typename?: 'ImageMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
};

export type ImageMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  imageURL?: InputMaybe<SortOrder>;
};

export type ImageMinAggregate = {
  __typename?: 'ImageMinAggregate';
  id?: Maybe<Scalars['Int']>;
  imageURL?: Maybe<Scalars['String']>;
};

export type ImageMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  imageURL?: InputMaybe<SortOrder>;
};

export type ImageOrderByWithAggregationInput = {
  _avg?: InputMaybe<ImageAvgOrderByAggregateInput>;
  _count?: InputMaybe<ImageCountOrderByAggregateInput>;
  _max?: InputMaybe<ImageMaxOrderByAggregateInput>;
  _min?: InputMaybe<ImageMinOrderByAggregateInput>;
  _sum?: InputMaybe<ImageSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  imageURL?: InputMaybe<SortOrder>;
};

export type ImageOrderByWithRelationInput = {
  foodImage?: InputMaybe<FoodItemOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  imageURL?: InputMaybe<SortOrder>;
  sectionImage?: InputMaybe<SectionOrderByWithRelationInput>;
};

export type ImageRelationFilter = {
  is?: InputMaybe<ImageWhereInput>;
  isNot?: InputMaybe<ImageWhereInput>;
};

export enum ImageScalarFieldEnum {
  Id = 'id',
  ImageUrl = 'imageURL'
}

export type ImageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ImageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ImageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ImageScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  imageURL?: InputMaybe<StringWithAggregatesFilter>;
};

export type ImageSumAggregate = {
  __typename?: 'ImageSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type ImageSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ImageUpdateInput = {
  foodImage?: InputMaybe<FoodItemUpdateOneWithoutImageInput>;
  imageURL?: InputMaybe<StringFieldUpdateOperationsInput>;
  sectionImage?: InputMaybe<SectionUpdateOneWithoutImageInput>;
};

export type ImageUpdateManyMutationInput = {
  imageURL?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpdateOneWithoutFoodImageInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutFoodImageInput>;
  create?: InputMaybe<ImageCreateWithoutFoodImageInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ImageUpdateWithoutFoodImageInput>;
  upsert?: InputMaybe<ImageUpsertWithoutFoodImageInput>;
};

export type ImageUpdateOneWithoutSectionImageInput = {
  connect?: InputMaybe<ImageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ImageCreateOrConnectWithoutSectionImageInput>;
  create?: InputMaybe<ImageCreateWithoutSectionImageInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ImageUpdateWithoutSectionImageInput>;
  upsert?: InputMaybe<ImageUpsertWithoutSectionImageInput>;
};

export type ImageUpdateWithoutFoodImageInput = {
  imageURL?: InputMaybe<StringFieldUpdateOperationsInput>;
  sectionImage?: InputMaybe<SectionUpdateOneWithoutImageInput>;
};

export type ImageUpdateWithoutSectionImageInput = {
  foodImage?: InputMaybe<FoodItemUpdateOneWithoutImageInput>;
  imageURL?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ImageUpsertWithoutFoodImageInput = {
  create: ImageCreateWithoutFoodImageInput;
  update: ImageUpdateWithoutFoodImageInput;
};

export type ImageUpsertWithoutSectionImageInput = {
  create: ImageCreateWithoutSectionImageInput;
  update: ImageUpdateWithoutSectionImageInput;
};

export type ImageWhereInput = {
  AND?: InputMaybe<Array<ImageWhereInput>>;
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  OR?: InputMaybe<Array<ImageWhereInput>>;
  foodImage?: InputMaybe<FoodItemRelationFilter>;
  id?: InputMaybe<IntFilter>;
  imageURL?: InputMaybe<StringFilter>;
  sectionImage?: InputMaybe<SectionRelationFilter>;
};

export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['JSON']>>;
  has?: InputMaybe<Scalars['JSON']>;
  hasEvery?: InputMaybe<Array<Scalars['JSON']>>;
  hasSome?: InputMaybe<Array<Scalars['JSON']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type Menu = {
  __typename?: 'Menu';
  _count?: Maybe<MenuCount>;
  fooditems: Array<FoodItem>;
  id: Scalars['Int'];
  sections: Array<Section>;
  sessions: Array<Session>;
  title: Scalars['String'];
  updatedat: Scalars['DateTime'];
};


export type MenuFooditemsArgs = {
  cursor?: InputMaybe<FoodItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodItemWhereInput>;
};


export type MenuSectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type MenuSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};

export type MenuAvgAggregate = {
  __typename?: 'MenuAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type MenuAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type MenuCount = {
  __typename?: 'MenuCount';
  fooditems: Scalars['Int'];
  sections: Scalars['Int'];
  sessions: Scalars['Int'];
};

export type MenuCountAggregate = {
  __typename?: 'MenuCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  updatedat: Scalars['Int'];
};

export type MenuCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedat?: InputMaybe<SortOrder>;
};

export type MenuCreateInput = {
  fooditems?: InputMaybe<FoodItemCreateNestedManyWithoutMenuInput>;
  sections?: InputMaybe<SectionCreateNestedManyWithoutMenuInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutMenuInput>;
  title: Scalars['String'];
  updatedat?: InputMaybe<Scalars['DateTime']>;
};

export type MenuCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  updatedat?: InputMaybe<Scalars['DateTime']>;
};

export type MenuCreateNestedOneWithoutFooditemsInput = {
  connect?: InputMaybe<MenuWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MenuCreateOrConnectWithoutFooditemsInput>;
  create?: InputMaybe<MenuCreateWithoutFooditemsInput>;
};

export type MenuCreateNestedOneWithoutSectionsInput = {
  connect?: InputMaybe<MenuWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MenuCreateOrConnectWithoutSectionsInput>;
  create?: InputMaybe<MenuCreateWithoutSectionsInput>;
};

export type MenuCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<MenuWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MenuCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<MenuCreateWithoutSessionsInput>;
};

export type MenuCreateOrConnectWithoutFooditemsInput = {
  create: MenuCreateWithoutFooditemsInput;
  where: MenuWhereUniqueInput;
};

export type MenuCreateOrConnectWithoutSectionsInput = {
  create: MenuCreateWithoutSectionsInput;
  where: MenuWhereUniqueInput;
};

export type MenuCreateOrConnectWithoutSessionsInput = {
  create: MenuCreateWithoutSessionsInput;
  where: MenuWhereUniqueInput;
};

export type MenuCreateWithoutFooditemsInput = {
  sections?: InputMaybe<SectionCreateNestedManyWithoutMenuInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutMenuInput>;
  title: Scalars['String'];
  updatedat?: InputMaybe<Scalars['DateTime']>;
};

export type MenuCreateWithoutSectionsInput = {
  fooditems?: InputMaybe<FoodItemCreateNestedManyWithoutMenuInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutMenuInput>;
  title: Scalars['String'];
  updatedat?: InputMaybe<Scalars['DateTime']>;
};

export type MenuCreateWithoutSessionsInput = {
  fooditems?: InputMaybe<FoodItemCreateNestedManyWithoutMenuInput>;
  sections?: InputMaybe<SectionCreateNestedManyWithoutMenuInput>;
  title: Scalars['String'];
  updatedat?: InputMaybe<Scalars['DateTime']>;
};

export type MenuGroupBy = {
  __typename?: 'MenuGroupBy';
  _avg?: Maybe<MenuAvgAggregate>;
  _count?: Maybe<MenuCountAggregate>;
  _max?: Maybe<MenuMaxAggregate>;
  _min?: Maybe<MenuMinAggregate>;
  _sum?: Maybe<MenuSumAggregate>;
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedat: Scalars['DateTime'];
};

export type MenuMaxAggregate = {
  __typename?: 'MenuMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedat?: Maybe<Scalars['DateTime']>;
};

export type MenuMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedat?: InputMaybe<SortOrder>;
};

export type MenuMinAggregate = {
  __typename?: 'MenuMinAggregate';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedat?: Maybe<Scalars['DateTime']>;
};

export type MenuMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedat?: InputMaybe<SortOrder>;
};

export type MenuOrderByWithAggregationInput = {
  _avg?: InputMaybe<MenuAvgOrderByAggregateInput>;
  _count?: InputMaybe<MenuCountOrderByAggregateInput>;
  _max?: InputMaybe<MenuMaxOrderByAggregateInput>;
  _min?: InputMaybe<MenuMinOrderByAggregateInput>;
  _sum?: InputMaybe<MenuSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedat?: InputMaybe<SortOrder>;
};

export type MenuOrderByWithRelationInput = {
  fooditems?: InputMaybe<FoodItemOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  sections?: InputMaybe<SectionOrderByRelationAggregateInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedat?: InputMaybe<SortOrder>;
};

export type MenuRelationFilter = {
  is?: InputMaybe<MenuWhereInput>;
  isNot?: InputMaybe<MenuWhereInput>;
};

export enum MenuScalarFieldEnum {
  Id = 'id',
  Title = 'title',
  Updatedat = 'updatedat'
}

export type MenuScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MenuScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MenuScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MenuScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedat?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MenuSumAggregate = {
  __typename?: 'MenuSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type MenuSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type MenuUpdateInput = {
  fooditems?: InputMaybe<FoodItemUpdateManyWithoutMenuInput>;
  sections?: InputMaybe<SectionUpdateManyWithoutMenuInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutMenuInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedat?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MenuUpdateManyMutationInput = {
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedat?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MenuUpdateOneRequiredWithoutFooditemsInput = {
  connect?: InputMaybe<MenuWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MenuCreateOrConnectWithoutFooditemsInput>;
  create?: InputMaybe<MenuCreateWithoutFooditemsInput>;
  update?: InputMaybe<MenuUpdateWithoutFooditemsInput>;
  upsert?: InputMaybe<MenuUpsertWithoutFooditemsInput>;
};

export type MenuUpdateOneRequiredWithoutSectionsInput = {
  connect?: InputMaybe<MenuWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MenuCreateOrConnectWithoutSectionsInput>;
  create?: InputMaybe<MenuCreateWithoutSectionsInput>;
  update?: InputMaybe<MenuUpdateWithoutSectionsInput>;
  upsert?: InputMaybe<MenuUpsertWithoutSectionsInput>;
};

export type MenuUpdateOneWithoutSessionsInput = {
  connect?: InputMaybe<MenuWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MenuCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<MenuCreateWithoutSessionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<MenuUpdateWithoutSessionsInput>;
  upsert?: InputMaybe<MenuUpsertWithoutSessionsInput>;
};

export type MenuUpdateWithoutFooditemsInput = {
  sections?: InputMaybe<SectionUpdateManyWithoutMenuInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutMenuInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedat?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MenuUpdateWithoutSectionsInput = {
  fooditems?: InputMaybe<FoodItemUpdateManyWithoutMenuInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutMenuInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedat?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MenuUpdateWithoutSessionsInput = {
  fooditems?: InputMaybe<FoodItemUpdateManyWithoutMenuInput>;
  sections?: InputMaybe<SectionUpdateManyWithoutMenuInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedat?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MenuUpsertWithoutFooditemsInput = {
  create: MenuCreateWithoutFooditemsInput;
  update: MenuUpdateWithoutFooditemsInput;
};

export type MenuUpsertWithoutSectionsInput = {
  create: MenuCreateWithoutSectionsInput;
  update: MenuUpdateWithoutSectionsInput;
};

export type MenuUpsertWithoutSessionsInput = {
  create: MenuCreateWithoutSessionsInput;
  update: MenuUpdateWithoutSessionsInput;
};

export type MenuWhereInput = {
  AND?: InputMaybe<Array<MenuWhereInput>>;
  NOT?: InputMaybe<Array<MenuWhereInput>>;
  OR?: InputMaybe<Array<MenuWhereInput>>;
  fooditems?: InputMaybe<FoodItemListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  sections?: InputMaybe<SectionListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedat?: InputMaybe<DateTimeFilter>;
};

export type MenuWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  completeOrder: Order;
  createFoodItem: FoodItem;
  createImage: Image;
  createManyFoodItem: AffectedRowsOutput;
  createManyImage: AffectedRowsOutput;
  createManyMenu: AffectedRowsOutput;
  createManyOrder: AffectedRowsOutput;
  createManyOrderItem: AffectedRowsOutput;
  createManySection: AffectedRowsOutput;
  createManyService: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyTable: AffectedRowsOutput;
  createMenu: Menu;
  createOrder: Order;
  createOrderItem: OrderItem;
  createSafeOrder: Order;
  createSafeTable: Table;
  createSection: Section;
  createService: Service;
  createSession: Session;
  createTable: Table;
  deleteFoodItem?: Maybe<FoodItem>;
  deleteImage?: Maybe<Image>;
  deleteManyFoodItem: AffectedRowsOutput;
  deleteManyImage: AffectedRowsOutput;
  deleteManyMenu: AffectedRowsOutput;
  deleteManyOrder: AffectedRowsOutput;
  deleteManyOrderItem: AffectedRowsOutput;
  deleteManySection: AffectedRowsOutput;
  deleteManyService: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyTable: AffectedRowsOutput;
  deleteMenu?: Maybe<Menu>;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deleteSection?: Maybe<Section>;
  deleteService?: Maybe<Service>;
  deleteSession?: Maybe<Session>;
  deleteTable?: Maybe<Table>;
  editSafeItem: FoodItem;
  terminateService: Service;
  updateFoodItem?: Maybe<FoodItem>;
  updateImage?: Maybe<Image>;
  updateManyFoodItem: AffectedRowsOutput;
  updateManyImage: AffectedRowsOutput;
  updateManyMenu: AffectedRowsOutput;
  updateManyOrder: AffectedRowsOutput;
  updateManyOrderItem: AffectedRowsOutput;
  updateManySection: AffectedRowsOutput;
  updateManyService: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyTable: AffectedRowsOutput;
  updateMenu?: Maybe<Menu>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updateSection?: Maybe<Section>;
  updateService?: Maybe<Service>;
  updateSession?: Maybe<Session>;
  updateTable?: Maybe<Table>;
  upsertFoodItem: FoodItem;
  upsertImage: Image;
  upsertMenu: Menu;
  upsertOrder: Order;
  upsertOrderItem: OrderItem;
  upsertSafeService: Service;
  upsertSection: Section;
  upsertService: Service;
  upsertSession: Session;
  upsertTable: Table;
  vacateSafeTable: Table;
  validateUser: User;
};


export type MutationCompleteOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationCreateFoodItemArgs = {
  data: FoodItemCreateInput;
};


export type MutationCreateImageArgs = {
  data: ImageCreateInput;
};


export type MutationCreateManyFoodItemArgs = {
  data: Array<FoodItemCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyImageArgs = {
  data: Array<ImageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyMenuArgs = {
  data: Array<MenuCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyOrderArgs = {
  data: Array<OrderCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyOrderItemArgs = {
  data: Array<OrderItemCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySectionArgs = {
  data: Array<SectionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyServiceArgs = {
  data: Array<ServiceCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTableArgs = {
  data: Array<TableCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateMenuArgs = {
  data: MenuCreateInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};


export type MutationCreateSafeOrderArgs = {
  data: OrderCreateInput;
};


export type MutationCreateSafeTableArgs = {
  data: TableCreateInput;
};


export type MutationCreateSectionArgs = {
  data: SectionCreateInput;
};


export type MutationCreateServiceArgs = {
  data: ServiceCreateInput;
};


export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateTableArgs = {
  data: TableCreateInput;
};


export type MutationDeleteFoodItemArgs = {
  where: FoodItemWhereUniqueInput;
};


export type MutationDeleteImageArgs = {
  where: ImageWhereUniqueInput;
};


export type MutationDeleteManyFoodItemArgs = {
  where?: InputMaybe<FoodItemWhereInput>;
};


export type MutationDeleteManyImageArgs = {
  where?: InputMaybe<ImageWhereInput>;
};


export type MutationDeleteManyMenuArgs = {
  where?: InputMaybe<MenuWhereInput>;
};


export type MutationDeleteManyOrderArgs = {
  where?: InputMaybe<OrderWhereInput>;
};


export type MutationDeleteManyOrderItemArgs = {
  where?: InputMaybe<OrderItemWhereInput>;
};


export type MutationDeleteManySectionArgs = {
  where?: InputMaybe<SectionWhereInput>;
};


export type MutationDeleteManyServiceArgs = {
  where?: InputMaybe<ServiceWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManyTableArgs = {
  where?: InputMaybe<TableWhereInput>;
};


export type MutationDeleteMenuArgs = {
  where: MenuWhereUniqueInput;
};


export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type MutationDeleteSectionArgs = {
  where: SectionWhereUniqueInput;
};


export type MutationDeleteServiceArgs = {
  where: ServiceWhereUniqueInput;
};


export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteTableArgs = {
  where: TableWhereUniqueInput;
};


export type MutationEditSafeItemArgs = {
  data: FoodItemUpdateInput;
  where: FoodItemWhereUniqueInput;
};


export type MutationTerminateServiceArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};


export type MutationUpdateFoodItemArgs = {
  data: FoodItemUpdateInput;
  where: FoodItemWhereUniqueInput;
};


export type MutationUpdateImageArgs = {
  data: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpdateManyFoodItemArgs = {
  data: FoodItemUpdateManyMutationInput;
  where?: InputMaybe<FoodItemWhereInput>;
};


export type MutationUpdateManyImageArgs = {
  data: ImageUpdateManyMutationInput;
  where?: InputMaybe<ImageWhereInput>;
};


export type MutationUpdateManyMenuArgs = {
  data: MenuUpdateManyMutationInput;
  where?: InputMaybe<MenuWhereInput>;
};


export type MutationUpdateManyOrderArgs = {
  data: OrderUpdateManyMutationInput;
  where?: InputMaybe<OrderWhereInput>;
};


export type MutationUpdateManyOrderItemArgs = {
  data: OrderItemUpdateManyMutationInput;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type MutationUpdateManySectionArgs = {
  data: SectionUpdateManyMutationInput;
  where?: InputMaybe<SectionWhereInput>;
};


export type MutationUpdateManyServiceArgs = {
  data: ServiceUpdateManyMutationInput;
  where?: InputMaybe<ServiceWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManyTableArgs = {
  data: TableUpdateManyMutationInput;
  where?: InputMaybe<TableWhereInput>;
};


export type MutationUpdateMenuArgs = {
  data: MenuUpdateInput;
  where: MenuWhereUniqueInput;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpdateOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpdateSectionArgs = {
  data: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};


export type MutationUpdateServiceArgs = {
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};


export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateTableArgs = {
  data: TableUpdateInput;
  where: TableWhereUniqueInput;
};


export type MutationUpsertFoodItemArgs = {
  create: FoodItemCreateInput;
  update: FoodItemUpdateInput;
  where: FoodItemWhereUniqueInput;
};


export type MutationUpsertImageArgs = {
  create: ImageCreateInput;
  update: ImageUpdateInput;
  where: ImageWhereUniqueInput;
};


export type MutationUpsertMenuArgs = {
  create: MenuCreateInput;
  update: MenuUpdateInput;
  where: MenuWhereUniqueInput;
};


export type MutationUpsertOrderArgs = {
  create: OrderCreateInput;
  update: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};


export type MutationUpsertOrderItemArgs = {
  create: OrderItemCreateInput;
  update: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};


export type MutationUpsertSafeServiceArgs = {
  create: ServiceCreateInput;
  update: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};


export type MutationUpsertSectionArgs = {
  create: SectionCreateInput;
  update: SectionUpdateInput;
  where: SectionWhereUniqueInput;
};


export type MutationUpsertServiceArgs = {
  create: ServiceCreateInput;
  update: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
};


export type MutationUpsertSessionArgs = {
  create: SessionCreateInput;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertTableArgs = {
  create: TableCreateInput;
  update: TableUpdateInput;
  where: TableWhereUniqueInput;
};


export type MutationVacateSafeTableArgs = {
  data: TableUpdateInput;
  where: TableWhereUniqueInput;
};


export type MutationValidateUserArgs = {
  token: Scalars['String'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  _count?: Maybe<OrderCount>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  orderitems: Array<OrderItem>;
  price: Scalars['Decimal'];
  session: Session;
  sessionid: Scalars['Int'];
  table: Table;
  tableNumber: Scalars['Int'];
  tableid: Scalars['Int'];
};


export type OrderOrderitemsArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Decimal']>;
  sessionid?: Maybe<Scalars['Float']>;
  tableNumber?: Maybe<Scalars['Float']>;
  tableid?: Maybe<Scalars['Float']>;
};

export type OrderAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  tableid?: InputMaybe<SortOrder>;
};

export type OrderCount = {
  __typename?: 'OrderCount';
  orderitems: Scalars['Int'];
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  _all: Scalars['Int'];
  completedAt: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  price: Scalars['Int'];
  sessionid: Scalars['Int'];
  tableNumber: Scalars['Int'];
  tableid: Scalars['Int'];
};

export type OrderCountOrderByAggregateInput = {
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  tableid?: InputMaybe<SortOrder>;
};

export type OrderCreateInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  orderitems?: InputMaybe<OrderItemCreateNestedManyWithoutOrderInput>;
  price: Scalars['Decimal'];
  session: SessionCreateNestedOneWithoutOrdersInput;
  table: TableCreateNestedOneWithoutOrdersInput;
  tableNumber: Scalars['Int'];
};

export type OrderCreateManyInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  price: Scalars['Decimal'];
  sessionid: Scalars['Int'];
  tableNumber: Scalars['Int'];
  tableid: Scalars['Int'];
};

export type OrderCreateManySessionInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  price: Scalars['Decimal'];
  tableNumber: Scalars['Int'];
  tableid: Scalars['Int'];
};

export type OrderCreateManySessionInputEnvelope = {
  data: Array<OrderCreateManySessionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OrderCreateManyTableInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  price: Scalars['Decimal'];
  sessionid: Scalars['Int'];
  tableNumber: Scalars['Int'];
};

export type OrderCreateManyTableInputEnvelope = {
  data: Array<OrderCreateManyTableInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OrderCreateNestedManyWithoutSessionInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutSessionInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutSessionInput>>;
  createMany?: InputMaybe<OrderCreateManySessionInputEnvelope>;
};

export type OrderCreateNestedManyWithoutTableInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutTableInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutTableInput>>;
  createMany?: InputMaybe<OrderCreateManyTableInputEnvelope>;
};

export type OrderCreateNestedOneWithoutOrderitemsInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderitemsInput>;
  create?: InputMaybe<OrderCreateWithoutOrderitemsInput>;
};

export type OrderCreateOrConnectWithoutOrderitemsInput = {
  create: OrderCreateWithoutOrderitemsInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutSessionInput = {
  create: OrderCreateWithoutSessionInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutTableInput = {
  create: OrderCreateWithoutTableInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateWithoutOrderitemsInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  price: Scalars['Decimal'];
  session: SessionCreateNestedOneWithoutOrdersInput;
  table: TableCreateNestedOneWithoutOrdersInput;
  tableNumber: Scalars['Int'];
};

export type OrderCreateWithoutSessionInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  orderitems?: InputMaybe<OrderItemCreateNestedManyWithoutOrderInput>;
  price: Scalars['Decimal'];
  table: TableCreateNestedOneWithoutOrdersInput;
  tableNumber: Scalars['Int'];
};

export type OrderCreateWithoutTableInput = {
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  orderitems?: InputMaybe<OrderItemCreateNestedManyWithoutOrderInput>;
  price: Scalars['Decimal'];
  session: SessionCreateNestedOneWithoutOrdersInput;
  tableNumber: Scalars['Int'];
};

export type OrderGroupBy = {
  __typename?: 'OrderGroupBy';
  _avg?: Maybe<OrderAvgAggregate>;
  _count?: Maybe<OrderCountAggregate>;
  _max?: Maybe<OrderMaxAggregate>;
  _min?: Maybe<OrderMinAggregate>;
  _sum?: Maybe<OrderSumAggregate>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  price: Scalars['Decimal'];
  sessionid: Scalars['Int'];
  tableNumber: Scalars['Int'];
  tableid: Scalars['Int'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  foodid: Scalars['Int'];
  id: Scalars['Int'];
  order: Order;
  orderid: Scalars['Int'];
  quantity: Scalars['Int'];
  title: Scalars['String'];
  totalPrice: Scalars['Decimal'];
};

export type OrderItemAvgAggregate = {
  __typename?: 'OrderItemAvgAggregate';
  foodid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  orderid?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Decimal']>;
};

export type OrderItemAvgOrderByAggregateInput = {
  foodid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderid?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCountAggregate = {
  __typename?: 'OrderItemCountAggregate';
  _all: Scalars['Int'];
  foodid: Scalars['Int'];
  id: Scalars['Int'];
  orderid: Scalars['Int'];
  quantity: Scalars['Int'];
  title: Scalars['Int'];
  totalPrice: Scalars['Int'];
};

export type OrderItemCountOrderByAggregateInput = {
  foodid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderid?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCreateInput = {
  foodid: Scalars['Int'];
  order: OrderCreateNestedOneWithoutOrderitemsInput;
  quantity: Scalars['Int'];
  title: Scalars['String'];
  totalPrice: Scalars['Decimal'];
};

export type OrderItemCreateManyInput = {
  foodid: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  orderid: Scalars['Int'];
  quantity: Scalars['Int'];
  title: Scalars['String'];
  totalPrice: Scalars['Decimal'];
};

export type OrderItemCreateManyOrderInput = {
  foodid: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  quantity: Scalars['Int'];
  title: Scalars['String'];
  totalPrice: Scalars['Decimal'];
};

export type OrderItemCreateManyOrderInputEnvelope = {
  data: Array<OrderItemCreateManyOrderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OrderItemCreateNestedManyWithoutOrderInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderItemCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderItemCreateManyOrderInputEnvelope>;
};

export type OrderItemCreateOrConnectWithoutOrderInput = {
  create: OrderItemCreateWithoutOrderInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemCreateWithoutOrderInput = {
  foodid: Scalars['Int'];
  quantity: Scalars['Int'];
  title: Scalars['String'];
  totalPrice: Scalars['Decimal'];
};

export type OrderItemGroupBy = {
  __typename?: 'OrderItemGroupBy';
  _avg?: Maybe<OrderItemAvgAggregate>;
  _count?: Maybe<OrderItemCountAggregate>;
  _max?: Maybe<OrderItemMaxAggregate>;
  _min?: Maybe<OrderItemMinAggregate>;
  _sum?: Maybe<OrderItemSumAggregate>;
  foodid: Scalars['Int'];
  id: Scalars['Int'];
  orderid: Scalars['Int'];
  quantity: Scalars['Int'];
  title: Scalars['String'];
  totalPrice: Scalars['Decimal'];
};

export type OrderItemListRelationFilter = {
  every?: InputMaybe<OrderItemWhereInput>;
  none?: InputMaybe<OrderItemWhereInput>;
  some?: InputMaybe<OrderItemWhereInput>;
};

export type OrderItemMaxAggregate = {
  __typename?: 'OrderItemMaxAggregate';
  foodid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  orderid?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Decimal']>;
};

export type OrderItemMaxOrderByAggregateInput = {
  foodid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderid?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemMinAggregate = {
  __typename?: 'OrderItemMinAggregate';
  foodid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  orderid?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Decimal']>;
};

export type OrderItemMinOrderByAggregateInput = {
  foodid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderid?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderItemOrderByWithAggregationInput = {
  _avg?: InputMaybe<OrderItemAvgOrderByAggregateInput>;
  _count?: InputMaybe<OrderItemCountOrderByAggregateInput>;
  _max?: InputMaybe<OrderItemMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrderItemMinOrderByAggregateInput>;
  _sum?: InputMaybe<OrderItemSumOrderByAggregateInput>;
  foodid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderid?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemOrderByWithRelationInput = {
  foodid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  orderid?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export enum OrderItemScalarFieldEnum {
  Foodid = 'foodid',
  Id = 'id',
  Orderid = 'orderid',
  Quantity = 'quantity',
  Title = 'title',
  TotalPrice = 'totalPrice'
}

export type OrderItemScalarWhereInput = {
  AND?: InputMaybe<Array<OrderItemScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderItemScalarWhereInput>>;
  foodid?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  orderid?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  totalPrice?: InputMaybe<DecimalFilter>;
};

export type OrderItemScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrderItemScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrderItemScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrderItemScalarWhereWithAggregatesInput>>;
  foodid?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  orderid?: InputMaybe<IntWithAggregatesFilter>;
  quantity?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  totalPrice?: InputMaybe<DecimalWithAggregatesFilter>;
};

export type OrderItemSumAggregate = {
  __typename?: 'OrderItemSumAggregate';
  foodid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  orderid?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  totalPrice?: Maybe<Scalars['Decimal']>;
};

export type OrderItemSumOrderByAggregateInput = {
  foodid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderid?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemUpdateInput = {
  foodid?: InputMaybe<IntFieldUpdateOperationsInput>;
  order?: InputMaybe<OrderUpdateOneRequiredWithoutOrderitemsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type OrderItemUpdateManyMutationInput = {
  foodid?: InputMaybe<IntFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
  data: OrderItemUpdateManyMutationInput;
  where: OrderItemScalarWhereInput;
};

export type OrderItemUpdateManyWithoutOrderInput = {
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCreateOrConnectWithoutOrderInput>>;
  create?: InputMaybe<Array<OrderItemCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderItemCreateManyOrderInputEnvelope>;
  delete?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderItemScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>>;
  updateMany?: InputMaybe<Array<OrderItemUpdateManyWithWhereWithoutOrderInput>>;
  upsert?: InputMaybe<Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>>;
};

export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
  data: OrderItemUpdateWithoutOrderInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpdateWithoutOrderInput = {
  foodid?: InputMaybe<IntFieldUpdateOperationsInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<DecimalFieldUpdateOperationsInput>;
};

export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
  create: OrderItemCreateWithoutOrderInput;
  update: OrderItemUpdateWithoutOrderInput;
  where: OrderItemWhereUniqueInput;
};

export type OrderItemWhereInput = {
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  foodid?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderid?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
  totalPrice?: InputMaybe<DecimalFilter>;
};

export type OrderItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Decimal']>;
  sessionid?: Maybe<Scalars['Int']>;
  tableNumber?: Maybe<Scalars['Int']>;
  tableid?: Maybe<Scalars['Int']>;
};

export type OrderMaxOrderByAggregateInput = {
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  tableid?: InputMaybe<SortOrder>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Decimal']>;
  sessionid?: Maybe<Scalars['Int']>;
  tableNumber?: Maybe<Scalars['Int']>;
  tableid?: Maybe<Scalars['Int']>;
};

export type OrderMinOrderByAggregateInput = {
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  tableid?: InputMaybe<SortOrder>;
};

export type OrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithAggregationInput = {
  _avg?: InputMaybe<OrderAvgOrderByAggregateInput>;
  _count?: InputMaybe<OrderCountOrderByAggregateInput>;
  _max?: InputMaybe<OrderMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrderMinOrderByAggregateInput>;
  _sum?: InputMaybe<OrderSumOrderByAggregateInput>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  tableid?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithRelationInput = {
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orderitems?: InputMaybe<OrderItemOrderByRelationAggregateInput>;
  price?: InputMaybe<SortOrder>;
  session?: InputMaybe<SessionOrderByWithRelationInput>;
  sessionid?: InputMaybe<SortOrder>;
  table?: InputMaybe<TableOrderByWithRelationInput>;
  tableNumber?: InputMaybe<SortOrder>;
  tableid?: InputMaybe<SortOrder>;
};

export type OrderRelationFilter = {
  is?: InputMaybe<OrderWhereInput>;
  isNot?: InputMaybe<OrderWhereInput>;
};

export enum OrderScalarFieldEnum {
  CompletedAt = 'completedAt',
  CreatedAt = 'createdAt',
  Id = 'id',
  Price = 'price',
  Sessionid = 'sessionid',
  TableNumber = 'tableNumber',
  Tableid = 'tableid'
}

export type OrderScalarWhereInput = {
  AND?: InputMaybe<Array<OrderScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderScalarWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  price?: InputMaybe<DecimalFilter>;
  sessionid?: InputMaybe<IntFilter>;
  tableNumber?: InputMaybe<IntFilter>;
  tableid?: InputMaybe<IntFilter>;
};

export type OrderScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  completedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  price?: InputMaybe<DecimalWithAggregatesFilter>;
  sessionid?: InputMaybe<IntWithAggregatesFilter>;
  tableNumber?: InputMaybe<IntWithAggregatesFilter>;
  tableid?: InputMaybe<IntWithAggregatesFilter>;
};

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Decimal']>;
  sessionid?: Maybe<Scalars['Int']>;
  tableNumber?: Maybe<Scalars['Int']>;
  tableid?: Maybe<Scalars['Int']>;
};

export type OrderSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  tableid?: InputMaybe<SortOrder>;
};

export type OrderUpdateInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  orderitems?: InputMaybe<OrderItemUpdateManyWithoutOrderInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  session?: InputMaybe<SessionUpdateOneRequiredWithoutOrdersInput>;
  table?: InputMaybe<TableUpdateOneRequiredWithoutOrdersInput>;
  tableNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type OrderUpdateManyMutationInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  tableNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type OrderUpdateManyWithWhereWithoutSessionInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithWhereWithoutTableInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithoutSessionInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutSessionInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutSessionInput>>;
  createMany?: InputMaybe<OrderCreateManySessionInputEnvelope>;
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutSessionInput>>;
  updateMany?: InputMaybe<Array<OrderUpdateManyWithWhereWithoutSessionInput>>;
  upsert?: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutSessionInput>>;
};

export type OrderUpdateManyWithoutTableInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutTableInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutTableInput>>;
  createMany?: InputMaybe<OrderCreateManyTableInputEnvelope>;
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutTableInput>>;
  updateMany?: InputMaybe<Array<OrderUpdateManyWithWhereWithoutTableInput>>;
  upsert?: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutTableInput>>;
};

export type OrderUpdateOneRequiredWithoutOrderitemsInput = {
  connect?: InputMaybe<OrderWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrderCreateOrConnectWithoutOrderitemsInput>;
  create?: InputMaybe<OrderCreateWithoutOrderitemsInput>;
  update?: InputMaybe<OrderUpdateWithoutOrderitemsInput>;
  upsert?: InputMaybe<OrderUpsertWithoutOrderitemsInput>;
};

export type OrderUpdateWithWhereUniqueWithoutSessionInput = {
  data: OrderUpdateWithoutSessionInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithWhereUniqueWithoutTableInput = {
  data: OrderUpdateWithoutTableInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithoutOrderitemsInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  session?: InputMaybe<SessionUpdateOneRequiredWithoutOrdersInput>;
  table?: InputMaybe<TableUpdateOneRequiredWithoutOrdersInput>;
  tableNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type OrderUpdateWithoutSessionInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  orderitems?: InputMaybe<OrderItemUpdateManyWithoutOrderInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  table?: InputMaybe<TableUpdateOneRequiredWithoutOrdersInput>;
  tableNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type OrderUpdateWithoutTableInput = {
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  orderitems?: InputMaybe<OrderItemUpdateManyWithoutOrderInput>;
  price?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  session?: InputMaybe<SessionUpdateOneRequiredWithoutOrdersInput>;
  tableNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type OrderUpsertWithWhereUniqueWithoutSessionInput = {
  create: OrderCreateWithoutSessionInput;
  update: OrderUpdateWithoutSessionInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithWhereUniqueWithoutTableInput = {
  create: OrderCreateWithoutTableInput;
  update: OrderUpdateWithoutTableInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithoutOrderitemsInput = {
  create: OrderCreateWithoutOrderitemsInput;
  update: OrderUpdateWithoutOrderitemsInput;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  orderitems?: InputMaybe<OrderItemListRelationFilter>;
  price?: InputMaybe<DecimalFilter>;
  session?: InputMaybe<SessionRelationFilter>;
  sessionid?: InputMaybe<IntFilter>;
  table?: InputMaybe<TableRelationFilter>;
  tableNumber?: InputMaybe<IntFilter>;
  tableid?: InputMaybe<IntFilter>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateFoodItem: AggregateFoodItem;
  aggregateImage: AggregateImage;
  aggregateMenu: AggregateMenu;
  aggregateOrder: AggregateOrder;
  aggregateOrderItem: AggregateOrderItem;
  aggregateSection: AggregateSection;
  aggregateService: AggregateService;
  aggregateSession: AggregateSession;
  aggregateTable: AggregateTable;
  findFirstFoodItem?: Maybe<FoodItem>;
  findFirstImage?: Maybe<Image>;
  findFirstMenu?: Maybe<Menu>;
  findFirstOrder?: Maybe<Order>;
  findFirstOrderItem?: Maybe<OrderItem>;
  findFirstSection?: Maybe<Section>;
  findFirstService?: Maybe<Service>;
  findFirstSession?: Maybe<Session>;
  findFirstTable?: Maybe<Table>;
  foodItem?: Maybe<FoodItem>;
  foodItems: Array<FoodItem>;
  groupByFoodItem: Array<FoodItemGroupBy>;
  groupByImage: Array<ImageGroupBy>;
  groupByMenu: Array<MenuGroupBy>;
  groupByOrder: Array<OrderGroupBy>;
  groupByOrderItem: Array<OrderItemGroupBy>;
  groupBySection: Array<SectionGroupBy>;
  groupByService: Array<ServiceGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByTable: Array<TableGroupBy>;
  image?: Maybe<Image>;
  images: Array<Image>;
  menu?: Maybe<Menu>;
  menus: Array<Menu>;
  order?: Maybe<Order>;
  orderItem?: Maybe<OrderItem>;
  orderItems: Array<OrderItem>;
  orders: Array<Order>;
  section?: Maybe<Section>;
  sections: Array<Section>;
  service?: Maybe<Service>;
  services: Array<Service>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  table?: Maybe<Table>;
  tables: Array<Table>;
  validateJWT: Scalars['Boolean'];
  validateTableToken: Result;
};


export type QueryAggregateFoodItemArgs = {
  cursor?: InputMaybe<FoodItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FoodItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodItemWhereInput>;
};


export type QueryAggregateImageArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryAggregateMenuArgs = {
  cursor?: InputMaybe<MenuWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MenuOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuWhereInput>;
};


export type QueryAggregateOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryAggregateOrderItemArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryAggregateSectionArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryAggregateServiceArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ServiceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryAggregateTableArgs = {
  cursor?: InputMaybe<TableWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TableOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TableWhereInput>;
};


export type QueryFindFirstFoodItemArgs = {
  cursor?: InputMaybe<FoodItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodItemWhereInput>;
};


export type QueryFindFirstImageArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ImageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryFindFirstMenuArgs = {
  cursor?: InputMaybe<MenuWhereUniqueInput>;
  distinct?: InputMaybe<Array<MenuScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MenuOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuWhereInput>;
};


export type QueryFindFirstOrderArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryFindFirstOrderItemArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryFindFirstSectionArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryFindFirstServiceArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ServiceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ServiceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstTableArgs = {
  cursor?: InputMaybe<TableWhereUniqueInput>;
  distinct?: InputMaybe<Array<TableScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TableOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TableWhereInput>;
};


export type QueryFoodItemArgs = {
  where: FoodItemWhereUniqueInput;
};


export type QueryFoodItemsArgs = {
  cursor?: InputMaybe<FoodItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodItemWhereInput>;
};


export type QueryGroupByFoodItemArgs = {
  by: Array<FoodItemScalarFieldEnum>;
  having?: InputMaybe<FoodItemScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FoodItemOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodItemWhereInput>;
};


export type QueryGroupByImageArgs = {
  by: Array<ImageScalarFieldEnum>;
  having?: InputMaybe<ImageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ImageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryGroupByMenuArgs = {
  by: Array<MenuScalarFieldEnum>;
  having?: InputMaybe<MenuScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MenuOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuWhereInput>;
};


export type QueryGroupByOrderArgs = {
  by: Array<OrderScalarFieldEnum>;
  having?: InputMaybe<OrderScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrderOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QueryGroupByOrderItemArgs = {
  by: Array<OrderItemScalarFieldEnum>;
  having?: InputMaybe<OrderItemScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryGroupBySectionArgs = {
  by: Array<SectionScalarFieldEnum>;
  having?: InputMaybe<SectionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SectionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryGroupByServiceArgs = {
  by: Array<ServiceScalarFieldEnum>;
  having?: InputMaybe<ServiceScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ServiceOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryGroupByTableArgs = {
  by: Array<TableScalarFieldEnum>;
  having?: InputMaybe<TableScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TableOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TableWhereInput>;
};


export type QueryImageArgs = {
  where: ImageWhereUniqueInput;
};


export type QueryImagesArgs = {
  cursor?: InputMaybe<ImageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ImageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ImageWhereInput>;
};


export type QueryMenuArgs = {
  where: MenuWhereUniqueInput;
};


export type QueryMenusArgs = {
  cursor?: InputMaybe<MenuWhereUniqueInput>;
  distinct?: InputMaybe<Array<MenuScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MenuOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuWhereInput>;
};


export type QueryOrderArgs = {
  where: OrderWhereUniqueInput;
};


export type QueryOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};


export type QueryOrderItemsArgs = {
  cursor?: InputMaybe<OrderItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderItemWhereInput>;
};


export type QueryOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type QuerySectionArgs = {
  where: SectionWhereUniqueInput;
};


export type QuerySectionsArgs = {
  cursor?: InputMaybe<SectionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SectionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SectionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SectionWhereInput>;
};


export type QueryServiceArgs = {
  where: ServiceWhereUniqueInput;
};


export type QueryServicesArgs = {
  cursor?: InputMaybe<ServiceWhereUniqueInput>;
  distinct?: InputMaybe<Array<ServiceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ServiceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryTableArgs = {
  where: TableWhereUniqueInput;
};


export type QueryTablesArgs = {
  cursor?: InputMaybe<TableWhereUniqueInput>;
  distinct?: InputMaybe<Array<TableScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TableOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TableWhereInput>;
};


export type QueryValidateTableTokenArgs = {
  token: Scalars['String'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Result = {
  __typename?: 'Result';
  currentMenu: Menu;
  customerTable: Table;
};

export type Section = {
  __typename?: 'Section';
  _count?: Maybe<SectionCount>;
  code: Scalars['Int'];
  fooditems: Array<FoodItem>;
  id: Scalars['Int'];
  image?: Maybe<Image>;
  imageid?: Maybe<Scalars['Int']>;
  menu: Menu;
  menuid: Scalars['Int'];
  title: Scalars['String'];
};


export type SectionFooditemsArgs = {
  cursor?: InputMaybe<FoodItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<FoodItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FoodItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FoodItemWhereInput>;
};

export type SectionAvgAggregate = {
  __typename?: 'SectionAvgAggregate';
  code?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  imageid?: Maybe<Scalars['Float']>;
  menuid?: Maybe<Scalars['Float']>;
};

export type SectionAvgOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
};

export type SectionCount = {
  __typename?: 'SectionCount';
  fooditems: Scalars['Int'];
};

export type SectionCountAggregate = {
  __typename?: 'SectionCountAggregate';
  _all: Scalars['Int'];
  code: Scalars['Int'];
  id: Scalars['Int'];
  imageid: Scalars['Int'];
  menuid: Scalars['Int'];
  title: Scalars['Int'];
};

export type SectionCountOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SectionCreateInput = {
  code?: InputMaybe<Scalars['Int']>;
  fooditems?: InputMaybe<FoodItemCreateNestedManyWithoutSectionsInput>;
  image?: InputMaybe<ImageCreateNestedOneWithoutSectionImageInput>;
  menu: MenuCreateNestedOneWithoutSectionsInput;
  title: Scalars['String'];
};

export type SectionCreateManyInput = {
  code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  imageid?: InputMaybe<Scalars['Int']>;
  menuid: Scalars['Int'];
  title: Scalars['String'];
};

export type SectionCreateManyMenuInput = {
  code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  imageid?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type SectionCreateManyMenuInputEnvelope = {
  data: Array<SectionCreateManyMenuInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SectionCreateNestedManyWithoutFooditemsInput = {
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SectionCreateOrConnectWithoutFooditemsInput>>;
  create?: InputMaybe<Array<SectionCreateWithoutFooditemsInput>>;
};

export type SectionCreateNestedManyWithoutMenuInput = {
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SectionCreateOrConnectWithoutMenuInput>>;
  create?: InputMaybe<Array<SectionCreateWithoutMenuInput>>;
  createMany?: InputMaybe<SectionCreateManyMenuInputEnvelope>;
};

export type SectionCreateNestedOneWithoutImageInput = {
  connect?: InputMaybe<SectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SectionCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<SectionCreateWithoutImageInput>;
};

export type SectionCreateOrConnectWithoutFooditemsInput = {
  create: SectionCreateWithoutFooditemsInput;
  where: SectionWhereUniqueInput;
};

export type SectionCreateOrConnectWithoutImageInput = {
  create: SectionCreateWithoutImageInput;
  where: SectionWhereUniqueInput;
};

export type SectionCreateOrConnectWithoutMenuInput = {
  create: SectionCreateWithoutMenuInput;
  where: SectionWhereUniqueInput;
};

export type SectionCreateWithoutFooditemsInput = {
  code?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<ImageCreateNestedOneWithoutSectionImageInput>;
  menu: MenuCreateNestedOneWithoutSectionsInput;
  title: Scalars['String'];
};

export type SectionCreateWithoutImageInput = {
  code?: InputMaybe<Scalars['Int']>;
  fooditems?: InputMaybe<FoodItemCreateNestedManyWithoutSectionsInput>;
  menu: MenuCreateNestedOneWithoutSectionsInput;
  title: Scalars['String'];
};

export type SectionCreateWithoutMenuInput = {
  code?: InputMaybe<Scalars['Int']>;
  fooditems?: InputMaybe<FoodItemCreateNestedManyWithoutSectionsInput>;
  image?: InputMaybe<ImageCreateNestedOneWithoutSectionImageInput>;
  title: Scalars['String'];
};

export type SectionGroupBy = {
  __typename?: 'SectionGroupBy';
  _avg?: Maybe<SectionAvgAggregate>;
  _count?: Maybe<SectionCountAggregate>;
  _max?: Maybe<SectionMaxAggregate>;
  _min?: Maybe<SectionMinAggregate>;
  _sum?: Maybe<SectionSumAggregate>;
  code: Scalars['Int'];
  id: Scalars['Int'];
  imageid?: Maybe<Scalars['Int']>;
  menuid: Scalars['Int'];
  title: Scalars['String'];
};

export type SectionListRelationFilter = {
  every?: InputMaybe<SectionWhereInput>;
  none?: InputMaybe<SectionWhereInput>;
  some?: InputMaybe<SectionWhereInput>;
};

export type SectionMaxAggregate = {
  __typename?: 'SectionMaxAggregate';
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageid?: Maybe<Scalars['Int']>;
  menuid?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type SectionMaxOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SectionMinAggregate = {
  __typename?: 'SectionMinAggregate';
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageid?: Maybe<Scalars['Int']>;
  menuid?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type SectionMinOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SectionOrderByWithAggregationInput = {
  _avg?: InputMaybe<SectionAvgOrderByAggregateInput>;
  _count?: InputMaybe<SectionCountOrderByAggregateInput>;
  _max?: InputMaybe<SectionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SectionMinOrderByAggregateInput>;
  _sum?: InputMaybe<SectionSumOrderByAggregateInput>;
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SectionOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  fooditems?: InputMaybe<FoodItemOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageOrderByWithRelationInput>;
  imageid?: InputMaybe<SortOrder>;
  menu?: InputMaybe<MenuOrderByWithRelationInput>;
  menuid?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SectionRelationFilter = {
  is?: InputMaybe<SectionWhereInput>;
  isNot?: InputMaybe<SectionWhereInput>;
};

export enum SectionScalarFieldEnum {
  Code = 'code',
  Id = 'id',
  Imageid = 'imageid',
  Menuid = 'menuid',
  Title = 'title'
}

export type SectionScalarWhereInput = {
  AND?: InputMaybe<Array<SectionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SectionScalarWhereInput>>;
  OR?: InputMaybe<Array<SectionScalarWhereInput>>;
  code?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  imageid?: InputMaybe<IntNullableFilter>;
  menuid?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SectionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SectionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SectionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SectionScalarWhereWithAggregatesInput>>;
  code?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  imageid?: InputMaybe<IntNullableWithAggregatesFilter>;
  menuid?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type SectionSumAggregate = {
  __typename?: 'SectionSumAggregate';
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  imageid?: Maybe<Scalars['Int']>;
  menuid?: Maybe<Scalars['Int']>;
};

export type SectionSumOrderByAggregateInput = {
  code?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageid?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
};

export type SectionUpdateInput = {
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  fooditems?: InputMaybe<FoodItemUpdateManyWithoutSectionsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutSectionImageInput>;
  menu?: InputMaybe<MenuUpdateOneRequiredWithoutSectionsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionUpdateManyMutationInput = {
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionUpdateManyWithWhereWithoutFooditemsInput = {
  data: SectionUpdateManyMutationInput;
  where: SectionScalarWhereInput;
};

export type SectionUpdateManyWithWhereWithoutMenuInput = {
  data: SectionUpdateManyMutationInput;
  where: SectionScalarWhereInput;
};

export type SectionUpdateManyWithoutFooditemsInput = {
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SectionCreateOrConnectWithoutFooditemsInput>>;
  create?: InputMaybe<Array<SectionCreateWithoutFooditemsInput>>;
  delete?: InputMaybe<Array<SectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  set?: InputMaybe<Array<SectionWhereUniqueInput>>;
  update?: InputMaybe<Array<SectionUpdateWithWhereUniqueWithoutFooditemsInput>>;
  updateMany?: InputMaybe<Array<SectionUpdateManyWithWhereWithoutFooditemsInput>>;
  upsert?: InputMaybe<Array<SectionUpsertWithWhereUniqueWithoutFooditemsInput>>;
};

export type SectionUpdateManyWithoutMenuInput = {
  connect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SectionCreateOrConnectWithoutMenuInput>>;
  create?: InputMaybe<Array<SectionCreateWithoutMenuInput>>;
  createMany?: InputMaybe<SectionCreateManyMenuInputEnvelope>;
  delete?: InputMaybe<Array<SectionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SectionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SectionWhereUniqueInput>>;
  set?: InputMaybe<Array<SectionWhereUniqueInput>>;
  update?: InputMaybe<Array<SectionUpdateWithWhereUniqueWithoutMenuInput>>;
  updateMany?: InputMaybe<Array<SectionUpdateManyWithWhereWithoutMenuInput>>;
  upsert?: InputMaybe<Array<SectionUpsertWithWhereUniqueWithoutMenuInput>>;
};

export type SectionUpdateOneWithoutImageInput = {
  connect?: InputMaybe<SectionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SectionCreateOrConnectWithoutImageInput>;
  create?: InputMaybe<SectionCreateWithoutImageInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SectionUpdateWithoutImageInput>;
  upsert?: InputMaybe<SectionUpsertWithoutImageInput>;
};

export type SectionUpdateWithWhereUniqueWithoutFooditemsInput = {
  data: SectionUpdateWithoutFooditemsInput;
  where: SectionWhereUniqueInput;
};

export type SectionUpdateWithWhereUniqueWithoutMenuInput = {
  data: SectionUpdateWithoutMenuInput;
  where: SectionWhereUniqueInput;
};

export type SectionUpdateWithoutFooditemsInput = {
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutSectionImageInput>;
  menu?: InputMaybe<MenuUpdateOneRequiredWithoutSectionsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionUpdateWithoutImageInput = {
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  fooditems?: InputMaybe<FoodItemUpdateManyWithoutSectionsInput>;
  menu?: InputMaybe<MenuUpdateOneRequiredWithoutSectionsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionUpdateWithoutMenuInput = {
  code?: InputMaybe<IntFieldUpdateOperationsInput>;
  fooditems?: InputMaybe<FoodItemUpdateManyWithoutSectionsInput>;
  image?: InputMaybe<ImageUpdateOneWithoutSectionImageInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SectionUpsertWithWhereUniqueWithoutFooditemsInput = {
  create: SectionCreateWithoutFooditemsInput;
  update: SectionUpdateWithoutFooditemsInput;
  where: SectionWhereUniqueInput;
};

export type SectionUpsertWithWhereUniqueWithoutMenuInput = {
  create: SectionCreateWithoutMenuInput;
  update: SectionUpdateWithoutMenuInput;
  where: SectionWhereUniqueInput;
};

export type SectionUpsertWithoutImageInput = {
  create: SectionCreateWithoutImageInput;
  update: SectionUpdateWithoutImageInput;
};

export type SectionWhereInput = {
  AND?: InputMaybe<Array<SectionWhereInput>>;
  NOT?: InputMaybe<Array<SectionWhereInput>>;
  OR?: InputMaybe<Array<SectionWhereInput>>;
  code?: InputMaybe<IntFilter>;
  fooditems?: InputMaybe<FoodItemListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<ImageRelationFilter>;
  imageid?: InputMaybe<IntNullableFilter>;
  menu?: InputMaybe<MenuRelationFilter>;
  menuid?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  imageid?: InputMaybe<Scalars['Int']>;
};

export type Service = {
  __typename?: 'Service';
  current?: Maybe<Session>;
  currentid?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type ServiceAvgAggregate = {
  __typename?: 'ServiceAvgAggregate';
  currentid?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type ServiceAvgOrderByAggregateInput = {
  currentid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ServiceCountAggregate = {
  __typename?: 'ServiceCountAggregate';
  _all: Scalars['Int'];
  currentid: Scalars['Int'];
  dummy: Scalars['Int'];
  id: Scalars['Int'];
};

export type ServiceCountOrderByAggregateInput = {
  currentid?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ServiceCreateInput = {
  current?: InputMaybe<SessionCreateNestedOneWithoutServiceInput>;
  dummy?: InputMaybe<Scalars['String']>;
};

export type ServiceCreateManyInput = {
  currentid?: InputMaybe<Scalars['Int']>;
  dummy?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type ServiceCreateNestedOneWithoutCurrentInput = {
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ServiceCreateOrConnectWithoutCurrentInput>;
  create?: InputMaybe<ServiceCreateWithoutCurrentInput>;
};

export type ServiceCreateOrConnectWithoutCurrentInput = {
  create: ServiceCreateWithoutCurrentInput;
  where: ServiceWhereUniqueInput;
};

export type ServiceCreateWithoutCurrentInput = {
  dummy?: InputMaybe<Scalars['String']>;
};

export type ServiceGroupBy = {
  __typename?: 'ServiceGroupBy';
  _avg?: Maybe<ServiceAvgAggregate>;
  _count?: Maybe<ServiceCountAggregate>;
  _max?: Maybe<ServiceMaxAggregate>;
  _min?: Maybe<ServiceMinAggregate>;
  _sum?: Maybe<ServiceSumAggregate>;
  currentid?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type ServiceMaxAggregate = {
  __typename?: 'ServiceMaxAggregate';
  currentid?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type ServiceMaxOrderByAggregateInput = {
  currentid?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ServiceMinAggregate = {
  __typename?: 'ServiceMinAggregate';
  currentid?: Maybe<Scalars['Int']>;
  dummy?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type ServiceMinOrderByAggregateInput = {
  currentid?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ServiceOrderByWithAggregationInput = {
  _avg?: InputMaybe<ServiceAvgOrderByAggregateInput>;
  _count?: InputMaybe<ServiceCountOrderByAggregateInput>;
  _max?: InputMaybe<ServiceMaxOrderByAggregateInput>;
  _min?: InputMaybe<ServiceMinOrderByAggregateInput>;
  _sum?: InputMaybe<ServiceSumOrderByAggregateInput>;
  currentid?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ServiceOrderByWithRelationInput = {
  current?: InputMaybe<SessionOrderByWithRelationInput>;
  currentid?: InputMaybe<SortOrder>;
  dummy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ServiceRelationFilter = {
  is?: InputMaybe<ServiceWhereInput>;
  isNot?: InputMaybe<ServiceWhereInput>;
};

export enum ServiceScalarFieldEnum {
  Currentid = 'currentid',
  Dummy = 'dummy',
  Id = 'id'
}

export type ServiceScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ServiceScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ServiceScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ServiceScalarWhereWithAggregatesInput>>;
  currentid?: InputMaybe<IntNullableWithAggregatesFilter>;
  dummy?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
};

export type ServiceSumAggregate = {
  __typename?: 'ServiceSumAggregate';
  currentid?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type ServiceSumOrderByAggregateInput = {
  currentid?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type ServiceUpdateInput = {
  current?: InputMaybe<SessionUpdateOneWithoutServiceInput>;
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ServiceUpdateManyMutationInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ServiceUpdateOneWithoutCurrentInput = {
  connect?: InputMaybe<ServiceWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ServiceCreateOrConnectWithoutCurrentInput>;
  create?: InputMaybe<ServiceCreateWithoutCurrentInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<ServiceUpdateWithoutCurrentInput>;
  upsert?: InputMaybe<ServiceUpsertWithoutCurrentInput>;
};

export type ServiceUpdateWithoutCurrentInput = {
  dummy?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ServiceUpsertWithoutCurrentInput = {
  create: ServiceCreateWithoutCurrentInput;
  update: ServiceUpdateWithoutCurrentInput;
};

export type ServiceWhereInput = {
  AND?: InputMaybe<Array<ServiceWhereInput>>;
  NOT?: InputMaybe<Array<ServiceWhereInput>>;
  OR?: InputMaybe<Array<ServiceWhereInput>>;
  current?: InputMaybe<SessionRelationFilter>;
  currentid?: InputMaybe<IntNullableFilter>;
  dummy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
};

export type ServiceWhereUniqueInput = {
  currentid?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type Session = {
  __typename?: 'Session';
  _count?: Maybe<SessionCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  lastOrder: Scalars['DateTime'];
  menu?: Maybe<Menu>;
  menuid?: Maybe<Scalars['Int']>;
  orders: Array<Order>;
  revenue: Scalars['Int'];
  service?: Maybe<Service>;
  table: Scalars['Int'];
  tables: Array<Table>;
};


export type SessionOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};


export type SessionTablesArgs = {
  cursor?: InputMaybe<TableWhereUniqueInput>;
  distinct?: InputMaybe<Array<TableScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TableOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TableWhereInput>;
};

export type SessionAvgAggregate = {
  __typename?: 'SessionAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  menuid?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  table?: Maybe<Scalars['Float']>;
};

export type SessionAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  revenue?: InputMaybe<SortOrder>;
  table?: InputMaybe<SortOrder>;
};

export type SessionCount = {
  __typename?: 'SessionCount';
  orders: Scalars['Int'];
  tables: Scalars['Int'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  lastOrder: Scalars['Int'];
  menuid: Scalars['Int'];
  revenue: Scalars['Int'];
  table: Scalars['Int'];
};

export type SessionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastOrder?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  revenue?: InputMaybe<SortOrder>;
  table?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastOrder: Scalars['DateTime'];
  menu?: InputMaybe<MenuCreateNestedOneWithoutSessionsInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutSessionInput>;
  revenue?: InputMaybe<Scalars['Int']>;
  service?: InputMaybe<ServiceCreateNestedOneWithoutCurrentInput>;
  table: Scalars['Int'];
  tables?: InputMaybe<TableCreateNestedManyWithoutSessionInput>;
};

export type SessionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  lastOrder: Scalars['DateTime'];
  menuid?: InputMaybe<Scalars['Int']>;
  revenue?: InputMaybe<Scalars['Int']>;
  table: Scalars['Int'];
};

export type SessionCreateManyMenuInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  lastOrder: Scalars['DateTime'];
  revenue?: InputMaybe<Scalars['Int']>;
  table: Scalars['Int'];
};

export type SessionCreateManyMenuInputEnvelope = {
  data: Array<SessionCreateManyMenuInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SessionCreateNestedManyWithoutMenuInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutMenuInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutMenuInput>>;
  createMany?: InputMaybe<SessionCreateManyMenuInputEnvelope>;
};

export type SessionCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<SessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SessionCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<SessionCreateWithoutOrdersInput>;
};

export type SessionCreateNestedOneWithoutServiceInput = {
  connect?: InputMaybe<SessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SessionCreateOrConnectWithoutServiceInput>;
  create?: InputMaybe<SessionCreateWithoutServiceInput>;
};

export type SessionCreateNestedOneWithoutTablesInput = {
  connect?: InputMaybe<SessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SessionCreateOrConnectWithoutTablesInput>;
  create?: InputMaybe<SessionCreateWithoutTablesInput>;
};

export type SessionCreateOrConnectWithoutMenuInput = {
  create: SessionCreateWithoutMenuInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateOrConnectWithoutOrdersInput = {
  create: SessionCreateWithoutOrdersInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateOrConnectWithoutServiceInput = {
  create: SessionCreateWithoutServiceInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateOrConnectWithoutTablesInput = {
  create: SessionCreateWithoutTablesInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutMenuInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastOrder: Scalars['DateTime'];
  orders?: InputMaybe<OrderCreateNestedManyWithoutSessionInput>;
  revenue?: InputMaybe<Scalars['Int']>;
  service?: InputMaybe<ServiceCreateNestedOneWithoutCurrentInput>;
  table: Scalars['Int'];
  tables?: InputMaybe<TableCreateNestedManyWithoutSessionInput>;
};

export type SessionCreateWithoutOrdersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastOrder: Scalars['DateTime'];
  menu?: InputMaybe<MenuCreateNestedOneWithoutSessionsInput>;
  revenue?: InputMaybe<Scalars['Int']>;
  service?: InputMaybe<ServiceCreateNestedOneWithoutCurrentInput>;
  table: Scalars['Int'];
  tables?: InputMaybe<TableCreateNestedManyWithoutSessionInput>;
};

export type SessionCreateWithoutServiceInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastOrder: Scalars['DateTime'];
  menu?: InputMaybe<MenuCreateNestedOneWithoutSessionsInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutSessionInput>;
  revenue?: InputMaybe<Scalars['Int']>;
  table: Scalars['Int'];
  tables?: InputMaybe<TableCreateNestedManyWithoutSessionInput>;
};

export type SessionCreateWithoutTablesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lastOrder: Scalars['DateTime'];
  menu?: InputMaybe<MenuCreateNestedOneWithoutSessionsInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutSessionInput>;
  revenue?: InputMaybe<Scalars['Int']>;
  service?: InputMaybe<ServiceCreateNestedOneWithoutCurrentInput>;
  table: Scalars['Int'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _avg?: Maybe<SessionAvgAggregate>;
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  _sum?: Maybe<SessionSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  lastOrder: Scalars['DateTime'];
  menuid?: Maybe<Scalars['Int']>;
  revenue: Scalars['Int'];
  table: Scalars['Int'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastOrder?: Maybe<Scalars['DateTime']>;
  menuid?: Maybe<Scalars['Int']>;
  revenue?: Maybe<Scalars['Int']>;
  table?: Maybe<Scalars['Int']>;
};

export type SessionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastOrder?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  revenue?: InputMaybe<SortOrder>;
  table?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lastOrder?: Maybe<Scalars['DateTime']>;
  menuid?: Maybe<Scalars['Int']>;
  revenue?: Maybe<Scalars['Int']>;
  table?: Maybe<Scalars['Int']>;
};

export type SessionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastOrder?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  revenue?: InputMaybe<SortOrder>;
  table?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithAggregationInput = {
  _avg?: InputMaybe<SessionAvgOrderByAggregateInput>;
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  _sum?: InputMaybe<SessionSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastOrder?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  revenue?: InputMaybe<SortOrder>;
  table?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastOrder?: InputMaybe<SortOrder>;
  menu?: InputMaybe<MenuOrderByWithRelationInput>;
  menuid?: InputMaybe<SortOrder>;
  orders?: InputMaybe<OrderOrderByRelationAggregateInput>;
  revenue?: InputMaybe<SortOrder>;
  service?: InputMaybe<ServiceOrderByWithRelationInput>;
  table?: InputMaybe<SortOrder>;
  tables?: InputMaybe<TableOrderByRelationAggregateInput>;
};

export type SessionRelationFilter = {
  is?: InputMaybe<SessionWhereInput>;
  isNot?: InputMaybe<SessionWhereInput>;
};

export enum SessionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  LastOrder = 'lastOrder',
  Menuid = 'menuid',
  Revenue = 'revenue',
  Table = 'table'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lastOrder?: InputMaybe<DateTimeFilter>;
  menuid?: InputMaybe<IntNullableFilter>;
  revenue?: InputMaybe<IntFilter>;
  table?: InputMaybe<IntFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  lastOrder?: InputMaybe<DateTimeWithAggregatesFilter>;
  menuid?: InputMaybe<IntNullableWithAggregatesFilter>;
  revenue?: InputMaybe<IntWithAggregatesFilter>;
  table?: InputMaybe<IntWithAggregatesFilter>;
};

export type SessionSumAggregate = {
  __typename?: 'SessionSumAggregate';
  id?: Maybe<Scalars['Int']>;
  menuid?: Maybe<Scalars['Int']>;
  revenue?: Maybe<Scalars['Int']>;
  table?: Maybe<Scalars['Int']>;
};

export type SessionSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  menuid?: InputMaybe<SortOrder>;
  revenue?: InputMaybe<SortOrder>;
  table?: InputMaybe<SortOrder>;
};

export type SessionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lastOrder?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  menu?: InputMaybe<MenuUpdateOneWithoutSessionsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutSessionInput>;
  revenue?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneWithoutCurrentInput>;
  table?: InputMaybe<IntFieldUpdateOperationsInput>;
  tables?: InputMaybe<TableUpdateManyWithoutSessionInput>;
};

export type SessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lastOrder?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  revenue?: InputMaybe<IntFieldUpdateOperationsInput>;
  table?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutMenuInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutMenuInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutMenuInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutMenuInput>>;
  createMany?: InputMaybe<SessionCreateManyMenuInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutMenuInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutMenuInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutMenuInput>>;
};

export type SessionUpdateOneRequiredWithoutOrdersInput = {
  connect?: InputMaybe<SessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SessionCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<SessionCreateWithoutOrdersInput>;
  update?: InputMaybe<SessionUpdateWithoutOrdersInput>;
  upsert?: InputMaybe<SessionUpsertWithoutOrdersInput>;
};

export type SessionUpdateOneWithoutServiceInput = {
  connect?: InputMaybe<SessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SessionCreateOrConnectWithoutServiceInput>;
  create?: InputMaybe<SessionCreateWithoutServiceInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SessionUpdateWithoutServiceInput>;
  upsert?: InputMaybe<SessionUpsertWithoutServiceInput>;
};

export type SessionUpdateOneWithoutTablesInput = {
  connect?: InputMaybe<SessionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SessionCreateOrConnectWithoutTablesInput>;
  create?: InputMaybe<SessionCreateWithoutTablesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SessionUpdateWithoutTablesInput>;
  upsert?: InputMaybe<SessionUpsertWithoutTablesInput>;
};

export type SessionUpdateWithWhereUniqueWithoutMenuInput = {
  data: SessionUpdateWithoutMenuInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutMenuInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lastOrder?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutSessionInput>;
  revenue?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneWithoutCurrentInput>;
  table?: InputMaybe<IntFieldUpdateOperationsInput>;
  tables?: InputMaybe<TableUpdateManyWithoutSessionInput>;
};

export type SessionUpdateWithoutOrdersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lastOrder?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  menu?: InputMaybe<MenuUpdateOneWithoutSessionsInput>;
  revenue?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneWithoutCurrentInput>;
  table?: InputMaybe<IntFieldUpdateOperationsInput>;
  tables?: InputMaybe<TableUpdateManyWithoutSessionInput>;
};

export type SessionUpdateWithoutServiceInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lastOrder?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  menu?: InputMaybe<MenuUpdateOneWithoutSessionsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutSessionInput>;
  revenue?: InputMaybe<IntFieldUpdateOperationsInput>;
  table?: InputMaybe<IntFieldUpdateOperationsInput>;
  tables?: InputMaybe<TableUpdateManyWithoutSessionInput>;
};

export type SessionUpdateWithoutTablesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lastOrder?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  menu?: InputMaybe<MenuUpdateOneWithoutSessionsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutSessionInput>;
  revenue?: InputMaybe<IntFieldUpdateOperationsInput>;
  service?: InputMaybe<ServiceUpdateOneWithoutCurrentInput>;
  table?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutMenuInput = {
  create: SessionCreateWithoutMenuInput;
  update: SessionUpdateWithoutMenuInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpsertWithoutOrdersInput = {
  create: SessionCreateWithoutOrdersInput;
  update: SessionUpdateWithoutOrdersInput;
};

export type SessionUpsertWithoutServiceInput = {
  create: SessionCreateWithoutServiceInput;
  update: SessionUpdateWithoutServiceInput;
};

export type SessionUpsertWithoutTablesInput = {
  create: SessionCreateWithoutTablesInput;
  update: SessionUpdateWithoutTablesInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lastOrder?: InputMaybe<DateTimeFilter>;
  menu?: InputMaybe<MenuRelationFilter>;
  menuid?: InputMaybe<IntNullableFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  revenue?: InputMaybe<IntFilter>;
  service?: InputMaybe<ServiceRelationFilter>;
  table?: InputMaybe<IntFilter>;
  tables?: InputMaybe<TableListRelationFilter>;
};

export type SessionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  completeOrderNotification: Scalars['Int'];
  newOrderNotification: Service;
};

export type Table = {
  __typename?: 'Table';
  _count?: Maybe<TableCount>;
  active: Scalars['Boolean'];
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  orders: Array<Order>;
  session?: Maybe<Session>;
  sessionid?: Maybe<Scalars['Int']>;
  tableNumber: Scalars['Int'];
  token: Scalars['String'];
};


export type TableOrdersArgs = {
  cursor?: InputMaybe<OrderWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrderWhereInput>;
};

export type TableAvgAggregate = {
  __typename?: 'TableAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  sessionid?: Maybe<Scalars['Float']>;
  tableNumber?: Maybe<Scalars['Float']>;
};

export type TableAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
};

export type TableCount = {
  __typename?: 'TableCount';
  orders: Scalars['Int'];
};

export type TableCountAggregate = {
  __typename?: 'TableCountAggregate';
  _all: Scalars['Int'];
  active: Scalars['Int'];
  completedAt: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  sessionid: Scalars['Int'];
  tableNumber: Scalars['Int'];
  token: Scalars['Int'];
};

export type TableCountOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type TableCreateInput = {
  active: Scalars['Boolean'];
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutTableInput>;
  session?: InputMaybe<SessionCreateNestedOneWithoutTablesInput>;
  tableNumber: Scalars['Int'];
  token?: InputMaybe<Scalars['String']>;
};

export type TableCreateManyInput = {
  active: Scalars['Boolean'];
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  sessionid?: InputMaybe<Scalars['Int']>;
  tableNumber: Scalars['Int'];
  token?: InputMaybe<Scalars['String']>;
};

export type TableCreateManySessionInput = {
  active: Scalars['Boolean'];
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  tableNumber: Scalars['Int'];
  token?: InputMaybe<Scalars['String']>;
};

export type TableCreateManySessionInputEnvelope = {
  data: Array<TableCreateManySessionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TableCreateNestedManyWithoutSessionInput = {
  connect?: InputMaybe<Array<TableWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TableCreateOrConnectWithoutSessionInput>>;
  create?: InputMaybe<Array<TableCreateWithoutSessionInput>>;
  createMany?: InputMaybe<TableCreateManySessionInputEnvelope>;
};

export type TableCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<TableWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TableCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<TableCreateWithoutOrdersInput>;
};

export type TableCreateOrConnectWithoutOrdersInput = {
  create: TableCreateWithoutOrdersInput;
  where: TableWhereUniqueInput;
};

export type TableCreateOrConnectWithoutSessionInput = {
  create: TableCreateWithoutSessionInput;
  where: TableWhereUniqueInput;
};

export type TableCreateWithoutOrdersInput = {
  active: Scalars['Boolean'];
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  session?: InputMaybe<SessionCreateNestedOneWithoutTablesInput>;
  tableNumber: Scalars['Int'];
  token?: InputMaybe<Scalars['String']>;
};

export type TableCreateWithoutSessionInput = {
  active: Scalars['Boolean'];
  completedAt?: InputMaybe<Scalars['DateTime']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutTableInput>;
  tableNumber: Scalars['Int'];
  token?: InputMaybe<Scalars['String']>;
};

export type TableGroupBy = {
  __typename?: 'TableGroupBy';
  _avg?: Maybe<TableAvgAggregate>;
  _count?: Maybe<TableCountAggregate>;
  _max?: Maybe<TableMaxAggregate>;
  _min?: Maybe<TableMinAggregate>;
  _sum?: Maybe<TableSumAggregate>;
  active: Scalars['Boolean'];
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  sessionid?: Maybe<Scalars['Int']>;
  tableNumber: Scalars['Int'];
  token: Scalars['String'];
};

export type TableListRelationFilter = {
  every?: InputMaybe<TableWhereInput>;
  none?: InputMaybe<TableWhereInput>;
  some?: InputMaybe<TableWhereInput>;
};

export type TableMaxAggregate = {
  __typename?: 'TableMaxAggregate';
  active?: Maybe<Scalars['Boolean']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  sessionid?: Maybe<Scalars['Int']>;
  tableNumber?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
};

export type TableMaxOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type TableMinAggregate = {
  __typename?: 'TableMinAggregate';
  active?: Maybe<Scalars['Boolean']>;
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  sessionid?: Maybe<Scalars['Int']>;
  tableNumber?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
};

export type TableMinOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type TableOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TableOrderByWithAggregationInput = {
  _avg?: InputMaybe<TableAvgOrderByAggregateInput>;
  _count?: InputMaybe<TableCountOrderByAggregateInput>;
  _max?: InputMaybe<TableMaxOrderByAggregateInput>;
  _min?: InputMaybe<TableMinOrderByAggregateInput>;
  _sum?: InputMaybe<TableSumOrderByAggregateInput>;
  active?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type TableOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  completedAt?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  orders?: InputMaybe<OrderOrderByRelationAggregateInput>;
  session?: InputMaybe<SessionOrderByWithRelationInput>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type TableRelationFilter = {
  is?: InputMaybe<TableWhereInput>;
  isNot?: InputMaybe<TableWhereInput>;
};

export enum TableScalarFieldEnum {
  Active = 'active',
  CompletedAt = 'completedAt',
  CreatedAt = 'createdAt',
  Id = 'id',
  Sessionid = 'sessionid',
  TableNumber = 'tableNumber',
  Token = 'token'
}

export type TableScalarWhereInput = {
  AND?: InputMaybe<Array<TableScalarWhereInput>>;
  NOT?: InputMaybe<Array<TableScalarWhereInput>>;
  OR?: InputMaybe<Array<TableScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  sessionid?: InputMaybe<IntNullableFilter>;
  tableNumber?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
};

export type TableScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TableScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TableScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TableScalarWhereWithAggregatesInput>>;
  active?: InputMaybe<BoolWithAggregatesFilter>;
  completedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  sessionid?: InputMaybe<IntNullableWithAggregatesFilter>;
  tableNumber?: InputMaybe<IntWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type TableSumAggregate = {
  __typename?: 'TableSumAggregate';
  id?: Maybe<Scalars['Int']>;
  sessionid?: Maybe<Scalars['Int']>;
  tableNumber?: Maybe<Scalars['Int']>;
};

export type TableSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  sessionid?: InputMaybe<SortOrder>;
  tableNumber?: InputMaybe<SortOrder>;
};

export type TableUpdateInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutTableInput>;
  session?: InputMaybe<SessionUpdateOneWithoutTablesInput>;
  tableNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TableUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  tableNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TableUpdateManyWithWhereWithoutSessionInput = {
  data: TableUpdateManyMutationInput;
  where: TableScalarWhereInput;
};

export type TableUpdateManyWithoutSessionInput = {
  connect?: InputMaybe<Array<TableWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TableCreateOrConnectWithoutSessionInput>>;
  create?: InputMaybe<Array<TableCreateWithoutSessionInput>>;
  createMany?: InputMaybe<TableCreateManySessionInputEnvelope>;
  delete?: InputMaybe<Array<TableWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TableScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TableWhereUniqueInput>>;
  set?: InputMaybe<Array<TableWhereUniqueInput>>;
  update?: InputMaybe<Array<TableUpdateWithWhereUniqueWithoutSessionInput>>;
  updateMany?: InputMaybe<Array<TableUpdateManyWithWhereWithoutSessionInput>>;
  upsert?: InputMaybe<Array<TableUpsertWithWhereUniqueWithoutSessionInput>>;
};

export type TableUpdateOneRequiredWithoutOrdersInput = {
  connect?: InputMaybe<TableWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TableCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<TableCreateWithoutOrdersInput>;
  update?: InputMaybe<TableUpdateWithoutOrdersInput>;
  upsert?: InputMaybe<TableUpsertWithoutOrdersInput>;
};

export type TableUpdateWithWhereUniqueWithoutSessionInput = {
  data: TableUpdateWithoutSessionInput;
  where: TableWhereUniqueInput;
};

export type TableUpdateWithoutOrdersInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  session?: InputMaybe<SessionUpdateOneWithoutTablesInput>;
  tableNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TableUpdateWithoutSessionInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutTableInput>;
  tableNumber?: InputMaybe<IntFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TableUpsertWithWhereUniqueWithoutSessionInput = {
  create: TableCreateWithoutSessionInput;
  update: TableUpdateWithoutSessionInput;
  where: TableWhereUniqueInput;
};

export type TableUpsertWithoutOrdersInput = {
  create: TableCreateWithoutOrdersInput;
  update: TableUpdateWithoutOrdersInput;
};

export type TableWhereInput = {
  AND?: InputMaybe<Array<TableWhereInput>>;
  NOT?: InputMaybe<Array<TableWhereInput>>;
  OR?: InputMaybe<Array<TableWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  completedAt?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  session?: InputMaybe<SessionRelationFilter>;
  sessionid?: InputMaybe<IntNullableFilter>;
  tableNumber?: InputMaybe<IntFilter>;
  token?: InputMaybe<StringFilter>;
};

export type TableWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  token?: Maybe<Scalars['String']>;
};

export type ValidateJwtQueryVariables = Exact<{ [key: string]: never; }>;


export type ValidateJwtQuery = { __typename?: 'Query', validateJWT: boolean };

export type ValidateUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ValidateUserMutation = { __typename?: 'Mutation', validateUser: { __typename?: 'User', id: number } };

export type CreateSafeOrderMutationVariables = Exact<{
  data: OrderCreateInput;
}>;


export type CreateSafeOrderMutation = { __typename?: 'Mutation', createSafeOrder: { __typename?: 'Order', id: number, createdAt: any, price: any, completedAt?: any | null, tableNumber: number, table: { __typename?: 'Table', id: number }, session: { __typename?: 'Session', id: number }, orderitems: Array<{ __typename?: 'OrderItem', id: number, foodid: number, quantity: number, totalPrice: any, title: string }> } };

export type CreateMenuItemMutationVariables = Exact<{
  data: MenuCreateInput;
}>;


export type CreateMenuItemMutation = { __typename?: 'Mutation', createMenu: { __typename?: 'Menu', title: string, id: number, updatedat: any, sections: Array<{ __typename?: 'Section', id: number }>, fooditems: Array<{ __typename?: 'FoodItem', id: number }> } };

export type CreateFoodItemMutationVariables = Exact<{
  data: FoodItemCreateInput;
}>;


export type CreateFoodItemMutation = { __typename?: 'Mutation', createFoodItem: { __typename?: 'FoodItem', code: number, title: string, id: number, price: any, available: boolean, options: Array<any>, sections: Array<{ __typename?: 'Section', id: number, title: string }>, image?: { __typename?: 'Image', id: number, imageURL: string } | null, menu: { __typename?: 'Menu', id: number, title: string } } };

export type CreateSectionMutationVariables = Exact<{
  data: SectionCreateInput;
}>;


export type CreateSectionMutation = { __typename?: 'Mutation', createSection: { __typename?: 'Section', id: number, code: number, title: string, menu: { __typename?: 'Menu', id: number, title: string }, image?: { __typename?: 'Image', id: number, imageURL: string } | null, fooditems: Array<{ __typename?: 'FoodItem', id: number, title: string }> } };

export type EditMenuMutationVariables = Exact<{
  data: MenuUpdateInput;
  where: MenuWhereUniqueInput;
}>;


export type EditMenuMutation = { __typename?: 'Mutation', updateMenu?: { __typename?: 'Menu', id: number, title: string, updatedat: any } | null };

export type EditSectionMutationVariables = Exact<{
  data: SectionUpdateInput;
  where: SectionWhereUniqueInput;
}>;


export type EditSectionMutation = { __typename?: 'Mutation', updateSection?: { __typename?: 'Section', id: number, code: number, title: string, image?: { __typename?: 'Image', id: number, imageURL: string } | null, menu: { __typename?: 'Menu', id: number, title: string }, fooditems: Array<{ __typename?: 'FoodItem', id: number, title: string }> } | null };

export type EditSafeItemMutationVariables = Exact<{
  data: FoodItemUpdateInput;
  where: FoodItemWhereUniqueInput;
}>;


export type EditSafeItemMutation = { __typename?: 'Mutation', editSafeItem: { __typename?: 'FoodItem', id: number, code: number, title: string, price: any, available: boolean, options: Array<any>, menu: { __typename?: 'Menu', id: number, title: string }, sections: Array<{ __typename?: 'Section', id: number, title: string, image?: { __typename?: 'Image', id: number, imageURL: string } | null }>, image?: { __typename?: 'Image', id: number, imageURL: string } | null } };

export type DeleteSectionMutationVariables = Exact<{
  where: SectionWhereUniqueInput;
}>;


export type DeleteSectionMutation = { __typename?: 'Mutation', deleteSection?: { __typename?: 'Section', id: number } | null };

export type DeleteMenuMutationVariables = Exact<{
  where: MenuWhereUniqueInput;
}>;


export type DeleteMenuMutation = { __typename?: 'Mutation', deleteMenu?: { __typename?: 'Menu', id: number } | null };

export type DeleteFoodItemMutationVariables = Exact<{
  where: FoodItemWhereUniqueInput;
}>;


export type DeleteFoodItemMutation = { __typename?: 'Mutation', deleteFoodItem?: { __typename?: 'FoodItem', id: number } | null };

export type NewServiceCreatorMutationVariables = Exact<{
  where: ServiceWhereUniqueInput;
  create: ServiceCreateInput;
  update: ServiceUpdateInput;
}>;


export type NewServiceCreatorMutation = { __typename?: 'Mutation', upsertSafeService: { __typename?: 'Service', id: number, dummy?: string | null, currentid?: number | null, current?: { __typename?: 'Session', id: number, createdAt: any, lastOrder: any, table: number, revenue: number, tables: Array<{ __typename?: 'Table', id: number }>, menu?: { __typename?: 'Menu', id: number } | null, service?: { __typename?: 'Service', id: number } | null } | null } };

export type CreateTableMutationVariables = Exact<{
  data: TableCreateInput;
}>;


export type CreateTableMutation = { __typename?: 'Mutation', createSafeTable: { __typename?: 'Table', id: number, tableNumber: number, active: boolean, token: string, createdAt: any, orders: Array<{ __typename?: 'Order', id: number, price: any, tableNumber: number, createdAt: any, completedAt?: any | null, orderitems: Array<{ __typename?: 'OrderItem', id: number, totalPrice: any, quantity: number, foodid: number, title: string }> }>, session?: { __typename?: 'Session', id: number, revenue: number } | null } };

export type VacateTableMutationVariables = Exact<{
  data: TableUpdateInput;
  where: TableWhereUniqueInput;
}>;


export type VacateTableMutation = { __typename?: 'Mutation', vacateSafeTable: { __typename?: 'Table', id: number, session?: { __typename?: 'Session', id: number } | null } };

export type TerminateServiceMutationVariables = Exact<{
  data: ServiceUpdateInput;
  where: ServiceWhereUniqueInput;
}>;


export type TerminateServiceMutation = { __typename?: 'Mutation', terminateService: { __typename?: 'Service', id: number, current?: { __typename?: 'Session', id: number } | null } };

export type CompleteOrderMutationVariables = Exact<{
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
}>;


export type CompleteOrderMutation = { __typename?: 'Mutation', completeOrder: { __typename?: 'Order', id: number, completedAt?: any | null, price: any } };

export type DeleteOrderMutationVariables = Exact<{
  where: OrderWhereUniqueInput;
}>;


export type DeleteOrderMutation = { __typename?: 'Mutation', deleteOrder?: { __typename?: 'Order', id: number } | null };

export type ValidateTableTokenQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type ValidateTableTokenQuery = { __typename?: 'Query', validateTableToken: { __typename?: 'Result', customerTable: { __typename?: 'Table', id: number, tableNumber: number, orders: Array<{ __typename?: 'Order', id: number, price: any, createdAt: any, completedAt?: any | null, tableNumber: number, orderitems: Array<{ __typename?: 'OrderItem', id: number, foodid: number, quantity: number, totalPrice: any, title: string }> }>, session?: { __typename?: 'Session', id: number, lastOrder: any } | null }, currentMenu: { __typename?: 'Menu', id: number, sections: Array<{ __typename?: 'Section', id: number, code: number, title: string, image?: { __typename?: 'Image', id: number, imageURL: string } | null, fooditems: Array<{ __typename?: 'FoodItem', id: number, code: number, title: string, price: any, available: boolean, image?: { __typename?: 'Image', id: number, imageURL: string } | null }> }>, fooditems: Array<{ __typename?: 'FoodItem', id: number, code: number, title: string, price: any, available: boolean, image?: { __typename?: 'Image', id: number, imageURL: string } | null }> } } };

export type FetchAllMenusQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllMenusQuery = { __typename?: 'Query', menus: Array<{ __typename?: 'Menu', id: number, updatedat: any, title: string, sections: Array<{ __typename?: 'Section', id: number, code: number, title: string, menu: { __typename?: 'Menu', id: number, updatedat: any, title: string }, image?: { __typename?: 'Image', id: number, imageURL: string } | null, fooditems: Array<{ __typename?: 'FoodItem', id: number, title: string }> }>, fooditems: Array<{ __typename?: 'FoodItem', id: number, code: number, title: string, price: any, available: boolean, options: Array<any>, sections: Array<{ __typename?: 'Section', id: number, title: string }>, image?: { __typename?: 'Image', id: number, imageURL: string } | null, menu: { __typename?: 'Menu', id: number, title: string } }> }> };

export type FetchServiceQueryVariables = Exact<{
  where: ServiceWhereUniqueInput;
}>;


export type FetchServiceQuery = { __typename?: 'Query', service?: { __typename?: 'Service', id: number, currentid?: number | null, dummy?: string | null, current?: { __typename?: 'Session', id: number, createdAt: any, lastOrder: any, table: number, revenue: number, orders: Array<{ __typename?: 'Order', id: number, tableNumber: number, price: any, createdAt: any, completedAt?: any | null, orderitems: Array<{ __typename?: 'OrderItem', id: number, totalPrice: any, quantity: number, foodid: number, title: string, order: { __typename?: 'Order', id: number } }>, session: { __typename?: 'Session', id: number, revenue: number } }>, tables: Array<{ __typename?: 'Table', id: number, tableNumber: number, active: boolean, token: string, createdAt: any, session?: { __typename?: 'Session', id: number, revenue: number } | null, orders: Array<{ __typename?: 'Order', id: number, tableNumber: number, createdAt: any, completedAt?: any | null, price: any, orderitems: Array<{ __typename?: 'OrderItem', id: number, totalPrice: any, quantity: number, foodid: number, title: string, order: { __typename?: 'Order', id: number } }>, session: { __typename?: 'Session', id: number, revenue: number } }> }>, service?: { __typename?: 'Service', id: number } | null } | null } | null };


export const ValidateJwtDocument = gql`
    query validateJWT {
  validateJWT
}
    `;

/**
 * __useValidateJwtQuery__
 *
 * To run a query within a React component, call `useValidateJwtQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateJwtQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateJwtQuery({
 *   variables: {
 *   },
 * });
 */
export function useValidateJwtQuery(baseOptions?: Apollo.QueryHookOptions<ValidateJwtQuery, ValidateJwtQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidateJwtQuery, ValidateJwtQueryVariables>(ValidateJwtDocument, options);
      }
export function useValidateJwtLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateJwtQuery, ValidateJwtQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidateJwtQuery, ValidateJwtQueryVariables>(ValidateJwtDocument, options);
        }
export type ValidateJwtQueryHookResult = ReturnType<typeof useValidateJwtQuery>;
export type ValidateJwtLazyQueryHookResult = ReturnType<typeof useValidateJwtLazyQuery>;
export type ValidateJwtQueryResult = Apollo.QueryResult<ValidateJwtQuery, ValidateJwtQueryVariables>;
export const ValidateUserDocument = gql`
    mutation validateUser($token: String!) {
  validateUser(token: $token) {
    id
  }
}
    `;
export type ValidateUserMutationFn = Apollo.MutationFunction<ValidateUserMutation, ValidateUserMutationVariables>;

/**
 * __useValidateUserMutation__
 *
 * To run a mutation, you first call `useValidateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateUserMutation, { data, loading, error }] = useValidateUserMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useValidateUserMutation(baseOptions?: Apollo.MutationHookOptions<ValidateUserMutation, ValidateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ValidateUserMutation, ValidateUserMutationVariables>(ValidateUserDocument, options);
      }
export type ValidateUserMutationHookResult = ReturnType<typeof useValidateUserMutation>;
export type ValidateUserMutationResult = Apollo.MutationResult<ValidateUserMutation>;
export type ValidateUserMutationOptions = Apollo.BaseMutationOptions<ValidateUserMutation, ValidateUserMutationVariables>;
export const CreateSafeOrderDocument = gql`
    mutation createSafeOrder($data: OrderCreateInput!) {
  createSafeOrder(data: $data) {
    id
    createdAt
    price
    completedAt
    table {
      id
    }
    session {
      id
    }
    orderitems {
      id
      foodid
      quantity
      totalPrice
      title
    }
    tableNumber
  }
}
    `;
export type CreateSafeOrderMutationFn = Apollo.MutationFunction<CreateSafeOrderMutation, CreateSafeOrderMutationVariables>;

/**
 * __useCreateSafeOrderMutation__
 *
 * To run a mutation, you first call `useCreateSafeOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSafeOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSafeOrderMutation, { data, loading, error }] = useCreateSafeOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSafeOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateSafeOrderMutation, CreateSafeOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSafeOrderMutation, CreateSafeOrderMutationVariables>(CreateSafeOrderDocument, options);
      }
export type CreateSafeOrderMutationHookResult = ReturnType<typeof useCreateSafeOrderMutation>;
export type CreateSafeOrderMutationResult = Apollo.MutationResult<CreateSafeOrderMutation>;
export type CreateSafeOrderMutationOptions = Apollo.BaseMutationOptions<CreateSafeOrderMutation, CreateSafeOrderMutationVariables>;
export const CreateMenuItemDocument = gql`
    mutation createMenuItem($data: MenuCreateInput!) {
  createMenu(data: $data) {
    title
    id
    updatedat
    sections {
      id
    }
    fooditems {
      id
    }
  }
}
    `;
export type CreateMenuItemMutationFn = Apollo.MutationFunction<CreateMenuItemMutation, CreateMenuItemMutationVariables>;

/**
 * __useCreateMenuItemMutation__
 *
 * To run a mutation, you first call `useCreateMenuItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMenuItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMenuItemMutation, { data, loading, error }] = useCreateMenuItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMenuItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateMenuItemMutation, CreateMenuItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMenuItemMutation, CreateMenuItemMutationVariables>(CreateMenuItemDocument, options);
      }
export type CreateMenuItemMutationHookResult = ReturnType<typeof useCreateMenuItemMutation>;
export type CreateMenuItemMutationResult = Apollo.MutationResult<CreateMenuItemMutation>;
export type CreateMenuItemMutationOptions = Apollo.BaseMutationOptions<CreateMenuItemMutation, CreateMenuItemMutationVariables>;
export const CreateFoodItemDocument = gql`
    mutation createFoodItem($data: FoodItemCreateInput!) {
  createFoodItem(data: $data) {
    code
    title
    id
    price
    available
    options
    sections {
      id
      title
    }
    image {
      id
      imageURL
    }
    menu {
      id
      title
    }
  }
}
    `;
export type CreateFoodItemMutationFn = Apollo.MutationFunction<CreateFoodItemMutation, CreateFoodItemMutationVariables>;

/**
 * __useCreateFoodItemMutation__
 *
 * To run a mutation, you first call `useCreateFoodItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFoodItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFoodItemMutation, { data, loading, error }] = useCreateFoodItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFoodItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateFoodItemMutation, CreateFoodItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFoodItemMutation, CreateFoodItemMutationVariables>(CreateFoodItemDocument, options);
      }
export type CreateFoodItemMutationHookResult = ReturnType<typeof useCreateFoodItemMutation>;
export type CreateFoodItemMutationResult = Apollo.MutationResult<CreateFoodItemMutation>;
export type CreateFoodItemMutationOptions = Apollo.BaseMutationOptions<CreateFoodItemMutation, CreateFoodItemMutationVariables>;
export const CreateSectionDocument = gql`
    mutation createSection($data: SectionCreateInput!) {
  createSection(data: $data) {
    id
    code
    title
    menu {
      id
      title
    }
    image {
      id
      imageURL
    }
    fooditems {
      id
      title
    }
  }
}
    `;
export type CreateSectionMutationFn = Apollo.MutationFunction<CreateSectionMutation, CreateSectionMutationVariables>;

/**
 * __useCreateSectionMutation__
 *
 * To run a mutation, you first call `useCreateSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSectionMutation, { data, loading, error }] = useCreateSectionMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSectionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSectionMutation, CreateSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSectionMutation, CreateSectionMutationVariables>(CreateSectionDocument, options);
      }
export type CreateSectionMutationHookResult = ReturnType<typeof useCreateSectionMutation>;
export type CreateSectionMutationResult = Apollo.MutationResult<CreateSectionMutation>;
export type CreateSectionMutationOptions = Apollo.BaseMutationOptions<CreateSectionMutation, CreateSectionMutationVariables>;
export const EditMenuDocument = gql`
    mutation editMenu($data: MenuUpdateInput!, $where: MenuWhereUniqueInput!) {
  updateMenu(data: $data, where: $where) {
    id
    title
    updatedat
  }
}
    `;
export type EditMenuMutationFn = Apollo.MutationFunction<EditMenuMutation, EditMenuMutationVariables>;

/**
 * __useEditMenuMutation__
 *
 * To run a mutation, you first call `useEditMenuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditMenuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editMenuMutation, { data, loading, error }] = useEditMenuMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEditMenuMutation(baseOptions?: Apollo.MutationHookOptions<EditMenuMutation, EditMenuMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditMenuMutation, EditMenuMutationVariables>(EditMenuDocument, options);
      }
export type EditMenuMutationHookResult = ReturnType<typeof useEditMenuMutation>;
export type EditMenuMutationResult = Apollo.MutationResult<EditMenuMutation>;
export type EditMenuMutationOptions = Apollo.BaseMutationOptions<EditMenuMutation, EditMenuMutationVariables>;
export const EditSectionDocument = gql`
    mutation editSection($data: SectionUpdateInput!, $where: SectionWhereUniqueInput!) {
  updateSection(data: $data, where: $where) {
    id
    code
    image {
      id
      imageURL
    }
    title
    menu {
      id
      title
    }
    fooditems {
      id
      title
    }
  }
}
    `;
export type EditSectionMutationFn = Apollo.MutationFunction<EditSectionMutation, EditSectionMutationVariables>;

/**
 * __useEditSectionMutation__
 *
 * To run a mutation, you first call `useEditSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSectionMutation, { data, loading, error }] = useEditSectionMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEditSectionMutation(baseOptions?: Apollo.MutationHookOptions<EditSectionMutation, EditSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSectionMutation, EditSectionMutationVariables>(EditSectionDocument, options);
      }
export type EditSectionMutationHookResult = ReturnType<typeof useEditSectionMutation>;
export type EditSectionMutationResult = Apollo.MutationResult<EditSectionMutation>;
export type EditSectionMutationOptions = Apollo.BaseMutationOptions<EditSectionMutation, EditSectionMutationVariables>;
export const EditSafeItemDocument = gql`
    mutation editSafeItem($data: FoodItemUpdateInput!, $where: FoodItemWhereUniqueInput!) {
  editSafeItem(data: $data, where: $where) {
    id
    code
    title
    price
    available
    options
    menu {
      id
      title
    }
    sections {
      id
      title
      image {
        id
        imageURL
      }
    }
    image {
      id
      imageURL
    }
  }
}
    `;
export type EditSafeItemMutationFn = Apollo.MutationFunction<EditSafeItemMutation, EditSafeItemMutationVariables>;

/**
 * __useEditSafeItemMutation__
 *
 * To run a mutation, you first call `useEditSafeItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSafeItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSafeItemMutation, { data, loading, error }] = useEditSafeItemMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useEditSafeItemMutation(baseOptions?: Apollo.MutationHookOptions<EditSafeItemMutation, EditSafeItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSafeItemMutation, EditSafeItemMutationVariables>(EditSafeItemDocument, options);
      }
export type EditSafeItemMutationHookResult = ReturnType<typeof useEditSafeItemMutation>;
export type EditSafeItemMutationResult = Apollo.MutationResult<EditSafeItemMutation>;
export type EditSafeItemMutationOptions = Apollo.BaseMutationOptions<EditSafeItemMutation, EditSafeItemMutationVariables>;
export const DeleteSectionDocument = gql`
    mutation deleteSection($where: SectionWhereUniqueInput!) {
  deleteSection(where: $where) {
    id
  }
}
    `;
export type DeleteSectionMutationFn = Apollo.MutationFunction<DeleteSectionMutation, DeleteSectionMutationVariables>;

/**
 * __useDeleteSectionMutation__
 *
 * To run a mutation, you first call `useDeleteSectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSectionMutation, { data, loading, error }] = useDeleteSectionMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteSectionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSectionMutation, DeleteSectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSectionMutation, DeleteSectionMutationVariables>(DeleteSectionDocument, options);
      }
export type DeleteSectionMutationHookResult = ReturnType<typeof useDeleteSectionMutation>;
export type DeleteSectionMutationResult = Apollo.MutationResult<DeleteSectionMutation>;
export type DeleteSectionMutationOptions = Apollo.BaseMutationOptions<DeleteSectionMutation, DeleteSectionMutationVariables>;
export const DeleteMenuDocument = gql`
    mutation deleteMenu($where: MenuWhereUniqueInput!) {
  deleteMenu(where: $where) {
    id
  }
}
    `;
export type DeleteMenuMutationFn = Apollo.MutationFunction<DeleteMenuMutation, DeleteMenuMutationVariables>;

/**
 * __useDeleteMenuMutation__
 *
 * To run a mutation, you first call `useDeleteMenuMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMenuMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMenuMutation, { data, loading, error }] = useDeleteMenuMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteMenuMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMenuMutation, DeleteMenuMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMenuMutation, DeleteMenuMutationVariables>(DeleteMenuDocument, options);
      }
export type DeleteMenuMutationHookResult = ReturnType<typeof useDeleteMenuMutation>;
export type DeleteMenuMutationResult = Apollo.MutationResult<DeleteMenuMutation>;
export type DeleteMenuMutationOptions = Apollo.BaseMutationOptions<DeleteMenuMutation, DeleteMenuMutationVariables>;
export const DeleteFoodItemDocument = gql`
    mutation deleteFoodItem($where: FoodItemWhereUniqueInput!) {
  deleteFoodItem(where: $where) {
    id
  }
}
    `;
export type DeleteFoodItemMutationFn = Apollo.MutationFunction<DeleteFoodItemMutation, DeleteFoodItemMutationVariables>;

/**
 * __useDeleteFoodItemMutation__
 *
 * To run a mutation, you first call `useDeleteFoodItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFoodItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFoodItemMutation, { data, loading, error }] = useDeleteFoodItemMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteFoodItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFoodItemMutation, DeleteFoodItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFoodItemMutation, DeleteFoodItemMutationVariables>(DeleteFoodItemDocument, options);
      }
export type DeleteFoodItemMutationHookResult = ReturnType<typeof useDeleteFoodItemMutation>;
export type DeleteFoodItemMutationResult = Apollo.MutationResult<DeleteFoodItemMutation>;
export type DeleteFoodItemMutationOptions = Apollo.BaseMutationOptions<DeleteFoodItemMutation, DeleteFoodItemMutationVariables>;
export const NewServiceCreatorDocument = gql`
    mutation newServiceCreator($where: ServiceWhereUniqueInput!, $create: ServiceCreateInput!, $update: ServiceUpdateInput!) {
  upsertSafeService(where: $where, create: $create, update: $update) {
    id
    dummy
    currentid
    current {
      id
      createdAt
      lastOrder
      table
      revenue
      tables {
        id
      }
      menu {
        id
      }
      service {
        id
      }
    }
  }
}
    `;
export type NewServiceCreatorMutationFn = Apollo.MutationFunction<NewServiceCreatorMutation, NewServiceCreatorMutationVariables>;

/**
 * __useNewServiceCreatorMutation__
 *
 * To run a mutation, you first call `useNewServiceCreatorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewServiceCreatorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newServiceCreatorMutation, { data, loading, error }] = useNewServiceCreatorMutation({
 *   variables: {
 *      where: // value for 'where'
 *      create: // value for 'create'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useNewServiceCreatorMutation(baseOptions?: Apollo.MutationHookOptions<NewServiceCreatorMutation, NewServiceCreatorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NewServiceCreatorMutation, NewServiceCreatorMutationVariables>(NewServiceCreatorDocument, options);
      }
export type NewServiceCreatorMutationHookResult = ReturnType<typeof useNewServiceCreatorMutation>;
export type NewServiceCreatorMutationResult = Apollo.MutationResult<NewServiceCreatorMutation>;
export type NewServiceCreatorMutationOptions = Apollo.BaseMutationOptions<NewServiceCreatorMutation, NewServiceCreatorMutationVariables>;
export const CreateTableDocument = gql`
    mutation createTable($data: TableCreateInput!) {
  createSafeTable(data: $data) {
    id
    tableNumber
    active
    token
    createdAt
    orders {
      id
      price
      tableNumber
      createdAt
      completedAt
      orderitems {
        id
        totalPrice
        quantity
        foodid
        title
      }
    }
    session {
      id
      revenue
    }
  }
}
    `;
export type CreateTableMutationFn = Apollo.MutationFunction<CreateTableMutation, CreateTableMutationVariables>;

/**
 * __useCreateTableMutation__
 *
 * To run a mutation, you first call `useCreateTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTableMutation, { data, loading, error }] = useCreateTableMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTableMutation(baseOptions?: Apollo.MutationHookOptions<CreateTableMutation, CreateTableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTableMutation, CreateTableMutationVariables>(CreateTableDocument, options);
      }
export type CreateTableMutationHookResult = ReturnType<typeof useCreateTableMutation>;
export type CreateTableMutationResult = Apollo.MutationResult<CreateTableMutation>;
export type CreateTableMutationOptions = Apollo.BaseMutationOptions<CreateTableMutation, CreateTableMutationVariables>;
export const VacateTableDocument = gql`
    mutation vacateTable($data: TableUpdateInput!, $where: TableWhereUniqueInput!) {
  vacateSafeTable(data: $data, where: $where) {
    id
    session {
      id
    }
  }
}
    `;
export type VacateTableMutationFn = Apollo.MutationFunction<VacateTableMutation, VacateTableMutationVariables>;

/**
 * __useVacateTableMutation__
 *
 * To run a mutation, you first call `useVacateTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVacateTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [vacateTableMutation, { data, loading, error }] = useVacateTableMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useVacateTableMutation(baseOptions?: Apollo.MutationHookOptions<VacateTableMutation, VacateTableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VacateTableMutation, VacateTableMutationVariables>(VacateTableDocument, options);
      }
export type VacateTableMutationHookResult = ReturnType<typeof useVacateTableMutation>;
export type VacateTableMutationResult = Apollo.MutationResult<VacateTableMutation>;
export type VacateTableMutationOptions = Apollo.BaseMutationOptions<VacateTableMutation, VacateTableMutationVariables>;
export const TerminateServiceDocument = gql`
    mutation terminateService($data: ServiceUpdateInput!, $where: ServiceWhereUniqueInput!) {
  terminateService(data: $data, where: $where) {
    id
    current {
      id
    }
  }
}
    `;
export type TerminateServiceMutationFn = Apollo.MutationFunction<TerminateServiceMutation, TerminateServiceMutationVariables>;

/**
 * __useTerminateServiceMutation__
 *
 * To run a mutation, you first call `useTerminateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTerminateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [terminateServiceMutation, { data, loading, error }] = useTerminateServiceMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTerminateServiceMutation(baseOptions?: Apollo.MutationHookOptions<TerminateServiceMutation, TerminateServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TerminateServiceMutation, TerminateServiceMutationVariables>(TerminateServiceDocument, options);
      }
export type TerminateServiceMutationHookResult = ReturnType<typeof useTerminateServiceMutation>;
export type TerminateServiceMutationResult = Apollo.MutationResult<TerminateServiceMutation>;
export type TerminateServiceMutationOptions = Apollo.BaseMutationOptions<TerminateServiceMutation, TerminateServiceMutationVariables>;
export const CompleteOrderDocument = gql`
    mutation completeOrder($data: OrderUpdateInput!, $where: OrderWhereUniqueInput!) {
  completeOrder(data: $data, where: $where) {
    id
    completedAt
    price
  }
}
    `;
export type CompleteOrderMutationFn = Apollo.MutationFunction<CompleteOrderMutation, CompleteOrderMutationVariables>;

/**
 * __useCompleteOrderMutation__
 *
 * To run a mutation, you first call `useCompleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeOrderMutation, { data, loading, error }] = useCompleteOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCompleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<CompleteOrderMutation, CompleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteOrderMutation, CompleteOrderMutationVariables>(CompleteOrderDocument, options);
      }
export type CompleteOrderMutationHookResult = ReturnType<typeof useCompleteOrderMutation>;
export type CompleteOrderMutationResult = Apollo.MutationResult<CompleteOrderMutation>;
export type CompleteOrderMutationOptions = Apollo.BaseMutationOptions<CompleteOrderMutation, CompleteOrderMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation deleteOrder($where: OrderWhereUniqueInput!) {
  deleteOrder(where: $where) {
    id
  }
}
    `;
export type DeleteOrderMutationFn = Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, options);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const ValidateTableTokenDocument = gql`
    query validateTableToken($token: String!) {
  validateTableToken(token: $token) {
    customerTable {
      id
      tableNumber
      orders {
        id
        price
        createdAt
        completedAt
        tableNumber
        orderitems {
          id
          foodid
          quantity
          totalPrice
          title
        }
      }
      session {
        id
        lastOrder
      }
    }
    currentMenu {
      id
      sections {
        id
        code
        title
        image {
          id
          imageURL
        }
        fooditems {
          id
          code
          title
          price
          available
          image {
            id
            imageURL
          }
        }
      }
      fooditems {
        id
        code
        title
        price
        available
        image {
          id
          imageURL
        }
      }
    }
  }
}
    `;

/**
 * __useValidateTableTokenQuery__
 *
 * To run a query within a React component, call `useValidateTableTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useValidateTableTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValidateTableTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useValidateTableTokenQuery(baseOptions: Apollo.QueryHookOptions<ValidateTableTokenQuery, ValidateTableTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ValidateTableTokenQuery, ValidateTableTokenQueryVariables>(ValidateTableTokenDocument, options);
      }
export function useValidateTableTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ValidateTableTokenQuery, ValidateTableTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ValidateTableTokenQuery, ValidateTableTokenQueryVariables>(ValidateTableTokenDocument, options);
        }
export type ValidateTableTokenQueryHookResult = ReturnType<typeof useValidateTableTokenQuery>;
export type ValidateTableTokenLazyQueryHookResult = ReturnType<typeof useValidateTableTokenLazyQuery>;
export type ValidateTableTokenQueryResult = Apollo.QueryResult<ValidateTableTokenQuery, ValidateTableTokenQueryVariables>;
export const FetchAllMenusDocument = gql`
    query fetchAllMenus {
  menus {
    id
    updatedat
    title
    sections {
      id
      code
      title
      menu {
        id
        updatedat
        title
      }
      image {
        id
        imageURL
      }
      fooditems {
        id
        title
      }
    }
    fooditems {
      id
      code
      title
      price
      available
      options
      sections {
        id
        title
      }
      image {
        id
        imageURL
      }
      menu {
        id
        title
      }
    }
  }
}
    `;

/**
 * __useFetchAllMenusQuery__
 *
 * To run a query within a React component, call `useFetchAllMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAllMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAllMenusQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchAllMenusQuery(baseOptions?: Apollo.QueryHookOptions<FetchAllMenusQuery, FetchAllMenusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchAllMenusQuery, FetchAllMenusQueryVariables>(FetchAllMenusDocument, options);
      }
export function useFetchAllMenusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchAllMenusQuery, FetchAllMenusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchAllMenusQuery, FetchAllMenusQueryVariables>(FetchAllMenusDocument, options);
        }
export type FetchAllMenusQueryHookResult = ReturnType<typeof useFetchAllMenusQuery>;
export type FetchAllMenusLazyQueryHookResult = ReturnType<typeof useFetchAllMenusLazyQuery>;
export type FetchAllMenusQueryResult = Apollo.QueryResult<FetchAllMenusQuery, FetchAllMenusQueryVariables>;
export const FetchServiceDocument = gql`
    query fetchService($where: ServiceWhereUniqueInput!) {
  service(where: $where) {
    id
    currentid
    dummy
    current {
      id
      createdAt
      lastOrder
      table
      revenue
      orders {
        id
        tableNumber
        price
        createdAt
        completedAt
        orderitems {
          id
          totalPrice
          quantity
          foodid
          title
          order {
            id
          }
        }
        session {
          id
          revenue
        }
      }
      tables {
        id
        tableNumber
        active
        token
        session {
          id
          revenue
        }
        createdAt
        orders {
          id
          tableNumber
          createdAt
          completedAt
          price
          orderitems {
            id
            totalPrice
            quantity
            foodid
            title
            order {
              id
            }
          }
          session {
            id
            revenue
          }
        }
      }
      service {
        id
      }
    }
  }
}
    `;

/**
 * __useFetchServiceQuery__
 *
 * To run a query within a React component, call `useFetchServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchServiceQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFetchServiceQuery(baseOptions: Apollo.QueryHookOptions<FetchServiceQuery, FetchServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchServiceQuery, FetchServiceQueryVariables>(FetchServiceDocument, options);
      }
export function useFetchServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchServiceQuery, FetchServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchServiceQuery, FetchServiceQueryVariables>(FetchServiceDocument, options);
        }
export type FetchServiceQueryHookResult = ReturnType<typeof useFetchServiceQuery>;
export type FetchServiceLazyQueryHookResult = ReturnType<typeof useFetchServiceLazyQuery>;
export type FetchServiceQueryResult = Apollo.QueryResult<FetchServiceQuery, FetchServiceQueryVariables>;