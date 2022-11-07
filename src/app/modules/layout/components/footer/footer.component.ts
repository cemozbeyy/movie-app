import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';

@Component({
    selector: 'dbi-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})

export class FooterComponent implements OnInit {
    constructor(private mainService: MainService) {
        this.mainService.selectedTab.subscribe(currentTab => {
            this.changeIcon(currentTab)
        })
    }
    isHome!: boolean
    isSearch!: boolean
    isWatchList!: boolean
    ngOnInit() {
        this.changeTab("watch-list")
    }

    changeIcon(currentTab: string) {
        if (currentTab == "home") {
            this.isHome = true
            this.isSearch = false
            this.isWatchList = false
        }
        else if (currentTab == "search") {
            this.isSearch = true
            this.isHome = false
            this.isWatchList = false
        }
        else {
            this.isWatchList = true
            this.isHome = false
            this.isSearch = false
        }
    }
    changeTab(currentTab: string) {
        this.mainService.selectedTab.next(currentTab)
        if (currentTab == "home") {
            this.isHome = true
            this.isSearch = false
            this.isWatchList = false
        }
        else if (currentTab == "search") {
            this.isSearch = true
            this.isHome = false
            this.isWatchList = false
        }
        else {
            this.isWatchList = true
            this.isHome = false
            this.isSearch = false
        }
    }
}