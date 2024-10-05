import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: 'weather.page.html',
})
export class WeatherPage {
  city: string = '';
  weather: any;

  constructor(private http: HttpClient) {}

  getWeather() {
    if (!this.city) {
      alert('Por favor, insira uma cidade.');
      return;
    }
    
    const apiKey = '723929322a6242799d1174908240410'; // Sua chave da API
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${this.city}&aqi=no`;
  
    this.http.get(url).subscribe(data => {
      this.weather = data;
    }, error => {
      console.error('Erro ao obter dados do clima', error);
      alert('Erro ao obter dados do clima. Verifique a cidade e tente novamente.');
    });
  }
}