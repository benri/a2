(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'app/components/app.component.html'
    })
    .Class({
      constructor: [app.LoggerService, function(logger) {
        this.logger = logger;

        this.mangaList = [
          new app.Manga(0, 'one piece'),
          new app.Manga(1, 'orange')
        ]
      }]
    });
})(window.app || (window.app = {}));
