import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public url: string = './assets/data/MOCK_DATA_100.json';
  constructor(private httpService: HttpClient) { }

  getData() {
    return this.httpService.get(this.url);
  }

}
