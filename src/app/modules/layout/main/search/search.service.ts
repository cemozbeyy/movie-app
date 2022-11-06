import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DiscoverMovies } from 'src/app/core/helpers/models/movies.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SearchService {
    apiURL = environment.apiUrl;
    apiKey = "api_key=fd75843b9ebbac99802953a5beb3d1fb"

    constructor(private http: HttpClient) { }

    getSearchedMovie(query: string) {
        return this.http.get<DiscoverMovies>(this.apiURL + '/search/movie?' + this.apiKey + "&query=" + query)
    }

}