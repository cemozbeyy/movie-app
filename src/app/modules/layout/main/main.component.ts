import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';

@Component({
    selector: 'dbi-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss']
})

export class MainComponent implements OnInit {
    currentTab: string = ""
    constructor(private mainService: MainService) {
        setTimeout(() => {
            this.currentTab = this.mainService.selectedTab
        }, 10);

    }

    ngOnInit() { }
}