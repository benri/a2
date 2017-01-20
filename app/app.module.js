(function(app) {
  app.AppModule =
    ng.core.NgModule({
      imports: [
        ng.platformBrowser.BrowserModule,
        ng.forms.FormsModule,
        ng.http.HttpModule,
        // rxjs.Observable,
        app.AppRoutingModule
      ],
      declarations: [
        app.AppComponent,
        app.DashboardComponent,
        app.MangaListComponent,
        app.MangaFormComponent,
        app.MangaDetailComponent
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
