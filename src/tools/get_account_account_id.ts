import { requestUpstream } from "../upstream.js";

/**
 * get_account_account_id — Get Account Details
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function get_account_account_idHandler(args: { accountId: string }) {
  return requestUpstream("GET", "/account/account/{id}", args || {});
}
