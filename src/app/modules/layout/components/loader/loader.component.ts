import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'dbi-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(private loaderService: LoaderService) { }
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  ngOnInit(): void {
  }

}
