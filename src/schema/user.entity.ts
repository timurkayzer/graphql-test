import { Movie } from "./movie.entity";

export interface User {
    id: number;
    name: string;
    login: string;
    age: number,
    nationality: string;
    friends?: User[];
    favoriteMovies: Movie[];
}