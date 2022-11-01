import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dbi-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.scss']
})

export class FooterComponent implements OnInit {
    constructor() { }
    isHome!: boolean
    isSearch!: boolean
    isWatchList!: boolean
    ngOnInit() {
        this.changeTab("home")
    }

    changeTab(currentTab: string) {
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