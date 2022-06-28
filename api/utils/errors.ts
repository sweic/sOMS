import { ApolloError } from "apollo-server-core";

export class CustomerValidationError extends ApolloError {
  constructor(message: string) {
    super(message, "100");
    Object.defineProperty(this, "name", { value: "CustomerValidationError" });
  }
}

export class UnavailableItemsError extends ApolloError {
  constructor(message: string, fooditemNames: string[]) {
    super(message, "101", {
      unavailableFoodItems: fooditemNames,
    });
    Object.defineProperty(this, "name", { value: "UnavailableItemsError" });
  }
}

export class LastOrderError extends ApolloError {
  constructor(message: string) {
    super(message, "102");
    Object.defineProperty(this, "name", { value: "LastOrderError" });
  }
}

export class NoServiceError extends ApolloError {
  constructor(message: string) {
    super(message, "103");
    Object.defineProperty(this, "name", { value: "NoServiceError" });
  }
}

export class DatabaseError extends ApolloError {
  constructor(message: string) {
    super(message, "104");
    Object.defineProperty(this, "name", { value: "InternalError" });
  }
}
export class AdminError extends ApolloError {
  constructor(message: string) {
    super(message, "105");
    Object.defineProperty(this, "name", { value: "AdminError" });
  }
}
