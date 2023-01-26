import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

function Addmovie() {
   
    const dispatch = useDispatch()
    const [moviename, setMoviename] = useState("");

    function addshow(){
        
        dispatch({type: 'ADD_ITEM', payload: moviename})   
        console.log(moviename);
        setMoviename('')
    }

    return (
        <div>
            <h2 className='mt-5 text-center'>Add Movie to the list</h2>

            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <input type="text" value={moviename} onChange={(e) => { setMoviename(e.target.value) }}
                        placeholder="Add a movie name" style={{display: 'inline'}} className='form-control w-75 m-2' />
                    <button onClick={addshow} className='btn btn-success'> Add Movie </button>
                    </div>
            </div>

        </div>
    )
}

export default Addmovie
