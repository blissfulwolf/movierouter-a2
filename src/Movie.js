import React , {useState} from 'react'
import {useDispatch} from 'react-redux'

function Movie({ movie }) {
    const dispatch = useDispatch()
    const [show, setshow] = useState('none')
    const [newmovie, setnewmovie] = useState('')

    function editmovie() {
        setshow('inline')
        setnewmovie('')
    }

    // send the newmovie to the movieReducer onClick on the Edit Submit button
    // in the movieReducer will have a function for this SUBMIT TYPE
    function submit(){
        dispatch({type: 'SUBMIT', payload:{oldmovie:movie, newmovie:newmovie}})
        // remove the text box after clicking the submit button    
        setshow('none')   
        setnewmovie('')

    }    

    return (
        <div>
            <div className="mt-3 row text-center">

                <div className="col-md-8">
                    <h1>{movie}</h1>
                </div>
                <div className="col-md-2">
                    <button className='btn btn-primary m-2' onClick={editmovie}>Edit</button>
                    <button className='btn btn-danger m-2'>Delete</button>
                </div>
            </div>
            <div className="col-md-9 text-center">
                <input type="text" style={{display:show}} value={newmovie} onChange={(e)=>setnewmovie(e.target.value)}/>
                <button style={{display:show}} onClick={submit} className='btn btn-warning m-2'>Submit</button>
            </div>
        </div>

    )
}

export default Movie
