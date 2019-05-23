export class DashboardServiceMock {
  getDashboard() {
    return {
      date: new Date(),
      weather: 'Sunny'
    };
  }
}