import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '723929322a6242799d1174908240410'; // Sua chave da API

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`)
      .pipe(
        catchError(error => {
          console.error('Error fetching weather data', error);
          return throwError(error);
        })
      );
  }

  getForecast(city: string): Observable<any> {
    return this.http.get(`https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${city}&days=3&aqi=yes&alerts=yes`)
      .pipe(
        catchError(error => {
          console.error('Error fetching forecast data', error);
          return throwError(error);
        })
      );
  }

  getLocations(query: string): Observable<any> {
    return this.http.get(`https://api.weatherapi.com/v1/search.json?key=${this.apiKey}&q=${query}`)
      .pipe(
        catchError(error => {
          console.error('Error fetching locations', error);
          return throwError(error);
        })
      );
  }
}
