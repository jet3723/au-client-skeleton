
// The application class simply configures an Aurelia Router for now.
// An overview class was added in order to give the user an overview of the application. This is the
// first and default route as well as the first single page application being deployed by the 
// Application Runner. The second application is the original Client Server Skeleton application. The
// client server application was refactored and renamed to cskel, but it is basically the original
// client server skeleton application.

export class App {
  constructor() {
  }

  // Configure the router to add the Overview application and Client Server Skeleton application.
  configureRouter(config, router) {
    config.map([
      { route: ['', 'overview'], name: 'overview',       moduleId: 'overview',       nav: true, title: 'Overview'},
      { route: 'cskel', name: 'cskel',  moduleId: 'cskel/cskel',  nav: true, title: 'Client Server'}
    ]);

    // Save the router as this is used to configure the navigation bar in app.html
    this.router = router;
  }
}
