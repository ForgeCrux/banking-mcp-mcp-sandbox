import { describe, it, expect } from "vitest";
import { post_customersHandler } from "../src/tools/post_customers";
import { get_customers_customer_idHandler } from "../src/tools/get_customers_customer_id";
import { post_accountsHandler } from "../src/tools/post_accounts";
import { get_accounts_account_idHandler } from "../src/tools/get_accounts_account_id";
import { get_accounts_account_id_balanceHandler } from "../src/tools/get_accounts_account_id_balance";
import { post_transactions_transferHandler } from "../src/tools/post_transactions_transfer";
import { get_transactions_transaction_idHandler } from "../src/tools/get_transactions_transaction_id";
import { post_auth_loginHandler } from "../src/tools/post_auth_login";

describe("post_customers", () => {
  it("returns a content array", async () => {
    const result = await post_customersHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("get_customers_customer_id", () => {
  it("returns a content array", async () => {
    const result = await get_customers_customer_idHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("post_accounts", () => {
  it("returns a content array", async () => {
    const result = await post_accountsHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("get_accounts_account_id", () => {
  it("returns a content array", async () => {
    const result = await get_accounts_account_idHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("get_accounts_account_id_balance", () => {
  it("returns a content array", async () => {
    const result = await get_accounts_account_id_balanceHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("post_transactions_transfer", () => {
  it("returns a content array", async () => {
    const result = await post_transactions_transferHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("get_transactions_transaction_id", () => {
  it("returns a content array", async () => {
    const result = await get_transactions_transaction_idHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

describe("post_auth_login", () => {
  it("returns a content array", async () => {
    const result = await post_auth_loginHandler({} as any);
    expect(result).toBeTruthy();
    expect(result.content).toBeDefined();
    expect(Array.isArray(result.content)).toBe(true);
  });
});

