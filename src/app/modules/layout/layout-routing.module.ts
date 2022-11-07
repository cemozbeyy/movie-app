import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { MovieDetailsComponent } from './main';


const ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent
    },
    {
        path: 'movie-detail',
        component: MovieDetailsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ],
    declarations: [],
    providers: [],
})
export class LayoutRoutingModule { }
