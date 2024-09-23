import "./App.css";
import { useState } from "react";
import data from "./fakeData/movies.json";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { useEffect } from "react";

function App() {
  const [movies, setMovies] = useState(data);
  const [FilterTitle, setFilterTitle] = useState("");
  const [FilterRating, setFilterRating] = useState(50);
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const Add = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  useEffect(() => {
    const filteredMovie = data
      .filter((movie) =>
        movie.title
          .toLocaleLowerCase()
          .includes(FilterTitle.toLocaleLowerCase())
      )
      .filter((movie) => movie.rating <= FilterRating);
    setMovies(filteredMovie);
  }, [FilterTitle, FilterRating]);

  return (
    <div>
      <Filter
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <AddMovie
        setNewMovie={setNewMovie}
        newMovie={newMovie}
        Add={Add}
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
      />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
