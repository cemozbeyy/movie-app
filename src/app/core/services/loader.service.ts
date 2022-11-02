import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
    isLoading = new BehaviorSubject<boolean>(false);
    constructor() { }
    showLoader() {
        this.isLoading.next(true);
    }

    closeLoader() {
        setTimeout(() => {
            //loader görünmeyecek kadar hızlı olduğu için settimeout ekledim başka bir nedeni yok.
            this.isLoading.next(false);
        }, 200);
    }
}