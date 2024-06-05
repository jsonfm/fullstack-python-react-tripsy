import { Http } from "@/lib/http";
import type { BaseResponse } from "@/types/common/responses";
import type { IAuthTokensSchema } from "@/validators/storage/auth";
import { AuthStorage } from "@/storage/auth";

export class AuthService {
  login = async (email: string, password: string) => {
    const response = await Http.post<BaseResponse<IAuthTokensSchema>>(
      `/api/v1/auth/login`,
      { email, password }
    );
    const tokens = response?.data?.data;
    if (!tokens?.access_token) {
      throw new Error(`No access`);
    }
    AuthStorage.setAuthTokens(tokens);
    return tokens;
  };
  logout = async () => {
    AuthStorage.clearAuthTokens();
  };
}

export const authService = new AuthService();
