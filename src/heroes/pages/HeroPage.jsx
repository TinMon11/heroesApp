import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { GetHeroeById } from '../helpers'

export const HeroPage = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const hero = useMemo(()=> GetHeroeById(id), [id]);

    const onNavigateBack = ()=> {
        navigate(-1) //navega a la pagina anterior que estuvo
    }


    if (!hero) { 
        return <Navigate to ='/marvel'/>
    }

    return (
        <div className="row mt-5 mx-auto">
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img 
                src={`/assets/heroes/${id}.jpg`}
                alt={hero.superhero}
                className='img-thumbnail' />
            </div>
            <div className="col-8 animate__animated animate__slideInRight">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'><b>Alter Ego: </b>{hero.alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
                    <li className='list-group-item'><b>First Appearence: </b>{hero.first_appearance}</li>
                </ul>

                <h5 className='mt-5'>Characters</h5>
                <p>{hero.characters}</p>

            <button className='btn btn-outline-primary'
            onClick={onNavigateBack}>
                Back
            </button>

            </div>

        </div>
    )
}
