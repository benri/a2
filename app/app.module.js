(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [ ng.platformBrowser.BrowserModule ],
      declarations: [
        app.AppComponent,
        app.MangaListComponent,
        app.MangaFormComponent
      ],
      providers: [
        app.LoggerService,
        app.MangaService
      ],
      bootstrap: [ app.AppComponent ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
