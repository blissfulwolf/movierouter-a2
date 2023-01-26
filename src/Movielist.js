import React from 'react'
import Movie from './Movie'
import {useSelector} from 'react-redux'

function Movielist() {
    const movieObj = useSelector(store=>store)

    const movies = movieObj.moviecount.map(movie=>{
        return (            
                <Movie movie={movie}/>
                )
        })

    return (
        <div>{movies}</div>
    )
}

export default Movielist
