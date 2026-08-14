import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { post_customersHandler } from "./tools/post_customers.js";
import { get_customers_customer_idHandler } from "./tools/get_customers_customer_id.js";
import { post_accountHandler } from "./tools/post_account.js";
import { get_account_account_idHandler } from "./tools/get_account_account_id.js";
import { get_account_account_id_balanceHandler } from "./tools/get_account_account_id_balance.js";
import { post_transactions_transferHandler } from "./tools/post_transactions_transfer.js";
import { get_transactions_transaction_idHandler } from "./tools/get_transactions_transaction_id.js";
import { post_auth_loginHandler } from "./tools/post_auth_login.js";

import { readUpstreamResource } from "./upstream.js";

/**
 * Build a fresh MCP server instance.
 *
 * We export a FACTORY rather than a singleton so the HTTP
 * transport can hand each new session its own `McpServer`.
 * The MCP SDK rejects a second `initialize` on the same
 * Server instance, so a per-session factory is mandatory
 * for the streamable-http transport.
 */
export function createServer(): McpServer {
  const server = new McpServer({
    name: "banking mcp",
    version: "v1.0.1",
  });

  // ---------- Tools ----------
  server.registerTool("post_customers", {
    description: "Create Customer",
    inputSchema: {  },
  }, post_customersHandler);

  server.registerTool("get_customers_customer_id", {
    description: "Get Customer Details",
    inputSchema: { customerId: z.string() },
  }, get_customers_customer_idHandler);

  server.registerTool("post_account", {
    description: "Create Account",
    inputSchema: {  },
  }, post_accountHandler);

  server.registerTool("get_account_account_id", {
    description: "Get Account Details",
    inputSchema: { accountId: z.string() },
  }, get_account_account_idHandler);

  server.registerTool("get_account_account_id_balance", {
    description: "Get Account Balance",
    inputSchema: { accountId: z.string() },
  }, get_account_account_id_balanceHandler);

  server.registerTool("post_transactions_transfer", {
    description: "Transfer Funds",
    inputSchema: {  },
  }, post_transactions_transferHandler);

  server.registerTool("get_transactions_transaction_id", {
    description: "Get Transaction Details",
    inputSchema: { transactionId: z.string() },
  }, get_transactions_transaction_idHandler);

  server.registerTool("post_auth_login", {
    description: "User Login",
    inputSchema: {  },
  }, post_auth_loginHandler);

  // ---------- Resources ----------
  server.registerResource("post_customers", "api:///customers", {
    description: "Create Customer",
    mimeType: "application/json",
  }, async (uri) => readUpstreamResource(uri.href));

  server.registerResource("get_customers_customerId", "api:///customers/{customerId}", {
    description: "Get Customer Details",
    mimeType: "application/json",
  }, async (uri) => readUpstreamResource(uri.href));

  server.registerResource("post_account", "api:///account", {
    description: "Create Account",
    mimeType: "application/json",
  }, async (uri) => readUpstreamResource(uri.href));

  server.registerResource("get_account_accountId", "api:///account/{accountId}", {
    description: "Get Account Details",
    mimeType: "application/json",
  }, async (uri) => readUpstreamResource(uri.href));

  server.registerResource("get_account_accountId_balance", "api:///account/{accountId}/balance", {
    description: "Get Account Balance",
    mimeType: "application/json",
  }, async (uri) => readUpstreamResource(uri.href));

  server.registerResource("post_transactions_transfer", "api:///transactions/transfer", {
    description: "Transfer Funds",
    mimeType: "application/json",
  }, async (uri) => readUpstreamResource(uri.href));

  server.registerResource("get_transactions_transactionId", "api:///transactions/{transactionId}", {
    description: "Get Transaction Details",
    mimeType: "application/json",
  }, async (uri) => readUpstreamResource(uri.href));

  server.registerResource("post_auth_login", "api:///auth/login", {
    description: "User Login",
    mimeType: "application/json",
  }, async (uri) => readUpstreamResource(uri.href));

  // ---------- Prompts ----------
  server.registerPrompt("use_api_mcp_server", {
    description: "Use the api-mcp-server API endpoints",
    argsSchema: {endpoint: z.string().optional(), parameters: z.string().optional()},
  }, async (args) => ({
    messages: [{ role: "user" as const, content: { type: "text" as const, text: `` } }]
  }));

  return server;
}
