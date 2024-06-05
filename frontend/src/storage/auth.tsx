import { jwtDecode } from "jwt-decode";
import {
  AuthTokensSchema,
  type IAuthTokensSchema,
} from "@/validators/storage/auth";

interface JwtPayload {
  exp: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export class AuthStorage {
  static AUTH_TOKENS_KEY = "_AUTH_TOKENS_";

  static setAuthTokens(data: IAuthTokensSchema): void {
    const stringifiedData = JSON.stringify(data);
    localStorage.setItem(this.AUTH_TOKENS_KEY, stringifiedData);
  }

  static getAuthTokens(): IAuthTokensSchema | null {
    const stringifiedData = localStorage.getItem(this.AUTH_TOKENS_KEY);
    if (!stringifiedData) return null;
    try {
      const tokens = JSON.parse(stringifiedData) as IAuthTokensSchema;
      return tokens;
    } catch (error) {
      console.error("Error parsing auth tokens from local storage:", error);
      return null;
    }
  }

  static getAuthTokensParsed(): IAuthTokensSchema | null {
    const tokens = this.getAuthTokens();
    if (!tokens) return null;
    try {
      const parsedTokens = AuthTokensSchema.parse(tokens);
      return parsedTokens;
    } catch (error) {
      console.error("Error validating auth tokens:", error);
      return null;
    }
  }

  static clearAuthTokens(): void {
    localStorage.removeItem(this.AUTH_TOKENS_KEY);
  }

  static isTokenExpired(token: string): boolean {
    try {
      const decoded: JwtPayload = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return decoded.exp < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // Treat any error as an indication that the token is invalid/expired
    }
  }

  static isAuthTokensExpired(): boolean {
    const tokens = this.getAuthTokensParsed();
    if (!tokens || !tokens?.access_token) return true;
    return this.isTokenExpired(tokens?.access_token);
  }
}
