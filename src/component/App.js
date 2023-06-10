import React from "react";
import Search from "../component/Search.js";
import MovieList from "../component/MovieList.js";
import AddMovie from "../component/AddMovie.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditMovie from './EditMove.js'
import axios from "axios";

class App extends React.Component {
  state = {
    movie: [],
    searchMovie: "",
    showModal:false,
    selectedMovie:null
  };

  // async componentDidMount() {
  //   const Url = "http://localhost:3002/movie";
  //   const responce = await fetch(Url);
  //   console.log(responce);
  //   const a = await responce.json();
  //   this.setState({ movie: a });
  // }

  async componentDidMount() {
   this.getMovie();
   console.log("Salam")
  }

  getMovie= async()=>{
    const responce = await axios.get("http://localhost:3002/movie");
    this.setState({ movie: responce.data });
  }



  deleteMovie = async (movie) => {
    const baseURL = `http://localhost:3002/movie/${movie.id}`;
    await fetch(baseURL, {
      method: "DELETE",
    });
    const newMovieList = this.state.movie.filter((m) => m.id !== movie.id);
    console.log(newMovieList);
    this.setState({ movie: newMovieList });
  };


  


  // deleteMovie = async (movie) => {
  //   await axios.delete(`http://localhost:3002/movie/${movie.id}`);
  //   const newMovieList = this.state.movie.filter((m) => m.id !== movie.id);
  //   console.log(newMovieList);
  //   this.setState({ movie: newMovieList });
  //   console.log(movie.id)
  // };





  addMovie = async (movie2) => {

    var random_string='';
    var characters="ABCDEFGH0123456789abcdefgh";
    for(let i=0;i<characters.length;i++){
      random_string+=characters.charAt(Math.floor(Math.random()*characters.length))
    }
    movie2.id=random_string;

    console.log(movie2)
    const url = "http://localhost:3002/movie";
     await axios.post(url,movie2);
    this.setState({ movie:this.state.movie.concat([movie2])});
    console.log(this.state.movie)
  };




  movieFilter = (event) => {
    console.log(event.target.value);
    this.setState({ searchMovie: event.target.value });

  };


  editMovie=(movie)=>{
    this.setState({showModal:true})
    this.setState({selectedMovie:movie})
  }

  updateMovie= async (movie)=>{
    const url = `http://localhost:3002/movie/${this.state.selectedMovie.id}`;
    await axios.put(url,movie)
       this.setState({ showModal: false });
       this.setState({ selectedMovie: null});
       this.getMovie()
  }

  render() {
    let filteredMovie = this.state.movie.filter((movie) => {
      return (
        movie.name
          .toLowerCase()
          .indexOf(this.state.searchMovie.toLowerCase()) !== -1
      );
    });
    return (
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12 mt-3">
                      <Search filterFunc={this.movieFilter} />
                    </div>
                    <MovieList
                      movies={filteredMovie}
                      d={this.deleteMovie}
                      edit={this.editMovie}
                    />
                    {this.state.showModal ? (
                      <EditMovie
                        editMovie={this.state.selectedMovie}
                        updateFunc={(movie) => this.updateMovie(movie)}
                      />
                    ) : null}
                  </div>
                </React.Fragment>
              }
            />
            <Route
              path="/add"
              element={
                <AddMovie onAddMovie={(movie2) => this.addMovie(movie2)} />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
