import { RandomDog } from "./modules/dog.service";

async function main() {
  const randomDog = new RandomDog();

  const result = await randomDog.fetch();
  console.log(result);
}

main();
