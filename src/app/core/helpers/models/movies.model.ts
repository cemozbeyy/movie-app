export interface DiscoverMovies {
    page: number,
    results: MovieDetails[],
    total_pages: number
    total_results: number,
    dates?: NowPlaying
}
export interface MovieDetails {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number,
    budget?: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    genres: [{ id: number, name: string }],
    imdb_id?: string,
    production_companies?: [{ id: number, logo_path: string, name: string, origin_country: string }],
    production_countries?: [{ iso_3166_1: string, name: string }],
    revenue?: number,
    runtime: number,
    spoken_languages?: [{ english_name: string, iso_639_1: string, name: string }],
    status?: string,
    tagline?: string,
}
export interface NowPlaying {
    maximum: string,
    minimum: string
}
export interface Reviews {
    id: number,
    page: number,
    results: GetReviewResult[]
    total_pages: number,
    total_results: number

}
export interface GetReviewResult {
    author: string,
    author_details: AuthorDetails,
    content: string
    created_at: string,
    id: string
    updated_at: string,
    url: string

}
export interface AuthorDetails {
    name: string,
    username: string,
    avatar_path: string,
    rating: number

}
export interface Cast {
    id: number,
    cast: CastDetail[],
}
export interface CastDetail {
    original_name: string;
    profile_path: string;
}