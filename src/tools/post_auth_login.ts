import { requestUpstream } from "../upstream.js";

/**
 * post_auth_login — User Login
 *
 * Side effects: 
 * Implementation hint: 
 */
export async function post_auth_loginHandler(args: { [key: string]: any }) {
  return requestUpstream("POST", "/auth/login", args || {});
}
