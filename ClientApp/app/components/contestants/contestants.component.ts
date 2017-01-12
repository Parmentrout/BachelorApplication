import { Component, AfterViewInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
    selector: 'contestants',
    template: require('./contestants.component.html')
})
export class ContestantsComponent implements AfterViewInit {
    public contestants: Contestant[];

    constructor(private http: Http) {
       
    }

    ngAfterViewInit(): void {
        this.http.get('/api/SampleData/GetContestants').subscribe(result => {
            this.contestants = result.json();
        });
    }

    toggleContestant(contestant: Contestant): void {
        contestant.isActive = !contestant.isActive;
    }

    saveChanges(): void {
        //for (let contestant of this.contestants) {
        //    console.log(contestant.name + '; ' + contestant.isActive);
        //}


        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        this.http.post('/api/SampleData/PostChanges', this.contestants, options)
            .subscribe(result => {
                alert(result.json());
            });
    }
}

interface Contestant {
    name: string;
    imageSource: string;
    isActive: boolean;
}
