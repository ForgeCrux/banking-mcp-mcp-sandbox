import { requestUpstream } from "../upstream.js";

/**
 * post_accounts — Create Account
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function post_accountsHandler(args: { [key: string]: any }) {
  return requestUpstream("POST", "/accounts", args || {});
}
