import React from 'react'
import Card from 'react-bootstrap/Card';



const MovieCard = ({movie}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>title : {movie.title}</Card.Title>
        <Card.Title>description :{movie.description} </Card.Title>
        <Card.Title>rating :{movie.rating} </Card.Title>
          </Card.Body>
    </Card>
  );
}
export default MovieCard