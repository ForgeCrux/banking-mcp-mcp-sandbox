import { requestUpstream } from "../upstream.js";

/**
 * post_customers — Create Customer
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function post_customersHandler(args: { [key: string]: any }) {
  return requestUpstream("POST", "/customers", args || {});
}
