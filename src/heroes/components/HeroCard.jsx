import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    
    const charactersByHeroe = (<p className='card-text'> {characters} </p>)
    
    const heroImage = `/assets/heroes/${id}.jpg`

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card h-100">
                <div className="row no-gutters align-items-center">
                    
                    <div className="col-4 ">
                        <img src={heroImage} alt={superhero} className='card-img' />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{superhero}</h5>
                            <p className="card-text"> {alter_ego} </p>

                            {
                                (alter_ego !== characters) && charactersByHeroe
                            }

                            <p className="card-text">
                                <small className='text-muted'>{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`} className='btn btn-outline-primary'>
                                Mas Info
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
