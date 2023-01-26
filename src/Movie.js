import React from 'react'

function Movie({movie}) {
    return (
      

        <div>       
            <div className="mt-3 row text-center">
             
         
            <div className="col-md-8">
                <h1>{movie}</h1>
            </div>
            <div className="col-md-2">
                <button className='btn btn-primary m-2'>Edit</button>
                
                <button className='btn btn-danger m-2'>Delete</button>
            </div>

            </div>

        </div>
     
    )
}

export default Movie
