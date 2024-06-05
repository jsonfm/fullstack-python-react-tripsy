export const Config = {
  API_URL: String(import.meta.env.VITE_APP_API_URL || ""),
};

console.log({ Config }, import.meta.env);
