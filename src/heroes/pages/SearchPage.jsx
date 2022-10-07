import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import queryString from 'query-string'
import { HeroCard } from '../components'
import { GetHeroesByName } from '../helpers'

export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = ''} = queryString.parse(location.search)

    const heroes = GetHeroesByName(q);

    const showSearch = (q.length === 0) // esto devuelve true o false
    const showError = (q.length > 0) && (heroes.length === 0) // esto devuelve true o false

    const { searchText, onInputChange } = useForm({
        searchText: q,
    })

    const onSearchSubmit = (event) => {
        event.preventDefault()
        if (searchText.trim().length <= 1) return;

        navigate(`?q=${searchText.toLowerCase().trim()}`)
    }


    return (
        <>
            <h1 className='text-center mt-2'>Search By Hero</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input type="text"
                            placeholder='Hero Name'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={onInputChange} />
                    </form>
                    <button className='btn btn-outline-primary mt-2'>Search</button>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    
                    <div className="alert alert-primary animate__animated animate__fadeIn" 
                    style={{display: showSearch ? '' : 'none'}}>Search a Hero</div>

                    <div className="alert alert-danger animate__animated animate__fadeIn"
                    style={{display: showError ? '' : 'none'}}>Hero <b>{q}</b> not found</div>
                    
                    {heroes.map(
                        hero => (<HeroCard key={hero.id} {...hero} />))
                    }

                </div>
            </div>
        </>
    )
}
