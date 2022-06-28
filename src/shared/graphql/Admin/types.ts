export interface OrderCacheQuery {
  tables: {
    id: number;
    tableNumber: number;
    active: boolean;
    token: string;
    createdAt: any;
    orders: {
      id: number;
      price: number;
      tableNumber: number;
      createdAt: any;
      completedAt: any;
      orderitems: {
        id: number;
        totalPrice: string;
        quantity: number;
        foodid: number;
        title: string;
      };
    }[];
    session: {
      id: number;
    };
  }[];
  orders: {
    id: number;
    price: string;
    tableNumber: number;
    createdAt: any;
    completedAt: any;
    orderitems: {
      id: number;
      totalPrice: string;
      quantity: number;
      foodid: number;
      title: string;
    }[];
  }[];
  session: {
    id: number;
    table: number;
  };
}

export type ServiceOrders = OrderCacheQuery["orders"];

export type TableData = OrderCacheQuery["tables"];
export type TableEntity = OrderCacheQuery["tables"][0];

export type Entity = "item" | "section" | "menu";

export interface EntityBasic {
  id: number;
  title: string;
}
interface EntityBasicInfo extends EntityBasic {
  code: number;
}
interface EntityBasicInfoImage extends EntityBasicInfo {
  image: {
    id: number;
    imageURL: string;
  };
}

export interface FoodItemEntity extends EntityBasicInfoImage {
  price: string;
  sections: EntityBasicInfo[];
}

export interface FoodItemEntityMenuParent extends FoodItemEntity {
  menu: EntityBasic;
}

export interface SectionEntityFragment extends EntityBasicInfoImage {
  fooditems: FoodItemEntityMenuParent[];
  menu: EntityBasic;
}

export interface MenuEntityFragment extends EntityBasic {
  updatedat: any;
  sections: SectionEntityFragment[];
  fooditems: FoodItemEntityMenuParent[];
}

export interface FoodItemEntityFragment extends EntityBasicInfoImage {
  price: string;
  available: boolean;
  options: any;
  sections: SectionEntityFragment[];
  menu: EntityBasic;
}

export interface NewMenuInfo extends EntityBasic {
  updatedat: any;
  sections: EntityBasic[];
  fooditems: EntityBasic[];
}

export interface SectionInfo extends EntityBasicInfoImage {
  menu: EntityBasic;
  fooditems: EntityBasic[];
}

export interface FoodItemInfo extends EntityBasicInfoImage {
  price: string;
  sections: EntityBasic[];
  menu: EntityBasic;
}

export type QueryCacheValue = NewMenuInfo[] & SectionInfo[] & FoodItemInfo[];

export type SerializeEntity = "newMenus" | "sections" | "foodItems";

export type QueryCache = {
  [key in SerializeEntity]: QueryCacheValue;
};
