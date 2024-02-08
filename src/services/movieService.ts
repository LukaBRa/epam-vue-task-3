import HttpService from "./httpService";
import type { Movie } from "@/types/MovieTypes";
 
export default class MovieService extends HttpService {
  static async getAll() {
    const response = await this.request("GET", "/movies");
    return response.data;
  }
 
  static async getSingle(id: number) {
    const movies: Movie[] = await this.getAll();

    return movies.find((movie: Movie) => movie.id == id);
  }
}