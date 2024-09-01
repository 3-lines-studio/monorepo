export function getEnvironment<T = string>(key: string, defaultValue?: T): T {
  return (process.env[key] ?? defaultValue ?? "") as T;
}

export const environment = {
  NODE_ENV: getEnvironment("NODE_ENV", "development"),
  GIT_SHA: getEnvironment("GIT_SHA"),
  LOCAL: false,
  WATCH: !!getEnvironment("WATCH"),
  PORT: 3000,
};
