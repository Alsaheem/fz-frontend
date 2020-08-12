import React, { useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = React.useState("");
  const [suffix, setSuffix] = React.useState("");
  const [data, setData] = React.useState([]);
  const [links, setLinks] = useState([]);

  const handleOpen = () => setOpen(!open);

  const prefix = "https://fzmovies.net/";

  const handleSearch = (e) => {
    e.preventDefault();
    setValue("");
    setOpen(!open);
    setLoading(true);
    axios
      .post(`https://fz-movie-scraper.herokuapp.com/api_find/`, { searchword: value })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err.response.status);
        setLoading(false);
        setError(true);
      });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleGenerate = (movie) => {
    setSuffix(movie);
    console.log(suffix);
    setLoading(true);
    let fullDownloadLink = prefix + suffix.toString();
    axios
      .post(`https://fz-movie-scraper.herokuapp.com/api_generate/`, {
        movie_to_download: fullDownloadLink,
      })
      .then((res) => {
        console.log(res.data.data);
        setLoading(false);
        setError(false);
        setLinks(res.data.data);
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div>
      <div>
        <div
          id="myOverlay"
          style={{ display: open ? "block" : "none" }}
          className="overlay"
        >
          <span className="closebtn" onClick={handleOpen} title="Close Overlay">
            ×
          </span>
          <div className="overlay-content mr-4">
            <form className="" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search.."
                name="search"
                required
                autoFocus
                value={value}
                onChange={handleChange}
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </div>
        <center>
          <h2 className="display-4" style={{ marginTop: 100 }}>
            Download Movies Faster
          </h2>
          <p>
            Download Movies AdFree , get your download started in less than 10
            seconds
          </p>
          <p class="love">Made with <i className="fa fa-heart fa-2x"></i> by <a className="" style={{ "fontSize": "20px" }} href="https://github.com/21toffy">Toffy</a> and <a className="" style={{ "fontSize": "20px" }}   href="https://github.com/alsaheem">Alsaheem</a></p>
          <button
            style={{ marginBottom: 50 }}
            className="btn openBtn"
            onClick={handleOpen}
          >
            Click to Search...
          </button>
        </center>
      </div>

      <div className="container-fluid">
        <h2>Data Shows here ....</h2>

        {loading && <Loading />}
        {error && (
          <Error
            error={error}
            setError={setError}
            message="An Error Occoured...please try again"
          />
        )}

        <div className="row">
          {showModal && (
            <Detail
              setShowModal={setShowModal}
              showModal={showModal}
              downloadLinks={links}
            />
          )}
          {data ? (
            data.map((movie, index) => {
              return (
                <div className="col-sm-6 col-lg-4 mb-4" key={index}>
                  <div className="card rounded shadow">
                  <img class="card-img-top" src={movie[2]} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title text-capitalize font-weignt-bold">{movie[0][1]}</h5>
                      <p className="card-text text-dark">{movie[0][7]}</p>
                      <button

                        className="btn btn-primary"
                        onClick={() => {
                          setSuffix(movie[1]);
                          handleGenerate(movie[1]);
                        }}
                      >
                        Generate Link
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className=""></div>
          )}
        </div>
      </div>
    </div>
  );
}

const Detail = ({ showModal, setShowModal, downloadLinks }) => {
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {downloadLinks.map((link, index) => {
          return (
            <Modal.Body>
              <a href={link} target="_blank">
                {" "}
                Download Link {index}{" "}
                <span>
                  <i className="fa fa-hand-o-left fa-3x"></i>
                </span>
              </a>
            </Modal.Body>
          );
        })}
      </Modal>
    </>
  );
};

export const Loading = () => {
  return (
    <div className="">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const Error = ({ message, setError, error }) => {
  return (
    <Alert variant="danger" onClose={() => setError(false)} dismissible>
      <p>{message}</p>
    </Alert>
  );
};
