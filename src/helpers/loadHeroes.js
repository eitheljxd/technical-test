import { fetchApi } from "./fetch";
export const loadHeroes = async () => {
  const herosObj = await fetchApi("rrafols/mobile_test/master/data.json");
  const heroes = [];
  herosObj.forEach((hero) => {
    heroes.push({
      id: hero.id,
      ...hero,
    });
  });
  return heroes;
};
