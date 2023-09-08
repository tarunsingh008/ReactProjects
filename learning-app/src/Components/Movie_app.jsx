// import "../CSS/app.css";
import "../CSS/Employee_app.css";
import Header from "./Header";
import Footer from "./Foooter";
import Movie from "./Movie";
import movies from "../movie.json";
import { Alert } from "@mui/material";


// These two material ui components are installed
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material

function Movie_app({ menu: MiniDrawer }) {
  

  return (
    <div className="main">
      <MiniDrawer />
      {/* <Header data=" This is data from props" /> */}
      <div className="cards-container">
      {movies.map((element, index) => {
        return (
          <Movie
            key={index}
            imdbID={element.imdbID}
            title={element.Title}
            year={element.Year}
            poster={element.Poster}
          />
        );
      })}
    </div>
      <Footer />
    </div>
  );
}
// other way to export is as object, so while improrting also import as object example below
// export {App}
// import {App} from './App'

export default Movie_app;
//import App from './Components/App';
//import xxy from './Components/App'; as names work nt required App
