
import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=94816e01609f476e7c259c0cd70d5395";
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=94816e01609f476e7c259c0cd70d5395&query";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
      console.log(data)
      setMovies(data.results);
    })
  }, []);

  const searchMovie = async(e) => {
    e.preventDefault();
    console.log("searching");

    try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=94816e01609f476e7c259c0cd70d5395&query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovies(data.results)
    }
    catch(e) {
      console.log(e);
    }
  } 

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }

  return (
    <>
      <Navbar bg="light" expand="lg" variant="light">
        <Container fluid>
          <Navbar.Brand href="./home"> MOVIES FOR YOU </Navbar.Brand>
          <Navbar.Brand href="./home"> Most Popular movies </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
            <Navbar.Collapse id='navbarScroll'>
              <Nav 
              className="me-auto my-2 my-lg-3" 
              style={{maxHeight:"100px"}} 
              navbarScroll>
              </Nav>
                <Form className='d-flex' onSubmit={searchMovie}>
                  <FormControl 
                  type='search' 
                  placeholder='Look-up for movie' 
                  className='me-2' 
                  aria-label='search' 
                  name='query'
                  value={query} 
                  onChange={changeHandler}>
                  </FormControl> 
                  <Button 
                  variant="secondary" 
                  type="submit"> Search 
                  </Button>
                </Form>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='container' >
        <div className='grid'> 
          {movies.map((movieReq) => 
          <MovieBox key={movieReq.id} {...movieReq}/>)}
        </div>   
      </div>
    </>

  );
}

export default App;
