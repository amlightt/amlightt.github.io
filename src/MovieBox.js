import { Modal, show, Button } from "react-bootstrap";
import React, { useState } from "react"; 

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({title, original_language, vote_average, poster_path, release_date, overview}) => {
   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);
   
   
    return (
        <div className="card text-center bg-dark mb-4">
            <div className="card-body"> 
                <img className="card-img-top" src={API_IMG + poster_path} />
                <div className="card-body">
                    <button type="button" className="btn btn-light" onClick={handleShow}> About </button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <h2>{title}</h2>
                            <h4> IMBD: {vote_average}</h4>
                            <img className="card-img-top" style={{width: "200px"}} src={API_IMG + poster_path} />
                            <h4> Original language: {original_language}</h4>
                            <br></br>
                            <p> About: {overview}</p>
                            <h6>Release date: {release_date}</h6>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}> Close </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

        </div>
    )
}

export default MovieBox; 