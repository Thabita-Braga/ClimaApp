import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forecast',
  templateUrl: 'forecast.page.html',
})
export class ForecastPage {
  city: string = '';
  forecast: any;

  constructor(private http: HttpClient) {}

  getForecast() {
    if (!this.city) {
      alert('Por favor, insira uma cidade.');
      return;
    }

    const apiKey = '723929322a6242799d1174908240410';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${this.city}&days=3&aqi=no`;

    this.http.get(url).subscribe(data => {
      this.forecast = data;
    }, error => {
      console.error('Erro ao obter dados da previsão', error);
      alert('Erro ao obter dados da previsão. Verifique a cidade e tente novamente.');
    });
  }
}
