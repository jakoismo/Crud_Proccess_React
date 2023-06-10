import React from "react";

class MovieList extends React.Component {
  render() {
    console.log(this.props.movies);
    return (
      <div className="row">
        {this.props.movies.map((movie, i) => {
          return (
            <div className="col-lg-4" key={movie.id}>
              <div className="card mb-4 shadow-sm">
                <img
                  src={movie.imageURL}
                  className="card-img-top"
                  alt="Movie"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.name}</h5>
                  <p className="card-text">{movie.overview}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-md btn-outline-danger"
                      onClick={() => this.props.d(movie)}
                    >
                      Delete
                    </button>

                    <button
                      type="button"
                      className="btn btn-md btn-outline-primary"
                      onClick={() => this.props.edit(movie)}
                    >
                      Edit
                    </button>
                    <h2>
                      <span
                        className="badge badge-info"
                        style={{ backgroundColor: "green" }}
                      >
                        {movie.rating}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
