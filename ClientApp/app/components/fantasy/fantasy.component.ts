import { Component, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import Usercomponent = require("../../models/user.component");

@Component({
    selector: 'fantasy',
    template: require('./fantasy.component.html')
})
export class FantasyComponent implements AfterViewInit {
    fantasyUsers: Usercomponent.User[];
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