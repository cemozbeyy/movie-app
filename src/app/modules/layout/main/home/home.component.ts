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

    getNowPlayingMovies!: MovieDetails[]
    activeClick = ""
    getUpComingMovies!: MovieDetails[]
    getTopRated!: MovieDetails[]
    getPopularmovies!: MovieDetails[]
    constructor(private movieService: MovieService) {

    }


    ngOnInit() {
        this.getMovies()
        this.nowPlayingMovies()
        this.activeClicked("nowPlay")
    }
    sendDetails(movie: MovieDetails) {
        this.movieService.movieDetails(movie.id).subscribe(sendMovieDetail => {
            this.movieService.getMovieDetails.next(sendMovieDetail)
        })
    }
    activeClicked(clickParamter: string) {

        if (clickParamter == "nowPlay") {
            this.activeClick = clickParamter
        }
        else if (clickParamter == "upComing") {
            this.activeClick = clickParamter
            this.upComingMovies()
        }
        else if (clickParamter == "topRated") {
            this.activeClick = clickParamter
            this.topRatedMovies()
        }
        else {
            this.activeClick = clickParamter
            this.popularMovies()
        }


    }
    getMovies() {
        this.movieService.getMovies().subscribe(discoverMovies => {
            this.imagePath = []
            discoverMovies.forEach((movies: MovieDetails) => {
                this.imagePath.push(movies)
            });
        })
    }
    upComingMovies() {
        this.movieService.upComingMovies().subscribe(getUpComing => {
            this.getUpComingMovies = getUpComing.results
        })
    }
    popularMovies() {
        this.movieService.popularMovies().subscribe(popularMovies => {
            this.getPopularmovies = popularMovies.results
        })
    }
    nowPlayingMovies() {
        this.movieService.getNowPlaying().subscribe(nowPlayingMovies => {
            // now playing tab
            this.getNowPlayingMovies = nowPlayingMovies.results
        })
    }

    topRatedMovies() {
        this.movieService.topRatedMovies().subscribe(topRatedMovies => {
            this.getTopRated = topRatedMovies.results
        })
    }
}