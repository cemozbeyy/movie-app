import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscoverMovies, MovieDetails } from 'src/app/core/helpers/models/movies.model';
import { MainService } from 'src/app/core/services/main.service';
import { MovieService } from 'src/app/core/services/movie.service';
@Component({
    selector: 'dbi-watch-list',
    templateUrl: 'watch-list.component.html',
    styleUrls: ['watch-list.component.scss']
})

export class WatchListComponent implements OnInit {
    userWatchList?: MovieDetails[] | null;
    sendWatchList?: number[] | null;
    url = "https://image.tmdb.org/t/p/w200"
    constructor(private _router: Router, private mainService: MainService, private movieService: MovieService) {
        let movieIds: any = localStorage.getItem("fav-movie")
        // this.movieService.movieDetails(movieIds).subscribe((moviesDetail:DiscoverMovies)=> {
        //     console.log(moviesDetail)
        //     this.watchList = moviesDetail.results
        // })
        this.movieService.watchList.subscribe((moviesDetail: any) => {
            this.userWatchList = []
            this.sendWatchList = moviesDetail
            this.sendWatchList?.forEach(watchListIds => {
                this.movieService.movieDetails(watchListIds).subscribe(moviesDetail => {
                    this.userWatchList?.push(moviesDetail)
                })
            })


        })


    }

    ngOnInit() {
        console.log(this.userWatchList)
    }
    sendDetails(movie: MovieDetails) {

        this.movieService.movieDetails(movie.id).subscribe(sendMovieDetail => {
            this.movieService.getMovieDetails.next(sendMovieDetail)
        })
    }
    backDashBoard(changeTab: string) {
        this.mainService.selectedTab.next(changeTab)
        this._router.navigateByUrl('')
    }
}