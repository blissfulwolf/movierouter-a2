const initialMovie = {
    moviecount: []
}

function movieReducer( state=initialMovie, action){

    switch(action.type){
        case 'ADD_ITEM' : return {
            ...state,
            moviecount : [...state.moviecount, action.payload]
        }
    }


    return state;
}

export default movieReducer;


