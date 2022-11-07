import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/core/services/main.service';

@Component({
    selector: 'dbi-watch-list',
    templateUrl: 'watch-list.component.html',
    styleUrls: ['watch-list.component.scss']
})

export class WatchListComponent implements OnInit {
    constructor(private _router: Router, private mainService: MainService) { }

    ngOnInit() { }
    backDashBoard(changeTab: string) {
        this.mainService.selectedTab.next(changeTab)
        this._router.navigateByUrl('')
    }
}