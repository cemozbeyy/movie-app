import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';


const ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent
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
