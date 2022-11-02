import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieService {
    apiURL = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getMovies() {
        return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=fd75843b9ebbac99802953a5beb3d1fb')
    }

}