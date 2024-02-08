import axios from "axios";
 
export default class HttpService {
  static client = axios.create({
    baseURL: "https://tame-erin-pike-toga.cyclic.app/",
  });
 
  static async request(method: string, url: string) {
    const response = await this.client.request({
      method,
      url,
    });
    return response;
  }
}