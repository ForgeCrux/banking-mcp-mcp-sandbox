import { requestUpstream } from "../upstream.js";

/**
 * get_accounts_account_id_balance — Get Account Balance
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function get_accounts_account_id_balanceHandler(args: { accountId: string }) {
  return requestUpstream("GET", "/accounts/account/{id}/balance", args || {});
}
