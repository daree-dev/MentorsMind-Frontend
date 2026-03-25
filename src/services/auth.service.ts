import { request } from "./request";

export default class AuthService {
  async login(email: string, password: string) {
    return request<{ accessToken: string; refreshToken: string }>({
      method: "POST",
      url: "/auth/login",
      data: { email, password },
    });
  }
}
