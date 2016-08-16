class DashboardController {
  constructor() {
    this.appTitle = "Admin Dashboard";

    this.sales = {
      today: {
        title: "Sale Today",
        value: 420
      },
      like: {
        title: "Page Likes",
        value: 2340
      },
      registration: {
        title: "New Registration",
        value: 53
      }
    }
  }
}

export default DashboardController