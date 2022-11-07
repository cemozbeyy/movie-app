import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CastDetail, GetReviewResult, MovieDetails, Reviews } from 'src/app/core/helpers/models/movies.model';
import { MainService } from 'src/app/core/services/main.service';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
    selector: 'dbi-movie-details',
    templateUrl: 'movie-details.component.html',
    styleUrls: ['movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
    getMovieDetails!: MovieDetails | null
    postUrl = "https://image.tmdb.org/t/p/w400"
    movieType?: string
    url = "https://image.tmdb.org/t/p/w200"
    activeClick = ""
    getUserReviews?: GetReviewResult[]
    avatarPath!: string
    actorCasts!: CastDetail[]
    constructor(private _router: Router, private movieService: MovieService, private mainService: MainService) {
        this.movieService.getMovieDetails.subscribe(movieDetails => {
            this.getMovieDetails = movieDetails
            this.movieType = movieDetails?.genres[0].name
            console.log(this.getMovieDetails)
        })
    }
    ngOnInit() {
        this.activeClicked("aboutMovie")
    }
    backDashBoard(changeTab: string) {
        this.mainService.selectedTab.next(changeTab)
        this._router.navigateByUrl('')
    }
    getReviews() {
        this.movieService.reviews(this.getMovieDetails?.id).subscribe(getReviews => {
            this.getUserReviews = getReviews.results
            console.log(this.getUserReviews)
            this.getUserReviews.forEach(getLink => {
                getLink.author_details.avatar_path = getLink.author_details.avatar_path.slice(1)
            })

        })
    }
    getCast() {
        this.movieService.cast(this.getMovieDetails?.id).subscribe(getCasts => {
            this.actorCasts = getCasts.cast
        })
    }
    activeClicked(clickParamter: string) {

        if (clickParamter == "aboutMovie") {
            this.activeClick = clickParamter
        }
        else if (clickParamter == "reviews") {
            this.activeClick = clickParamter
            this.getReviews()
        }
        else {
            this.activeClick = clickParamter
            this.getCast()
        }
    }


}