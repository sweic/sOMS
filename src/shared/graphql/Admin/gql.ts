import { gql } from "@apollo/client";

export const queryCache = gql`
  query queryCache {
    newMenus {
      id
      title
      updatedat
      sections {
        id
        title
      }
      fooditems {
        id
        title
      }
    }
    sections {
      id
      title
      code
      menu {
        id
        title
      }
      fooditems {
        id
        title
      }
      image {
        id
        imageURL
      }
    }
    foodItems {
      id
      title
      code
      price
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

export const orderCache = gql`
  query orderCache {
    tables {
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
      table
      revenue
    }
    service {
      id
    }
  }
`;

export const ORDER_SUBSCRIPTION = gql`
  subscription Subscription {
    newOrderNotification {
      id
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
          }
        }
        tables {
          id
          tableNumber
          active
          token
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
