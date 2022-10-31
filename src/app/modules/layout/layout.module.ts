import { NgModule } from '@angular/core';
import { FooterComponent } from './components';

import { LayoutComponent } from './layout.component';
import { MainComponent, SearchComponent, WatchListComponent } from './main';




const COMPONENTS = [
    LayoutComponent,
    MainComponent,
    FooterComponent,
    WatchListComponent,
    SearchComponent
]

@NgModule({
    imports: [],
    exports: [],
    declarations: [...COMPONENTS],
    providers: [],
})
export class LayoutModule { }
