import { redux } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Addmovie from "./Addmovie";
import movieReducer from "./movieReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Movielist from './Movielist'


function App() {
  const store = createStore(movieReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Addmovie />
        <Movielist />
      </Provider>
    </div>
  );
}

export default App;
