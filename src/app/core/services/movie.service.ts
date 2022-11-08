import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cast, DiscoverMovies, MovieDetails, Reviews } from '../helpers/models/movies.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
    apiURL = environment.apiUrl;
    apiKey = "api_key=fd75843b9ebbac99802953a5beb3d1fb"
    getMovieDetails = new BehaviorSubject<MovieDetails | null>(null)
    watchList = new BehaviorSubject<MovieDetails | null>(null)
    constructor(private http: HttpClient) { }

    getMovies() {
        return this.http.get<DiscoverMovies>(this.apiURL + '/discover/movie?' + this.apiKey)
            .pipe(map((firstTen: DiscoverMovies) => {
                return firstTen.results.slice(0, 10)
            }))
    }

    getNowPlaying() {
        return this.http.get<DiscoverMovies>(this.apiURL + '/movie/now_playing?' + this.apiKey)
    }

    movieDetails(movieId: number) {
        return this.http.get<MovieDetails>(this.apiURL + '/movie/' + movieId + '?' + this.apiKey)
    }

    upComingMovies() {
        return this.http.get<DiscoverMovies>(this.apiURL + '/movie/upcoming?' + this.apiKey)

    }
    reviews(movieId?: number) {
        return this.http.get<Reviews>(this.apiURL + '/movie/' + movieId + '/reviews?' + this.apiKey)

    }
    cast(movieId?: number) {
        return this.http.get<Cast>(this.apiURL + '/movie/' + movieId + '/credits?' + this.apiKey)

    }
    topRatedMovies() {
        return this.http.get<DiscoverMovies>(this.apiURL + '/movie/top_rated?' + this.apiKey)

    }
    popularMovies() {
        return this.http.get<DiscoverMovies>(this.apiURL + '/movie/popular?' + this.apiKey)

    }
}