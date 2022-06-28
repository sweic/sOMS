export interface CustomerFoodItem {
  id: number;
  code: number;
  title: string;
  price: string;
  available: boolean;
  image?: {
    id: number;
    imageURL: string;
  };
}
export interface SerializedCartType {
  serializedCart: {
    [key: string]: CustomerOrderItem;
  };
}

export interface CustomerOrderItem {
  foodid: number;
  quantity: number;
  totalPrice: string;
  title: string;
  price: string;
  imageURL: string;
}
export interface CustomerCacheQuery {
  currentMenu: CurrentMenuQuery;
  customerTable: CustomerTableQuery;
}

export interface CustomerTableQuery {
  id: number;
  tableNumber: number;
  orders: {
    id: number;
    createdAt: any;
    completedAt: any;
    price: string;
    orderitems: {
      id: number;
      foodid: number;
    }[];
  }[];
  session: {
    id: number;
    lastOrder: any;
  };
}

export interface CustomerOrderQuery {
  orders: {
    id: number;
    price: string;
    tableNumber: number;
    createdAt: any;
    completedAt: any;
    orderitems: {
      id: number;
      foodid: number;
      quantity: number;
      totalPrice: string;
      title: string;
    }[];
  }[];
}
export type CustomerOrderItemFragment = CustomerOrderQuery["orders"][0];
export interface CurrentMenuQuery {
  id: number;
  sections: {
    id: number;
    title: string;
    image: {
      id: number;
      imageURL: string;
    };
    fooditems: {
      id: number;
      title: string;
      image: {
        id: number;
      };
    }[];
  }[];
  fooditems: {
    id: number;
    title: string;
    image: {
      id: number;
      imageURL: string;
    };
  }[];
}

export interface CustomerSectionsCacheQuery {
  sections: {
    id: number;
    title: string;
    image: {
      id: number;
      imageURL: string;
    };
    fooditems: {
      id: number;
    }[];
  }[];
}

export interface CustomerFoodItemsCacheQuery {
  fooditems: {
    id: number;
    image: {
      id: number;
      imageURL: string;
    };
    title: string;
  }[];
}

export interface CustomerOrderSection {
  __typename: "Section";
  code: number;
  id: number;
  title: string;
  fooditems: {
    available: boolean;
    code: number;
    id: number;
    image: {
      id: number;
      imageURL: string;
    };
    price: string;
    title: string;
    __typename: "FoodItem";
  }[];
  image: {
    id: number;
    imageURL: string;
  };
}

export interface SerializedCart {}

export interface CurrentSession {
  id: number;
  createdAt: any;
  lastOrder: any;
  table: number;
  orders: {
    id: number;
    tableNumber: number;
    price: string;
    createdAt: any;
    completedAt: any;
    orderitems: {
      id: number;
      totalPrice: string;
      quantity: number;
      foodid: number;
      order: {
        id: number;
      };
    }[];
    session: {
      id: number;
    };
  }[];
  tables: {
    id: number;
    tableNumber: number;
    active: boolean;
    token: string;
    orders: {
      id: number;
      tableNumber: number;
      createdAt: any;
      completedAt?: any | null;
      price: string;
      orderitems: {
        id: number;
        totalPrice: string;
        quantity: number;
        foodid: number;
        order: {
          id: number;
        };
      }[];
      session: {
        id: number;
      };
    }[];
  }[];
  service?: { id: number } | null;
}

export type CurrentSessionOrders = Pick<CurrentSession, "orders">;
export type CurrentSessionTables = Pick<CurrentSession, "tables">;
export type CurrentSessionTableInfo = CurrentSessionTables["tables"][0];
