import React from "react";
import { Link } from "react-router-dom";

class Search extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="row form-row mb-5 row">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                placeholder="Seach a movie"
                onChange={this.props.filterFunc}
              />

            </div>
              <div className="col-2">
                <Link to="/add" type="button" className="btn btn-md btn-danger" style={{float:"right"}}>Add Move</Link>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
