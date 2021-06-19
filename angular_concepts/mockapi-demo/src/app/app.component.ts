import { Component } from '@angular/core';
import { BaseService } from './service/base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSON to Table';
  arrMockData: string[];
  keys: string[] = new Array();

  constructor(private base: BaseService) { }

  ngOnInit() {
    this.base.getData()
      .subscribe(data => {
        this.arrMockData = data as string[];
        this.populateKeys();
      });
  }

  populateKeys() {
    let firstObj: any = this.arrMockData[0];
    for (let entry in firstObj) {
      this.keys.push(entry);
    }
  }
}
