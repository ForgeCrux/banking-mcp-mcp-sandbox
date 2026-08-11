import { requestUpstream } from "../upstream.js";

/**
 * get_accounts_account_id — Get Account Details
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function get_accounts_account_idHandler(args: { accountId: string }) {
  return requestUpstream("GET", "/accounts/account/{id}", args || {});
}
