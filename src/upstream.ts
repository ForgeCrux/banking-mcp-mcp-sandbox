const BASE_URL = process.env.UPSTREAM_BASE_URL || "http://localhost:8080";
const AUTH_TYPE: string = "none";
const AUTH_HEADER = process.env.UPSTREAM_AUTH_HEADER || "Authorization";

function headers(): Record<string, string> {
  const result: Record<string, string> = { "Accept": "application/json", "Content-Type": "application/json" };
  const value = process.env.UPSTREAM_AUTH_VALUE || process.env.UPSTREAM_AUTH_TOKEN || process.env.UPSTREAM_API_KEY;
  if (value) result[AUTH_HEADER] = AUTH_TYPE === "bearer" && AUTH_HEADER.toLowerCase() === "authorization" ? `Bearer ${value}` : value;
  return result;
}

function parseBody(text: string): string {
  try { return JSON.stringify(JSON.parse(text), null, 2); } catch { return text; }
}

export async function requestUpstream(method: string, path: string, input: Record<string, any>) {
  const args = { ...(input || {}) };
  const resolvedPath = path.replace(/\{([^}]+)\}/g, (_match, key) => encodeURIComponent(String(args[key] ?? "")));
  for (const key of Object.keys(args)) if (path.includes(`{${key}}`)) delete args[key];
  const url = new URL(resolvedPath, BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`);
  if (["GET", "HEAD", "DELETE"].includes(method)) Object.entries(args).forEach(([key, value]) => url.searchParams.set(key, String(value)));
  const response = await fetch(url, {
    method,
    headers: headers(),
    body: ["GET", "HEAD", "DELETE"].includes(method) ? undefined : JSON.stringify(args),
  });
  const text = await response.text();
  const content = [{ type: "text" as const, text: parseBody(text) }];
  return response.ok ? { content } : { isError: true, content };
}

export async function readUpstreamResource(uri: string) {
  const path = uri.replace(/^api:\/\//, "") || "/";
  const response = await fetch(new URL(path, BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`), { headers: headers() });
  const text = await response.text();
  return { contents: [{ uri, mimeType: response.headers.get("content-type") || "application/json", text: parseBody(text) }] };
}
