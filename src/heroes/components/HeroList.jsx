import { useMemo } from 'react'
import { GetHeroesByPublisher } from '../helpers/GetHeroesByPublisher'
import { HeroCard } from './HeroCard'


export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => GetHeroesByPublisher(publisher), [publisher]) 

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                heroes.map((heroe) => (
                    <HeroCard key={heroe.id} {...heroe} />
                ))
            }
        </div>
    )
}
