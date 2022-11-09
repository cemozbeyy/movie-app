import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { forkJoin, Observable } from 'rxjs';
import { DiscoverMovies, MovieDetails } from 'src/app/core/helpers/models/movies.model';
import { WatchListState } from 'src/app/core/helpers/watch-list.state';
import { MainService } from 'src/app/core/services/main.service';
import { MovieService } from 'src/app/core/services/movie.service';
@Component({
    selector: 'dbi-watch-list',
    templateUrl: 'watch-list.component.html',
    styleUrls: ['watch-list.component.scss']
})

export class WatchListComponent implements OnInit {
    userWatchList?: MovieDetails[] | null;
    sendWatchList?: number[];
    url = "https://image.tmdb.org/t/p/w200"
    @Select(WatchListState) movies?: Observable<number[]>;

    constructor(
        private _router: Router,
        private mainService: MainService,
        private movieService: MovieService,
        private store: Store
    ) {
        this.store.select(WatchListState).subscribe((watchList: number[]) => {
            this.sendWatchList = watchList
            const requests = this.sendWatchList!.map(o => this.movieService.movieDetails(o))
            forkJoin(
                requests
            ).subscribe(result => {
                this.userWatchList = result
            })
        })


    }

    ngOnInit() {

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