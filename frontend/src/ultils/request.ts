const backendUrl = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";
export const BASE_URL = backendUrl.startsWith("http") ? backendUrl : `https://${backendUrl}`;