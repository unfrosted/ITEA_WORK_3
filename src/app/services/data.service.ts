import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
    console.log(`[DataService]`);
  }

  getData(): void {
    console.log(`DataService was called`);
  }
}
