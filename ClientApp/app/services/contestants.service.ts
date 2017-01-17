import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import Contestantcomponent = require("../models/contestant.component");

@Injectable()
export class ContestantsService {

    constructor(private _http: Http) {
    }

    getContestants() {
        return this._http.get('/api/SampleData/GetContestants').map(result => result.json());
    }

    saveContestants(contestants: Contestantcomponent.Contestant[]) {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        this._http.post('/api/SampleData/PostChanges', contestants, options)
            .subscribe(result => {
                alert(result.json());
            });
    }
}