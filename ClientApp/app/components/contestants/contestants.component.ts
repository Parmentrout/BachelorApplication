import { Component, AfterViewInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ContestantsService } from '../../services/contestants.service';
import { Contestant } from '../../models/contestant.component';

@Component({
    selector: 'contestants',
    template: require('./contestants.component.html')
})
export class ContestantsComponent implements AfterViewInit {
    public contestants: Contestant[];

    constructor(private http: Http, private _cService: ContestantsService) {
       
    }

    ngAfterViewInit(): void {
        this._cService.getContestants()
            .subscribe(result => this.contestants = result);
    }

    toggleContestant(contestant: Contestant): void {
        contestant.isActive = !contestant.isActive;
        contestant.hasChanged = true;
    }

    saveChanges(): void {

        this._cService.saveContestants(this.contestants);
       
    }
}
