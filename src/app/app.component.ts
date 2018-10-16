import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { S1Service } from './shared/services/s1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'itea-shop';
  visible = false;

  constructor(private dataService: DataService, private s1: S1Service) {
    this.dataService.getData();
  }

  ngOnInit() {
    this.s1.getData();
  }

  onToggle() {
    this.visible = !this.visible;
  }
}
