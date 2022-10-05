import { heroes } from '../data/Heroes'

export const GetHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics']

    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`)
    } else {

        return heroes.filter(heroe => heroe.publisher === publisher)

    }
}