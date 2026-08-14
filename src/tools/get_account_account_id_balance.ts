import { requestUpstream } from "../upstream.js";

/**
 * get_account_account_id_balance — Get Account Balance
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function get_account_account_id_balanceHandler(args: { accountId: string }) {
  return requestUpstream("GET", "/account/account/{id}/balance", args || {});
}
