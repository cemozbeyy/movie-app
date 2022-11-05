import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DiscoverMovies } from '../helpers/models/movies.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
    apiURL = environment.apiUrl;
    apiKey = "api_key=fd75843b9ebbac99802953a5beb3d1fb"
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

    topRatedMovies() {
        return this.http.get<DiscoverMovies>(this.apiURL + '/movie/top_rated?' + this.apiKey)

    }

}