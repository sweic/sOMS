import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Menu: crudResolvers.MenuCrudResolver,
  Section: crudResolvers.SectionCrudResolver,
  FoodItem: crudResolvers.FoodItemCrudResolver,
  Image: crudResolvers.ImageCrudResolver,
  Session: crudResolvers.SessionCrudResolver,
  Service: crudResolvers.ServiceCrudResolver,
  Table: crudResolvers.TableCrudResolver,
  Order: crudResolvers.OrderCrudResolver,
  OrderItem: crudResolvers.OrderItemCrudResolver
};
const actionResolversMap = {
  Menu: {
    menu: actionResolvers.FindUniqueMenuResolver,
    findFirstMenu: actionResolvers.FindFirstMenuResolver,
    menus: actionResolvers.FindManyMenuResolver,
    createMenu: actionResolvers.CreateMenuResolver,
    createManyMenu: actionResolvers.CreateManyMenuResolver,
    deleteMenu: actionResolvers.DeleteMenuResolver,
    updateMenu: actionResolvers.UpdateMenuResolver,
    deleteManyMenu: actionResolvers.DeleteManyMenuResolver,
    updateManyMenu: actionResolvers.UpdateManyMenuResolver,
    upsertMenu: actionResolvers.UpsertMenuResolver,
    aggregateMenu: actionResolvers.AggregateMenuResolver,
    groupByMenu: actionResolvers.GroupByMenuResolver
  },
  Section: {
    section: actionResolvers.FindUniqueSectionResolver,
    findFirstSection: actionResolvers.FindFirstSectionResolver,
    sections: actionResolvers.FindManySectionResolver,
    createSection: actionResolvers.CreateSectionResolver,
    createManySection: actionResolvers.CreateManySectionResolver,
    deleteSection: actionResolvers.DeleteSectionResolver,
    updateSection: actionResolvers.UpdateSectionResolver,
    deleteManySection: actionResolvers.DeleteManySectionResolver,
    updateManySection: actionResolvers.UpdateManySectionResolver,
    upsertSection: actionResolvers.UpsertSectionResolver,
    aggregateSection: actionResolvers.AggregateSectionResolver,
    groupBySection: actionResolvers.GroupBySectionResolver
  },
  FoodItem: {
    foodItem: actionResolvers.FindUniqueFoodItemResolver,
    findFirstFoodItem: actionResolvers.FindFirstFoodItemResolver,
    foodItems: actionResolvers.FindManyFoodItemResolver,
    createFoodItem: actionResolvers.CreateFoodItemResolver,
    createManyFoodItem: actionResolvers.CreateManyFoodItemResolver,
    deleteFoodItem: actionResolvers.DeleteFoodItemResolver,
    updateFoodItem: actionResolvers.UpdateFoodItemResolver,
    deleteManyFoodItem: actionResolvers.DeleteManyFoodItemResolver,
    updateManyFoodItem: actionResolvers.UpdateManyFoodItemResolver,
    upsertFoodItem: actionResolvers.UpsertFoodItemResolver,
    aggregateFoodItem: actionResolvers.AggregateFoodItemResolver,
    groupByFoodItem: actionResolvers.GroupByFoodItemResolver
  },
  Image: {
    image: actionResolvers.FindUniqueImageResolver,
    findFirstImage: actionResolvers.FindFirstImageResolver,
    images: actionResolvers.FindManyImageResolver,
    createImage: actionResolvers.CreateImageResolver,
    createManyImage: actionResolvers.CreateManyImageResolver,
    deleteImage: actionResolvers.DeleteImageResolver,
    updateImage: actionResolvers.UpdateImageResolver,
    deleteManyImage: actionResolvers.DeleteManyImageResolver,
    updateManyImage: actionResolvers.UpdateManyImageResolver,
    upsertImage: actionResolvers.UpsertImageResolver,
    aggregateImage: actionResolvers.AggregateImageResolver,
    groupByImage: actionResolvers.GroupByImageResolver
  },
  Session: {
    session: actionResolvers.FindUniqueSessionResolver,
    findFirstSession: actionResolvers.FindFirstSessionResolver,
    sessions: actionResolvers.FindManySessionResolver,
    createSession: actionResolvers.CreateSessionResolver,
    createManySession: actionResolvers.CreateManySessionResolver,
    deleteSession: actionResolvers.DeleteSessionResolver,
    updateSession: actionResolvers.UpdateSessionResolver,
    deleteManySession: actionResolvers.DeleteManySessionResolver,
    updateManySession: actionResolvers.UpdateManySessionResolver,
    upsertSession: actionResolvers.UpsertSessionResolver,
    aggregateSession: actionResolvers.AggregateSessionResolver,
    groupBySession: actionResolvers.GroupBySessionResolver
  },
  Service: {
    service: actionResolvers.FindUniqueServiceResolver,
    findFirstService: actionResolvers.FindFirstServiceResolver,
    services: actionResolvers.FindManyServiceResolver,
    createService: actionResolvers.CreateServiceResolver,
    createManyService: actionResolvers.CreateManyServiceResolver,
    deleteService: actionResolvers.DeleteServiceResolver,
    updateService: actionResolvers.UpdateServiceResolver,
    deleteManyService: actionResolvers.DeleteManyServiceResolver,
    updateManyService: actionResolvers.UpdateManyServiceResolver,
    upsertService: actionResolvers.UpsertServiceResolver,
    aggregateService: actionResolvers.AggregateServiceResolver,
    groupByService: actionResolvers.GroupByServiceResolver
  },
  Table: {
    table: actionResolvers.FindUniqueTableResolver,
    findFirstTable: actionResolvers.FindFirstTableResolver,
    tables: actionResolvers.FindManyTableResolver,
    createTable: actionResolvers.CreateTableResolver,
    createManyTable: actionResolvers.CreateManyTableResolver,
    deleteTable: actionResolvers.DeleteTableResolver,
    updateTable: actionResolvers.UpdateTableResolver,
    deleteManyTable: actionResolvers.DeleteManyTableResolver,
    updateManyTable: actionResolvers.UpdateManyTableResolver,
    upsertTable: actionResolvers.UpsertTableResolver,
    aggregateTable: actionResolvers.AggregateTableResolver,
    groupByTable: actionResolvers.GroupByTableResolver
  },
  Order: {
    order: actionResolvers.FindUniqueOrderResolver,
    findFirstOrder: actionResolvers.FindFirstOrderResolver,
    orders: actionResolvers.FindManyOrderResolver,
    createOrder: actionResolvers.CreateOrderResolver,
    createManyOrder: actionResolvers.CreateManyOrderResolver,
    deleteOrder: actionResolvers.DeleteOrderResolver,
    updateOrder: actionResolvers.UpdateOrderResolver,
    deleteManyOrder: actionResolvers.DeleteManyOrderResolver,
    updateManyOrder: actionResolvers.UpdateManyOrderResolver,
    upsertOrder: actionResolvers.UpsertOrderResolver,
    aggregateOrder: actionResolvers.AggregateOrderResolver,
    groupByOrder: actionResolvers.GroupByOrderResolver
  },
  OrderItem: {
    orderItem: actionResolvers.FindUniqueOrderItemResolver,
    findFirstOrderItem: actionResolvers.FindFirstOrderItemResolver,
    orderItems: actionResolvers.FindManyOrderItemResolver,
    createOrderItem: actionResolvers.CreateOrderItemResolver,
    createManyOrderItem: actionResolvers.CreateManyOrderItemResolver,
    deleteOrderItem: actionResolvers.DeleteOrderItemResolver,
    updateOrderItem: actionResolvers.UpdateOrderItemResolver,
    deleteManyOrderItem: actionResolvers.DeleteManyOrderItemResolver,
    updateManyOrderItem: actionResolvers.UpdateManyOrderItemResolver,
    upsertOrderItem: actionResolvers.UpsertOrderItemResolver,
    aggregateOrderItem: actionResolvers.AggregateOrderItemResolver,
    groupByOrderItem: actionResolvers.GroupByOrderItemResolver
  }
};
const crudResolversInfo = {
  Menu: ["menu", "findFirstMenu", "menus", "createMenu", "createManyMenu", "deleteMenu", "updateMenu", "deleteManyMenu", "updateManyMenu", "upsertMenu", "aggregateMenu", "groupByMenu"],
  Section: ["section", "findFirstSection", "sections", "createSection", "createManySection", "deleteSection", "updateSection", "deleteManySection", "updateManySection", "upsertSection", "aggregateSection", "groupBySection"],
  FoodItem: ["foodItem", "findFirstFoodItem", "foodItems", "createFoodItem", "createManyFoodItem", "deleteFoodItem", "updateFoodItem", "deleteManyFoodItem", "updateManyFoodItem", "upsertFoodItem", "aggregateFoodItem", "groupByFoodItem"],
  Image: ["image", "findFirstImage", "images", "createImage", "createManyImage", "deleteImage", "updateImage", "deleteManyImage", "updateManyImage", "upsertImage", "aggregateImage", "groupByImage"],
  Session: ["session", "findFirstSession", "sessions", "createSession", "createManySession", "deleteSession", "updateSession", "deleteManySession", "updateManySession", "upsertSession", "aggregateSession", "groupBySession"],
  Service: ["service", "findFirstService", "services", "createService", "createManyService", "deleteService", "updateService", "deleteManyService", "updateManyService", "upsertService", "aggregateService", "groupByService"],
  Table: ["table", "findFirstTable", "tables", "createTable", "createManyTable", "deleteTable", "updateTable", "deleteManyTable", "updateManyTable", "upsertTable", "aggregateTable", "groupByTable"],
  Order: ["order", "findFirstOrder", "orders", "createOrder", "createManyOrder", "deleteOrder", "updateOrder", "deleteManyOrder", "updateManyOrder", "upsertOrder", "aggregateOrder", "groupByOrder"],
  OrderItem: ["orderItem", "findFirstOrderItem", "orderItems", "createOrderItem", "createManyOrderItem", "deleteOrderItem", "updateOrderItem", "deleteManyOrderItem", "updateManyOrderItem", "upsertOrderItem", "aggregateOrderItem", "groupByOrderItem"]
};
const argsInfo = {
  FindUniqueMenuArgs: ["where"],
  FindFirstMenuArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMenuArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMenuArgs: ["data"],
  CreateManyMenuArgs: ["data", "skipDuplicates"],
  DeleteMenuArgs: ["where"],
  UpdateMenuArgs: ["data", "where"],
  DeleteManyMenuArgs: ["where"],
  UpdateManyMenuArgs: ["data", "where"],
  UpsertMenuArgs: ["where", "create", "update"],
  AggregateMenuArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMenuArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSectionArgs: ["where"],
  FindFirstSectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSectionArgs: ["data"],
  CreateManySectionArgs: ["data", "skipDuplicates"],
  DeleteSectionArgs: ["where"],
  UpdateSectionArgs: ["data", "where"],
  DeleteManySectionArgs: ["where"],
  UpdateManySectionArgs: ["data", "where"],
  UpsertSectionArgs: ["where", "create", "update"],
  AggregateSectionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySectionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueFoodItemArgs: ["where"],
  FindFirstFoodItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFoodItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateFoodItemArgs: ["data"],
  CreateManyFoodItemArgs: ["data", "skipDuplicates"],
  DeleteFoodItemArgs: ["where"],
  UpdateFoodItemArgs: ["data", "where"],
  DeleteManyFoodItemArgs: ["where"],
  UpdateManyFoodItemArgs: ["data", "where"],
  UpsertFoodItemArgs: ["where", "create", "update"],
  AggregateFoodItemArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByFoodItemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueImageArgs: ["where"],
  FindFirstImageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyImageArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateImageArgs: ["data"],
  CreateManyImageArgs: ["data", "skipDuplicates"],
  DeleteImageArgs: ["where"],
  UpdateImageArgs: ["data", "where"],
  DeleteManyImageArgs: ["where"],
  UpdateManyImageArgs: ["data", "where"],
  UpsertImageArgs: ["where", "create", "update"],
  AggregateImageArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByImageArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueSessionArgs: ["where"],
  FindFirstSessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySessionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSessionArgs: ["data"],
  CreateManySessionArgs: ["data", "skipDuplicates"],
  DeleteSessionArgs: ["where"],
  UpdateSessionArgs: ["data", "where"],
  DeleteManySessionArgs: ["where"],
  UpdateManySessionArgs: ["data", "where"],
  UpsertSessionArgs: ["where", "create", "update"],
  AggregateSessionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupBySessionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueServiceArgs: ["where"],
  FindFirstServiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyServiceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateServiceArgs: ["data"],
  CreateManyServiceArgs: ["data", "skipDuplicates"],
  DeleteServiceArgs: ["where"],
  UpdateServiceArgs: ["data", "where"],
  DeleteManyServiceArgs: ["where"],
  UpdateManyServiceArgs: ["data", "where"],
  UpsertServiceArgs: ["where", "create", "update"],
  AggregateServiceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByServiceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueTableArgs: ["where"],
  FindFirstTableArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTableArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateTableArgs: ["data"],
  CreateManyTableArgs: ["data", "skipDuplicates"],
  DeleteTableArgs: ["where"],
  UpdateTableArgs: ["data", "where"],
  DeleteManyTableArgs: ["where"],
  UpdateManyTableArgs: ["data", "where"],
  UpsertTableArgs: ["where", "create", "update"],
  AggregateTableArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByTableArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOrderArgs: ["where"],
  FindFirstOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOrderArgs: ["data"],
  CreateManyOrderArgs: ["data", "skipDuplicates"],
  DeleteOrderArgs: ["where"],
  UpdateOrderArgs: ["data", "where"],
  DeleteManyOrderArgs: ["where"],
  UpdateManyOrderArgs: ["data", "where"],
  UpsertOrderArgs: ["where", "create", "update"],
  AggregateOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOrderItemArgs: ["where"],
  FindFirstOrderItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderItemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOrderItemArgs: ["data"],
  CreateManyOrderItemArgs: ["data", "skipDuplicates"],
  DeleteOrderItemArgs: ["where"],
  UpdateOrderItemArgs: ["data", "where"],
  DeleteManyOrderItemArgs: ["where"],
  UpdateManyOrderItemArgs: ["data", "where"],
  UpsertOrderItemArgs: ["where", "create", "update"],
  AggregateOrderItemArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOrderItemArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Menu: relationResolvers.MenuRelationsResolver,
  Section: relationResolvers.SectionRelationsResolver,
  FoodItem: relationResolvers.FoodItemRelationsResolver,
  Image: relationResolvers.ImageRelationsResolver,
  Session: relationResolvers.SessionRelationsResolver,
  Service: relationResolvers.ServiceRelationsResolver,
  Table: relationResolvers.TableRelationsResolver,
  Order: relationResolvers.OrderRelationsResolver,
  OrderItem: relationResolvers.OrderItemRelationsResolver
};
const relationResolversInfo = {
  Menu: ["sessions", "sections", "fooditems"],
  Section: ["fooditems", "menu", "image"],
  FoodItem: ["sections", "menu", "image"],
  Image: ["foodImage", "sectionImage"],
  Session: ["menu", "service", "tables", "orders"],
  Service: ["current"],
  Table: ["session", "orders"],
  Order: ["table", "orderitems", "session"],
  OrderItem: ["order"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Menu: ["id", "updatedat", "title"],
  Section: ["id", "code", "title", "menuid", "imageid"],
  FoodItem: ["id", "code", "title", "menuid", "price", "available", "options", "imageid"],
  Image: ["id", "imageURL"],
  Session: ["id", "createdAt", "lastOrder", "table", "revenue", "menuid"],
  Service: ["id", "currentid", "dummy"],
  Table: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid"],
  Order: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid"],
  OrderItem: ["id", "orderid", "foodid", "quantity", "totalPrice", "title"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateMenu: ["_count", "_avg", "_sum", "_min", "_max"],
  MenuGroupBy: ["id", "updatedat", "title", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSection: ["_count", "_avg", "_sum", "_min", "_max"],
  SectionGroupBy: ["id", "code", "title", "menuid", "imageid", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateFoodItem: ["_count", "_avg", "_sum", "_min", "_max"],
  FoodItemGroupBy: ["id", "code", "title", "menuid", "price", "available", "options", "imageid", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateImage: ["_count", "_avg", "_sum", "_min", "_max"],
  ImageGroupBy: ["id", "imageURL", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSession: ["_count", "_avg", "_sum", "_min", "_max"],
  SessionGroupBy: ["id", "createdAt", "lastOrder", "table", "revenue", "menuid", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateService: ["_count", "_avg", "_sum", "_min", "_max"],
  ServiceGroupBy: ["id", "currentid", "dummy", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTable: ["_count", "_avg", "_sum", "_min", "_max"],
  TableGroupBy: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrder: ["_count", "_avg", "_sum", "_min", "_max"],
  OrderGroupBy: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrderItem: ["_count", "_avg", "_sum", "_min", "_max"],
  OrderItemGroupBy: ["id", "orderid", "foodid", "quantity", "totalPrice", "title", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  MenuCount: ["sessions", "sections", "fooditems"],
  MenuCountAggregate: ["id", "updatedat", "title", "_all"],
  MenuAvgAggregate: ["id"],
  MenuSumAggregate: ["id"],
  MenuMinAggregate: ["id", "updatedat", "title"],
  MenuMaxAggregate: ["id", "updatedat", "title"],
  SectionCount: ["fooditems"],
  SectionCountAggregate: ["id", "code", "title", "menuid", "imageid", "_all"],
  SectionAvgAggregate: ["id", "code", "menuid", "imageid"],
  SectionSumAggregate: ["id", "code", "menuid", "imageid"],
  SectionMinAggregate: ["id", "code", "title", "menuid", "imageid"],
  SectionMaxAggregate: ["id", "code", "title", "menuid", "imageid"],
  FoodItemCount: ["sections"],
  FoodItemCountAggregate: ["id", "code", "title", "menuid", "price", "available", "options", "imageid", "_all"],
  FoodItemAvgAggregate: ["id", "code", "menuid", "price", "imageid"],
  FoodItemSumAggregate: ["id", "code", "menuid", "price", "imageid"],
  FoodItemMinAggregate: ["id", "code", "title", "menuid", "price", "available", "imageid"],
  FoodItemMaxAggregate: ["id", "code", "title", "menuid", "price", "available", "imageid"],
  ImageCountAggregate: ["id", "imageURL", "_all"],
  ImageAvgAggregate: ["id"],
  ImageSumAggregate: ["id"],
  ImageMinAggregate: ["id", "imageURL"],
  ImageMaxAggregate: ["id", "imageURL"],
  SessionCount: ["tables", "orders"],
  SessionCountAggregate: ["id", "createdAt", "lastOrder", "table", "revenue", "menuid", "_all"],
  SessionAvgAggregate: ["id", "table", "revenue", "menuid"],
  SessionSumAggregate: ["id", "table", "revenue", "menuid"],
  SessionMinAggregate: ["id", "createdAt", "lastOrder", "table", "revenue", "menuid"],
  SessionMaxAggregate: ["id", "createdAt", "lastOrder", "table", "revenue", "menuid"],
  ServiceCountAggregate: ["id", "currentid", "dummy", "_all"],
  ServiceAvgAggregate: ["id", "currentid"],
  ServiceSumAggregate: ["id", "currentid"],
  ServiceMinAggregate: ["id", "currentid", "dummy"],
  ServiceMaxAggregate: ["id", "currentid", "dummy"],
  TableCount: ["orders"],
  TableCountAggregate: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid", "_all"],
  TableAvgAggregate: ["id", "tableNumber", "sessionid"],
  TableSumAggregate: ["id", "tableNumber", "sessionid"],
  TableMinAggregate: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid"],
  TableMaxAggregate: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid"],
  OrderCount: ["orderitems"],
  OrderCountAggregate: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid", "_all"],
  OrderAvgAggregate: ["id", "tableNumber", "price", "tableid", "sessionid"],
  OrderSumAggregate: ["id", "tableNumber", "price", "tableid", "sessionid"],
  OrderMinAggregate: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid"],
  OrderMaxAggregate: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid"],
  OrderItemCountAggregate: ["id", "orderid", "foodid", "quantity", "totalPrice", "title", "_all"],
  OrderItemAvgAggregate: ["id", "orderid", "foodid", "quantity", "totalPrice"],
  OrderItemSumAggregate: ["id", "orderid", "foodid", "quantity", "totalPrice"],
  OrderItemMinAggregate: ["id", "orderid", "foodid", "quantity", "totalPrice", "title"],
  OrderItemMaxAggregate: ["id", "orderid", "foodid", "quantity", "totalPrice", "title"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  MenuWhereInput: ["AND", "OR", "NOT", "id", "updatedat", "title", "sessions", "sections", "fooditems"],
  MenuOrderByWithRelationInput: ["id", "updatedat", "title", "sessions", "sections", "fooditems"],
  MenuWhereUniqueInput: ["id"],
  MenuOrderByWithAggregationInput: ["id", "updatedat", "title", "_count", "_avg", "_max", "_min", "_sum"],
  MenuScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "updatedat", "title"],
  SectionWhereInput: ["AND", "OR", "NOT", "id", "code", "title", "fooditems", "menu", "menuid", "image", "imageid"],
  SectionOrderByWithRelationInput: ["id", "code", "title", "fooditems", "menu", "menuid", "image", "imageid"],
  SectionWhereUniqueInput: ["id", "imageid"],
  SectionOrderByWithAggregationInput: ["id", "code", "title", "menuid", "imageid", "_count", "_avg", "_max", "_min", "_sum"],
  SectionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "code", "title", "menuid", "imageid"],
  FoodItemWhereInput: ["AND", "OR", "NOT", "id", "code", "title", "sections", "menu", "menuid", "price", "available", "options", "image", "imageid"],
  FoodItemOrderByWithRelationInput: ["id", "code", "title", "sections", "menu", "menuid", "price", "available", "options", "image", "imageid"],
  FoodItemWhereUniqueInput: ["id", "imageid"],
  FoodItemOrderByWithAggregationInput: ["id", "code", "title", "menuid", "price", "available", "options", "imageid", "_count", "_avg", "_max", "_min", "_sum"],
  FoodItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "code", "title", "menuid", "price", "available", "options", "imageid"],
  ImageWhereInput: ["AND", "OR", "NOT", "id", "imageURL", "foodImage", "sectionImage"],
  ImageOrderByWithRelationInput: ["id", "imageURL", "foodImage", "sectionImage"],
  ImageWhereUniqueInput: ["id"],
  ImageOrderByWithAggregationInput: ["id", "imageURL", "_count", "_avg", "_max", "_min", "_sum"],
  ImageScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "imageURL"],
  SessionWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "lastOrder", "table", "revenue", "menu", "menuid", "service", "tables", "orders"],
  SessionOrderByWithRelationInput: ["id", "createdAt", "lastOrder", "table", "revenue", "menu", "menuid", "service", "tables", "orders"],
  SessionWhereUniqueInput: ["id"],
  SessionOrderByWithAggregationInput: ["id", "createdAt", "lastOrder", "table", "revenue", "menuid", "_count", "_avg", "_max", "_min", "_sum"],
  SessionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "lastOrder", "table", "revenue", "menuid"],
  ServiceWhereInput: ["AND", "OR", "NOT", "id", "current", "currentid", "dummy"],
  ServiceOrderByWithRelationInput: ["id", "current", "currentid", "dummy"],
  ServiceWhereUniqueInput: ["id", "currentid"],
  ServiceOrderByWithAggregationInput: ["id", "currentid", "dummy", "_count", "_avg", "_max", "_min", "_sum"],
  ServiceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "currentid", "dummy"],
  TableWhereInput: ["AND", "OR", "NOT", "id", "tableNumber", "createdAt", "completedAt", "active", "token", "session", "sessionid", "orders"],
  TableOrderByWithRelationInput: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "session", "sessionid", "orders"],
  TableWhereUniqueInput: ["id"],
  TableOrderByWithAggregationInput: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid", "_count", "_avg", "_max", "_min", "_sum"],
  TableScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid"],
  OrderWhereInput: ["AND", "OR", "NOT", "id", "tableNumber", "createdAt", "completedAt", "price", "table", "tableid", "orderitems", "session", "sessionid"],
  OrderOrderByWithRelationInput: ["id", "tableNumber", "createdAt", "completedAt", "price", "table", "tableid", "orderitems", "session", "sessionid"],
  OrderWhereUniqueInput: ["id"],
  OrderOrderByWithAggregationInput: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid", "_count", "_avg", "_max", "_min", "_sum"],
  OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid"],
  OrderItemWhereInput: ["AND", "OR", "NOT", "id", "order", "orderid", "foodid", "quantity", "totalPrice", "title"],
  OrderItemOrderByWithRelationInput: ["id", "order", "orderid", "foodid", "quantity", "totalPrice", "title"],
  OrderItemWhereUniqueInput: ["id"],
  OrderItemOrderByWithAggregationInput: ["id", "orderid", "foodid", "quantity", "totalPrice", "title", "_count", "_avg", "_max", "_min", "_sum"],
  OrderItemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "orderid", "foodid", "quantity", "totalPrice", "title"],
  MenuCreateInput: ["updatedat", "title", "sessions", "sections", "fooditems"],
  MenuUpdateInput: ["updatedat", "title", "sessions", "sections", "fooditems"],
  MenuCreateManyInput: ["id", "updatedat", "title"],
  MenuUpdateManyMutationInput: ["updatedat", "title"],
  SectionCreateInput: ["code", "title", "fooditems", "menu", "image"],
  SectionUpdateInput: ["code", "title", "fooditems", "menu", "image"],
  SectionCreateManyInput: ["id", "code", "title", "menuid", "imageid"],
  SectionUpdateManyMutationInput: ["code", "title"],
  FoodItemCreateInput: ["code", "title", "sections", "menu", "price", "available", "options", "image"],
  FoodItemUpdateInput: ["code", "title", "sections", "menu", "price", "available", "options", "image"],
  FoodItemCreateManyInput: ["id", "code", "title", "menuid", "price", "available", "options", "imageid"],
  FoodItemUpdateManyMutationInput: ["code", "title", "price", "available", "options"],
  ImageCreateInput: ["imageURL", "foodImage", "sectionImage"],
  ImageUpdateInput: ["imageURL", "foodImage", "sectionImage"],
  ImageCreateManyInput: ["id", "imageURL"],
  ImageUpdateManyMutationInput: ["imageURL"],
  SessionCreateInput: ["createdAt", "lastOrder", "table", "revenue", "menu", "service", "tables", "orders"],
  SessionUpdateInput: ["createdAt", "lastOrder", "table", "revenue", "menu", "service", "tables", "orders"],
  SessionCreateManyInput: ["id", "createdAt", "lastOrder", "table", "revenue", "menuid"],
  SessionUpdateManyMutationInput: ["createdAt", "lastOrder", "table", "revenue"],
  ServiceCreateInput: ["current", "dummy"],
  ServiceUpdateInput: ["current", "dummy"],
  ServiceCreateManyInput: ["id", "currentid", "dummy"],
  ServiceUpdateManyMutationInput: ["dummy"],
  TableCreateInput: ["tableNumber", "createdAt", "completedAt", "active", "token", "session", "orders"],
  TableUpdateInput: ["tableNumber", "createdAt", "completedAt", "active", "token", "session", "orders"],
  TableCreateManyInput: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid"],
  TableUpdateManyMutationInput: ["tableNumber", "createdAt", "completedAt", "active", "token"],
  OrderCreateInput: ["tableNumber", "createdAt", "completedAt", "price", "table", "orderitems", "session"],
  OrderUpdateInput: ["tableNumber", "createdAt", "completedAt", "price", "table", "orderitems", "session"],
  OrderCreateManyInput: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid"],
  OrderUpdateManyMutationInput: ["tableNumber", "createdAt", "completedAt", "price"],
  OrderItemCreateInput: ["order", "foodid", "quantity", "totalPrice", "title"],
  OrderItemUpdateInput: ["order", "foodid", "quantity", "totalPrice", "title"],
  OrderItemCreateManyInput: ["id", "orderid", "foodid", "quantity", "totalPrice", "title"],
  OrderItemUpdateManyMutationInput: ["foodid", "quantity", "totalPrice", "title"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  SessionListRelationFilter: ["every", "some", "none"],
  SectionListRelationFilter: ["every", "some", "none"],
  FoodItemListRelationFilter: ["every", "some", "none"],
  SessionOrderByRelationAggregateInput: ["_count"],
  SectionOrderByRelationAggregateInput: ["_count"],
  FoodItemOrderByRelationAggregateInput: ["_count"],
  MenuCountOrderByAggregateInput: ["id", "updatedat", "title"],
  MenuAvgOrderByAggregateInput: ["id"],
  MenuMaxOrderByAggregateInput: ["id", "updatedat", "title"],
  MenuMinOrderByAggregateInput: ["id", "updatedat", "title"],
  MenuSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  MenuRelationFilter: ["is", "isNot"],
  ImageRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SectionCountOrderByAggregateInput: ["id", "code", "title", "menuid", "imageid"],
  SectionAvgOrderByAggregateInput: ["id", "code", "menuid", "imageid"],
  SectionMaxOrderByAggregateInput: ["id", "code", "title", "menuid", "imageid"],
  SectionMinOrderByAggregateInput: ["id", "code", "title", "menuid", "imageid"],
  SectionSumOrderByAggregateInput: ["id", "code", "menuid", "imageid"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  JsonNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  FoodItemCountOrderByAggregateInput: ["id", "code", "title", "menuid", "price", "available", "options", "imageid"],
  FoodItemAvgOrderByAggregateInput: ["id", "code", "menuid", "price", "imageid"],
  FoodItemMaxOrderByAggregateInput: ["id", "code", "title", "menuid", "price", "available", "imageid"],
  FoodItemMinOrderByAggregateInput: ["id", "code", "title", "menuid", "price", "available", "imageid"],
  FoodItemSumOrderByAggregateInput: ["id", "code", "menuid", "price", "imageid"],
  DecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  FoodItemRelationFilter: ["is", "isNot"],
  SectionRelationFilter: ["is", "isNot"],
  ImageCountOrderByAggregateInput: ["id", "imageURL"],
  ImageAvgOrderByAggregateInput: ["id"],
  ImageMaxOrderByAggregateInput: ["id", "imageURL"],
  ImageMinOrderByAggregateInput: ["id", "imageURL"],
  ImageSumOrderByAggregateInput: ["id"],
  ServiceRelationFilter: ["is", "isNot"],
  TableListRelationFilter: ["every", "some", "none"],
  OrderListRelationFilter: ["every", "some", "none"],
  TableOrderByRelationAggregateInput: ["_count"],
  OrderOrderByRelationAggregateInput: ["_count"],
  SessionCountOrderByAggregateInput: ["id", "createdAt", "lastOrder", "table", "revenue", "menuid"],
  SessionAvgOrderByAggregateInput: ["id", "table", "revenue", "menuid"],
  SessionMaxOrderByAggregateInput: ["id", "createdAt", "lastOrder", "table", "revenue", "menuid"],
  SessionMinOrderByAggregateInput: ["id", "createdAt", "lastOrder", "table", "revenue", "menuid"],
  SessionSumOrderByAggregateInput: ["id", "table", "revenue", "menuid"],
  SessionRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ServiceCountOrderByAggregateInput: ["id", "currentid", "dummy"],
  ServiceAvgOrderByAggregateInput: ["id", "currentid"],
  ServiceMaxOrderByAggregateInput: ["id", "currentid", "dummy"],
  ServiceMinOrderByAggregateInput: ["id", "currentid", "dummy"],
  ServiceSumOrderByAggregateInput: ["id", "currentid"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TableCountOrderByAggregateInput: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid"],
  TableAvgOrderByAggregateInput: ["id", "tableNumber", "sessionid"],
  TableMaxOrderByAggregateInput: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid"],
  TableMinOrderByAggregateInput: ["id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid"],
  TableSumOrderByAggregateInput: ["id", "tableNumber", "sessionid"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  TableRelationFilter: ["is", "isNot"],
  OrderItemListRelationFilter: ["every", "some", "none"],
  OrderItemOrderByRelationAggregateInput: ["_count"],
  OrderCountOrderByAggregateInput: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid"],
  OrderAvgOrderByAggregateInput: ["id", "tableNumber", "price", "tableid", "sessionid"],
  OrderMaxOrderByAggregateInput: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid"],
  OrderMinOrderByAggregateInput: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid"],
  OrderSumOrderByAggregateInput: ["id", "tableNumber", "price", "tableid", "sessionid"],
  OrderRelationFilter: ["is", "isNot"],
  OrderItemCountOrderByAggregateInput: ["id", "orderid", "foodid", "quantity", "totalPrice", "title"],
  OrderItemAvgOrderByAggregateInput: ["id", "orderid", "foodid", "quantity", "totalPrice"],
  OrderItemMaxOrderByAggregateInput: ["id", "orderid", "foodid", "quantity", "totalPrice", "title"],
  OrderItemMinOrderByAggregateInput: ["id", "orderid", "foodid", "quantity", "totalPrice", "title"],
  OrderItemSumOrderByAggregateInput: ["id", "orderid", "foodid", "quantity", "totalPrice"],
  SessionCreateNestedManyWithoutMenuInput: ["create", "connectOrCreate", "createMany", "connect"],
  SectionCreateNestedManyWithoutMenuInput: ["create", "connectOrCreate", "createMany", "connect"],
  FoodItemCreateNestedManyWithoutMenuInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  SessionUpdateManyWithoutMenuInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SectionUpdateManyWithoutMenuInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FoodItemUpdateManyWithoutMenuInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  FoodItemCreateNestedManyWithoutSectionsInput: ["create", "connectOrCreate", "connect"],
  MenuCreateNestedOneWithoutSectionsInput: ["create", "connectOrCreate", "connect"],
  ImageCreateNestedOneWithoutSectionImageInput: ["create", "connectOrCreate", "connect"],
  FoodItemUpdateManyWithoutSectionsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MenuUpdateOneRequiredWithoutSectionsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ImageUpdateOneWithoutSectionImageInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  SectionCreateNestedManyWithoutFooditemsInput: ["create", "connectOrCreate", "connect"],
  MenuCreateNestedOneWithoutFooditemsInput: ["create", "connectOrCreate", "connect"],
  FoodItemCreateoptionsInput: ["set"],
  ImageCreateNestedOneWithoutFoodImageInput: ["create", "connectOrCreate", "connect"],
  SectionUpdateManyWithoutFooditemsInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MenuUpdateOneRequiredWithoutFooditemsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  DecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BoolFieldUpdateOperationsInput: ["set"],
  FoodItemUpdateoptionsInput: ["set", "push"],
  ImageUpdateOneWithoutFoodImageInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  FoodItemCreateNestedOneWithoutImageInput: ["create", "connectOrCreate", "connect"],
  SectionCreateNestedOneWithoutImageInput: ["create", "connectOrCreate", "connect"],
  FoodItemUpdateOneWithoutImageInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SectionUpdateOneWithoutImageInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  MenuCreateNestedOneWithoutSessionsInput: ["create", "connectOrCreate", "connect"],
  ServiceCreateNestedOneWithoutCurrentInput: ["create", "connectOrCreate", "connect"],
  TableCreateNestedManyWithoutSessionInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderCreateNestedManyWithoutSessionInput: ["create", "connectOrCreate", "createMany", "connect"],
  MenuUpdateOneWithoutSessionsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ServiceUpdateOneWithoutCurrentInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  TableUpdateManyWithoutSessionInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrderUpdateManyWithoutSessionInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SessionCreateNestedOneWithoutServiceInput: ["create", "connectOrCreate", "connect"],
  SessionUpdateOneWithoutServiceInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  SessionCreateNestedOneWithoutTablesInput: ["create", "connectOrCreate", "connect"],
  OrderCreateNestedManyWithoutTableInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  SessionUpdateOneWithoutTablesInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  OrderUpdateManyWithoutTableInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TableCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  OrderItemCreateNestedManyWithoutOrderInput: ["create", "connectOrCreate", "createMany", "connect"],
  SessionCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  TableUpdateOneRequiredWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OrderItemUpdateManyWithoutOrderInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  SessionUpdateOneRequiredWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OrderCreateNestedOneWithoutOrderitemsInput: ["create", "connectOrCreate", "connect"],
  OrderUpdateOneRequiredWithoutOrderitemsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDecimalFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDecimalWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  SessionCreateWithoutMenuInput: ["createdAt", "lastOrder", "table", "revenue", "service", "tables", "orders"],
  SessionCreateOrConnectWithoutMenuInput: ["where", "create"],
  SessionCreateManyMenuInputEnvelope: ["data", "skipDuplicates"],
  SectionCreateWithoutMenuInput: ["code", "title", "fooditems", "image"],
  SectionCreateOrConnectWithoutMenuInput: ["where", "create"],
  SectionCreateManyMenuInputEnvelope: ["data", "skipDuplicates"],
  FoodItemCreateWithoutMenuInput: ["code", "title", "sections", "price", "available", "options", "image"],
  FoodItemCreateOrConnectWithoutMenuInput: ["where", "create"],
  FoodItemCreateManyMenuInputEnvelope: ["data", "skipDuplicates"],
  SessionUpsertWithWhereUniqueWithoutMenuInput: ["where", "update", "create"],
  SessionUpdateWithWhereUniqueWithoutMenuInput: ["where", "data"],
  SessionUpdateManyWithWhereWithoutMenuInput: ["where", "data"],
  SessionScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "lastOrder", "table", "revenue", "menuid"],
  SectionUpsertWithWhereUniqueWithoutMenuInput: ["where", "update", "create"],
  SectionUpdateWithWhereUniqueWithoutMenuInput: ["where", "data"],
  SectionUpdateManyWithWhereWithoutMenuInput: ["where", "data"],
  SectionScalarWhereInput: ["AND", "OR", "NOT", "id", "code", "title", "menuid", "imageid"],
  FoodItemUpsertWithWhereUniqueWithoutMenuInput: ["where", "update", "create"],
  FoodItemUpdateWithWhereUniqueWithoutMenuInput: ["where", "data"],
  FoodItemUpdateManyWithWhereWithoutMenuInput: ["where", "data"],
  FoodItemScalarWhereInput: ["AND", "OR", "NOT", "id", "code", "title", "menuid", "price", "available", "options", "imageid"],
  FoodItemCreateWithoutSectionsInput: ["code", "title", "menu", "price", "available", "options", "image"],
  FoodItemCreateOrConnectWithoutSectionsInput: ["where", "create"],
  MenuCreateWithoutSectionsInput: ["updatedat", "title", "sessions", "fooditems"],
  MenuCreateOrConnectWithoutSectionsInput: ["where", "create"],
  ImageCreateWithoutSectionImageInput: ["imageURL", "foodImage"],
  ImageCreateOrConnectWithoutSectionImageInput: ["where", "create"],
  FoodItemUpsertWithWhereUniqueWithoutSectionsInput: ["where", "update", "create"],
  FoodItemUpdateWithWhereUniqueWithoutSectionsInput: ["where", "data"],
  FoodItemUpdateManyWithWhereWithoutSectionsInput: ["where", "data"],
  MenuUpsertWithoutSectionsInput: ["update", "create"],
  MenuUpdateWithoutSectionsInput: ["updatedat", "title", "sessions", "fooditems"],
  ImageUpsertWithoutSectionImageInput: ["update", "create"],
  ImageUpdateWithoutSectionImageInput: ["imageURL", "foodImage"],
  SectionCreateWithoutFooditemsInput: ["code", "title", "menu", "image"],
  SectionCreateOrConnectWithoutFooditemsInput: ["where", "create"],
  MenuCreateWithoutFooditemsInput: ["updatedat", "title", "sessions", "sections"],
  MenuCreateOrConnectWithoutFooditemsInput: ["where", "create"],
  ImageCreateWithoutFoodImageInput: ["imageURL", "sectionImage"],
  ImageCreateOrConnectWithoutFoodImageInput: ["where", "create"],
  SectionUpsertWithWhereUniqueWithoutFooditemsInput: ["where", "update", "create"],
  SectionUpdateWithWhereUniqueWithoutFooditemsInput: ["where", "data"],
  SectionUpdateManyWithWhereWithoutFooditemsInput: ["where", "data"],
  MenuUpsertWithoutFooditemsInput: ["update", "create"],
  MenuUpdateWithoutFooditemsInput: ["updatedat", "title", "sessions", "sections"],
  ImageUpsertWithoutFoodImageInput: ["update", "create"],
  ImageUpdateWithoutFoodImageInput: ["imageURL", "sectionImage"],
  FoodItemCreateWithoutImageInput: ["code", "title", "sections", "menu", "price", "available", "options"],
  FoodItemCreateOrConnectWithoutImageInput: ["where", "create"],
  SectionCreateWithoutImageInput: ["code", "title", "fooditems", "menu"],
  SectionCreateOrConnectWithoutImageInput: ["where", "create"],
  FoodItemUpsertWithoutImageInput: ["update", "create"],
  FoodItemUpdateWithoutImageInput: ["code", "title", "sections", "menu", "price", "available", "options"],
  SectionUpsertWithoutImageInput: ["update", "create"],
  SectionUpdateWithoutImageInput: ["code", "title", "fooditems", "menu"],
  MenuCreateWithoutSessionsInput: ["updatedat", "title", "sections", "fooditems"],
  MenuCreateOrConnectWithoutSessionsInput: ["where", "create"],
  ServiceCreateWithoutCurrentInput: ["dummy"],
  ServiceCreateOrConnectWithoutCurrentInput: ["where", "create"],
  TableCreateWithoutSessionInput: ["tableNumber", "createdAt", "completedAt", "active", "token", "orders"],
  TableCreateOrConnectWithoutSessionInput: ["where", "create"],
  TableCreateManySessionInputEnvelope: ["data", "skipDuplicates"],
  OrderCreateWithoutSessionInput: ["tableNumber", "createdAt", "completedAt", "price", "table", "orderitems"],
  OrderCreateOrConnectWithoutSessionInput: ["where", "create"],
  OrderCreateManySessionInputEnvelope: ["data", "skipDuplicates"],
  MenuUpsertWithoutSessionsInput: ["update", "create"],
  MenuUpdateWithoutSessionsInput: ["updatedat", "title", "sections", "fooditems"],
  ServiceUpsertWithoutCurrentInput: ["update", "create"],
  ServiceUpdateWithoutCurrentInput: ["dummy"],
  TableUpsertWithWhereUniqueWithoutSessionInput: ["where", "update", "create"],
  TableUpdateWithWhereUniqueWithoutSessionInput: ["where", "data"],
  TableUpdateManyWithWhereWithoutSessionInput: ["where", "data"],
  TableScalarWhereInput: ["AND", "OR", "NOT", "id", "tableNumber", "createdAt", "completedAt", "active", "token", "sessionid"],
  OrderUpsertWithWhereUniqueWithoutSessionInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutSessionInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutSessionInput: ["where", "data"],
  OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "tableNumber", "createdAt", "completedAt", "price", "tableid", "sessionid"],
  SessionCreateWithoutServiceInput: ["createdAt", "lastOrder", "table", "revenue", "menu", "tables", "orders"],
  SessionCreateOrConnectWithoutServiceInput: ["where", "create"],
  SessionUpsertWithoutServiceInput: ["update", "create"],
  SessionUpdateWithoutServiceInput: ["createdAt", "lastOrder", "table", "revenue", "menu", "tables", "orders"],
  SessionCreateWithoutTablesInput: ["createdAt", "lastOrder", "table", "revenue", "menu", "service", "orders"],
  SessionCreateOrConnectWithoutTablesInput: ["where", "create"],
  OrderCreateWithoutTableInput: ["tableNumber", "createdAt", "completedAt", "price", "orderitems", "session"],
  OrderCreateOrConnectWithoutTableInput: ["where", "create"],
  OrderCreateManyTableInputEnvelope: ["data", "skipDuplicates"],
  SessionUpsertWithoutTablesInput: ["update", "create"],
  SessionUpdateWithoutTablesInput: ["createdAt", "lastOrder", "table", "revenue", "menu", "service", "orders"],
  OrderUpsertWithWhereUniqueWithoutTableInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutTableInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutTableInput: ["where", "data"],
  TableCreateWithoutOrdersInput: ["tableNumber", "createdAt", "completedAt", "active", "token", "session"],
  TableCreateOrConnectWithoutOrdersInput: ["where", "create"],
  OrderItemCreateWithoutOrderInput: ["foodid", "quantity", "totalPrice", "title"],
  OrderItemCreateOrConnectWithoutOrderInput: ["where", "create"],
  OrderItemCreateManyOrderInputEnvelope: ["data", "skipDuplicates"],
  SessionCreateWithoutOrdersInput: ["createdAt", "lastOrder", "table", "revenue", "menu", "service", "tables"],
  SessionCreateOrConnectWithoutOrdersInput: ["where", "create"],
  TableUpsertWithoutOrdersInput: ["update", "create"],
  TableUpdateWithoutOrdersInput: ["tableNumber", "createdAt", "completedAt", "active", "token", "session"],
  OrderItemUpsertWithWhereUniqueWithoutOrderInput: ["where", "update", "create"],
  OrderItemUpdateWithWhereUniqueWithoutOrderInput: ["where", "data"],
  OrderItemUpdateManyWithWhereWithoutOrderInput: ["where", "data"],
  OrderItemScalarWhereInput: ["AND", "OR", "NOT", "id", "orderid", "foodid", "quantity", "totalPrice", "title"],
  SessionUpsertWithoutOrdersInput: ["update", "create"],
  SessionUpdateWithoutOrdersInput: ["createdAt", "lastOrder", "table", "revenue", "menu", "service", "tables"],
  OrderCreateWithoutOrderitemsInput: ["tableNumber", "createdAt", "completedAt", "price", "table", "session"],
  OrderCreateOrConnectWithoutOrderitemsInput: ["where", "create"],
  OrderUpsertWithoutOrderitemsInput: ["update", "create"],
  OrderUpdateWithoutOrderitemsInput: ["tableNumber", "createdAt", "completedAt", "price", "table", "session"],
  SessionCreateManyMenuInput: ["id", "createdAt", "lastOrder", "table", "revenue"],
  SectionCreateManyMenuInput: ["id", "code", "title", "imageid"],
  FoodItemCreateManyMenuInput: ["id", "code", "title", "price", "available", "options", "imageid"],
  SessionUpdateWithoutMenuInput: ["createdAt", "lastOrder", "table", "revenue", "service", "tables", "orders"],
  SectionUpdateWithoutMenuInput: ["code", "title", "fooditems", "image"],
  FoodItemUpdateWithoutMenuInput: ["code", "title", "sections", "price", "available", "options", "image"],
  FoodItemUpdateWithoutSectionsInput: ["code", "title", "menu", "price", "available", "options", "image"],
  SectionUpdateWithoutFooditemsInput: ["code", "title", "menu", "image"],
  TableCreateManySessionInput: ["id", "tableNumber", "createdAt", "completedAt", "active", "token"],
  OrderCreateManySessionInput: ["id", "tableNumber", "createdAt", "completedAt", "price", "tableid"],
  TableUpdateWithoutSessionInput: ["tableNumber", "createdAt", "completedAt", "active", "token", "orders"],
  OrderUpdateWithoutSessionInput: ["tableNumber", "createdAt", "completedAt", "price", "table", "orderitems"],
  OrderCreateManyTableInput: ["id", "tableNumber", "createdAt", "completedAt", "price", "sessionid"],
  OrderUpdateWithoutTableInput: ["tableNumber", "createdAt", "completedAt", "price", "orderitems", "session"],
  OrderItemCreateManyOrderInput: ["id", "foodid", "quantity", "totalPrice", "title"],
  OrderItemUpdateWithoutOrderInput: ["foodid", "quantity", "totalPrice", "title"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

