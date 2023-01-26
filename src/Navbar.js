import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const movieObj = useSelector(store => store)

    return (
        <div>
           <h1 className='m-3 text-center'>Movie Router Assignment 2</h1>
           <h2 className='m-3 text-center text-danger'>Movie Count: {movieObj.moviecount.length}</h2>
        </div>
    )
}

export default Navbar
