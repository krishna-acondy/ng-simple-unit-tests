import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getDashboard() {
    return {
      date: new Date(),
      weather: 'Sunny'
    };
  }
}
