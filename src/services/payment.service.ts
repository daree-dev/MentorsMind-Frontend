import { apiConfig } from "../config/api.config";
import { request } from "../utils/request.utils";

export default class PaymentService {
  async pay(amount: number) {
    request<{ status: string }>({
      method: "POST",
      url: apiConfig.url.payments,
      data: { amount },
    });
  }
}
