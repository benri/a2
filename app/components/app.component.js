(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'app/components/app.component.html'
    })
    .Class({
      constructor: [app.LoggerService, function(logger) {
        this.logger = logger;

        this.title = "My Manga Keeper";
      }]
    });
})(window.app || (window.app = {}));
