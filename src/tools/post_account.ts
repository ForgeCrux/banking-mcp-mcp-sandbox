import { requestUpstream } from "../upstream.js";

/**
 * post_account — Create Account
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function post_accountHandler(args: { [key: string]: any }) {
  return requestUpstream("POST", "/account", args || {});
}
