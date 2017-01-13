import { Component, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fantasy',
    template: require('./fantasy.component.html')
})
export class FantasyComponent implements AfterViewInit {
    fantasyUsers: User[];
    constructor(private http: Http) {

    }

    ngAfterViewInit(): void {
        this.http.get('/api/SampleData/GetUsers').subscribe(result => {
            this.fantasyUsers = result.json();

            for (let user of this.fantasyUsers) {
                console.log(user);
            }
        });
    }
}

class User {
    username: string;
    contestants: Contestant[];
}

class Contestant {
    name: string;
    imageSource: string;
    isActive: boolean;
}