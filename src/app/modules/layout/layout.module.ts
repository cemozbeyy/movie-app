import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FooterComponent } from './components';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { HomeComponent, MainComponent, SearchComponent, WatchListComponent } from './main';


const COMPONENTS = [
    LayoutComponent,
    MainComponent,
    FooterComponent,
    WatchListComponent,
    SearchComponent,
    HomeComponent
]

@NgModule({
    imports: [
        LayoutRoutingModule,
        CommonModule,
        IvyCarouselModule
    ],
    exports: [],
    declarations: [...COMPONENTS],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [],
})
export class LayoutModule { }
