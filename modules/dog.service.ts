import axios from "axios";
import { Timer } from "./dog.decorator";

export class RandomDog {
  private url: string = "https://dog.ceo/api/breeds/image/random";

  @Timer()
  async fetch() {
    const { data } = await axios.get(this.url);
    return data;
  }
}
