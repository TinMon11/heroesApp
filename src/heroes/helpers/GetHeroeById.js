import { heroes } from "../data/Heroes"

export const GetHeroeById = (id)=> {

    return heroes.find(heroe => heroe.id === id);

}