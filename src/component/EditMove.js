import React from "react";
import serialize from "form-serialize";


class EditMovie extends React.Component {
    changeMovie=(e)=>{
       e.preventDefault();
        const obj = serialize(e.target, { hash: true });
        this.props.updateFunc(obj)

    }
  render() {



    return (
      <div className="mt-5">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Movie
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.changeMovie}>
                <div>
                  <div className="form-group">
                    <label htmlFor="editName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="editName"
                      name="name"
                      autoComplete="off"
                      defaultValue={this.props.editMovie.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="editRating">Rating</label>
                    <input
                      type="text"
                      className="form-control"
                      id="editRating"
                      name="rating"
                      autoComplete="off"
                      defaultValue={this.props.editMovie.rating}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="editImageURL">Image Url</label>
                    <input
                      type="text"
                      className="form-control"
                      id="editImageURL"
                      name="imageURL"
                      autoComplete="off"
                      defaultValue={this.props.editMovie.imageURL}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="editOverview">Overview</label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="editOverview"
                      name="overview"
                      autoComplete="off"
                      rows="5"
                      defaultValue={this.props.editMovie.overview}
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Save Change
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditMovie;
