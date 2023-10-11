import { ListZellerCustomers } from "../queries/user-queries";

export const mocks = [
  {
    request: {
      query: ListZellerCustomers,
    },
    result: {
      data: {
        listZellerCustomers: {
          "__typename": "TestCustomerConnection",
          "items": [
            {
              "__typename": "TestCustomer",
              "email": "manageruser@gmail.com",
              "id": "manager-user-id",
              "name": "Test Manager",
              "role": "MANAGER"
            },
            {
              "__typename": "TestCustomer",
              "email": "adminuser@gmail.com",
              "id": "admin-user-id",
              "name": "Test Admin",
              "role": "ADMIN"
            },
          ]
        }
      }
    }
  }
];

export const errorMocks = [
  {
    request: {
      query: ListZellerCustomers,
    },
    error: new Error("An error occurred"),
  }
];
