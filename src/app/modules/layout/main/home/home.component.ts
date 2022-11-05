import { Component, OnInit } from '@angular/core';
import { DiscoverMovies, MovieDetails } from 'src/app/core/helpers/models/movies.model';
import { MovieService } from 'src/app/core/services/movie.service';


@Component({
    selector: 'dbi-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
    imagePath!: MovieDetails[]
    url = "https://image.tmdb.org/t/p/w200"
    constructor(private movieService: MovieService) {

    }


    ngOnInit() {
        this.topRatedMovies()
    }

    getMovies() {
        this.movieService.getMovies().subscribe((discoverMovies: DiscoverMovies) => {
            this.imagePath = []
            discoverMovies.results.forEach((movies: MovieDetails) => {
                this.imagePath.push(movies)
            });
        })
    }
    nowPlayingMovies() {
        this.movieService.getNowPlaying().subscribe(nowPlayingMovies => {
            // now playing tab
        })
    }

    topRatedMovies() {
        this.movieService.topRatedMovies().subscribe((topRatedMovies) => {
            // TopRated Tab
        })
    }
}