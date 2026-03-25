import { request } from "./request";

export default class SessionService {
  async create(mentorId: string) {
    return request<{ status: string }>({
      method: "POST",
      url: "/sessions",
      data: { mentorId },
    });
  }

  async getSession(id: string) {
    return request<{ status: string }>(
      {
        method: "GET",
        url: "/sessions",
        data: { id },
      },
      true,
    );
  }

  async getSessions(args: Record<string, unknown>) {
    return request<{ status: string }>(
      {
        method: "GET",
        url: "/sessions",
        data: { args },
      },
      true,
    );
  }
}
