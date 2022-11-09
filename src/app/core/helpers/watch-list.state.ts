import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

export class AddMovie {
    static readonly type = '@@ADD_MOVIE';

    constructor(public movieIds: number) { }
}

@State<number[]>({
    name: 'movies',
    defaults: [],
})
@Injectable()
export class WatchListState {
    @Action(AddMovie)
    addNewMovie(ctx: StateContext<number[]>, action: AddMovie) {
        ctx.setState([
            ...ctx.getState(),
            action.movieIds]);
    }
}
