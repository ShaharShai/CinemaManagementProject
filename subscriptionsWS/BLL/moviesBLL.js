import { getAllMovies } from "../DAL/moviesWS.js";
import Movie from "../models/movieModel.js";

const saveAllToDB = async () => {
   const data = await getAllMovies();
   const movies = data.map(movie =>( {
      "name": movie.name,
      "genres": movie.genres,
      "image": movie.image.original,
      "premiered": movie.premiered
   }))
 
   const result = await Movie.create(movies);
   console.log(`Movies saved to DB: ${result}`);

   return movies;
}

const getAll = async () => {
   // await saveAllToDB();
   const allMovies = Movie.find();
   return allMovies;
}

export { getAll }