import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
    selector: 'dbi-movie-details',
    templateUrl: 'movie-details.component.html',
    styleUrls: ['movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
    constructor(private movieService: MovieService) {
        this.movieService.getMovieDetails.subscribe(movieDetails => {
            console.log(movieDetails)
        })
    }

    ngOnInit() { }
}