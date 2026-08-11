import { requestUpstream } from "../upstream.js";

/**
 * get_customers_customer_id — Get Customer Details
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function get_customers_customer_idHandler(args: { customerId: string }) {
  return requestUpstream("GET", "/customers/customer/{id}", args || {});
}
