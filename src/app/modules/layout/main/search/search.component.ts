import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, find, map } from 'rxjs';
import { DiscoverMovies, MovieDetails } from 'src/app/core/helpers/models/movies.model';
import { SearchService } from './search.service';
import { MovieService } from 'src/app/core/services/movie.service';
@Component({
    selector: 'dbi-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss']
})

export class SearchComponent implements OnInit {
    searchControl = new FormControl('', [Validators.minLength(3)])
    ifHaveQuery?: string
    findedMovies?: MovieDetails[]
    url = "https://image.tmdb.org/t/p/w200"
    constructor(private mainService: MainService, private movieService: MovieService, private searchService: SearchService) {
        this.searchControl.valueChanges
            .pipe(
                debounceTime(400),
                map(o => o?.trim())
            )
            .subscribe(query => {
                this.ifHaveQuery = query
                this.searchControl.valid && this.searchedMovies(query!)
            })
    }

    ngOnInit() { }
    sendDetails(movie: MovieDetails) {
        this.movieService.getMovieDetails.next(movie)
    }
    searchedMovies(query: string) {
        if (query !== "") {
            this.searchService.getSearchedMovie(query).subscribe((test: DiscoverMovies) => {
                this.findedMovies = test.results
            })
        }
    }
    backDashBoard(changeTab: string) {
        this.mainService.selectedTab.next(changeTab)
    }
}