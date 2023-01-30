const initialMovie = {
  moviecount: [],
};

function movieReducer(state = initialMovie, action) {
  switch (action.type) {
    // adding new movie
    case "ADD_ITEM":
      return {
        ...state,
        moviecount: [...state.moviecount, action.payload],
      };
    // Edit the movie title
    case "SUBMIT":
      return {
        ...state,
        moviecount: state.moviecount.map((movie) => {
          if (movie == action.payload.oldmovie) 
              movie = action.payload.newmovie

              return movie
        })
      };

      // Delete movie
      case "DELETE_MOVIE":
        return {
          ...state,
          moviecount: state.moviecount.filter((task)=>task!=action.payload)
        }
  }

  return state;
}

export default movieReducer;
