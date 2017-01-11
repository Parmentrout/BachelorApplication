import { Component, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'contestants',
    template: require('./contestants.component.html')
})
export class ContestantsComponent implements AfterViewInit {
    public forecasts: WeatherForecast[];

    constructor(private http: Http) {
       
    }

    ngAfterViewInit(): void {
        this.http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json();
        });
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
