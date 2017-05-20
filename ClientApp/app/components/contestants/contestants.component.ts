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
    checkBoxActive: boolean = false;

    constructor(private http: Http, private _cService: ContestantsService) {
       
    }

    ngAfterViewInit(): void {
        this._cService.getContestants()
            .subscribe(result => this.contestants = result);
    }

    toggleCheckbox(): void {
        this.checkBoxActive = !this.checkBoxActive;
    }

    toggleContestant(contestant: Contestant): void {
        contestant.isActive = !contestant.isActive;
        contestant.hasChanged = true;
    }

    saveChanges(): void {

        this._cService.saveContestants(this.contestants);
       
    }

    saveFantasy(user: string, contestant: string) {
        this._cService.saveFantasy(user, contestant);
    }
}
