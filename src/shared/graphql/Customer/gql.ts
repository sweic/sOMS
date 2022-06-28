import { gql } from "@apollo/client";

export const customerCache = gql`
  query customerCache {
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
        title
        image {
          id
          imageURL
        }
        fooditems {
          id
          title
          image {
            id
            imageURL
          }
        }
      }
      fooditems {
        id
        title
        image {
          id
          imageURL
        }
      }
    }
  }
`;

export const customerSectionsCache = gql`
  query customerSectionsCache {
    sections {
      id
      title
      image {
        id
        imageURL
      }
      fooditems {
        id
      }
    }
  }
`;
export const customerFoodItemsCache = gql`
  query customerFoodItemsCache {
    fooditems {
      id
      image {
        id
        imageURL
      }
      title
    }
  }
`;

export const customerFoodItemFragment = (id: string | undefined) => gql`
    fragment FoodItem${id} on FoodItem {
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
`;

export const cartQuery = gql`
  query cartQuery {
    serializedCart
  }
`;

export const orderQuery = gql`
  query orderQuery {
    orders {
      id
      price
      createdAt
      completedAt
      orderitems {
        id
        foodid
        quantity
        totalPrice
      }
    }
  }
`;

export const COMPLETE_ORDER = gql`
  subscription Subscription {
    completeOrderNotification
  }
`;

export const customerOrderFragment = (id: string | number) => gql`
    fragment Order${id} on Order {
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
`;
