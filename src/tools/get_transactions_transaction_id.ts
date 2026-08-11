import { requestUpstream } from "../upstream.js";

/**
 * get_transactions_transaction_id — Get Transaction Details
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function get_transactions_transaction_idHandler(args: { transactionId: string }) {
  return requestUpstream("GET", "/transactions/transaction/{id}", args || {});
}
