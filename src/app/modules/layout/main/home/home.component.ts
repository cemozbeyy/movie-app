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
    clickedVal: any
    getNowPlayingMovies!: MovieDetails[]
    tabNames = [
        { name: "Now playing", isClicked: true },
        { name: "Upcoming", isClicked: false },
        { name: "Top Rated", isClicked: false },
        { name: "Popular", isClicked: false }
    ]
    constructor(private movieService: MovieService) {
        console.log(this.clickedVal)
    }


    ngOnInit() {
        this.topRatedMovies()
        this.getMovies()
        this.nowPlayingMovies()
    }
    sendDetails(movie: MovieDetails) {
        this.movieService.getMovieDetails.next(movie)
    }
    getMovies() {
        this.movieService.getMovies().subscribe(discoverMovies => {
            this.imagePath = []
            discoverMovies.forEach((movies: MovieDetails) => {
                this.imagePath.push(movies)
            });
        })
    }
    nowPlayingMovies() {
        this.movieService.getNowPlaying().subscribe(nowPlayingMovies => {
            // now playing tab
            this.getNowPlayingMovies = nowPlayingMovies.results
        })
    }

    topRatedMovies() {
        this.movieService.topRatedMovies().subscribe((topRatedMovies) => {
            // TopRated Tab
        })
    }
}