(function (app) {
  const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: app.DashboardComponent },
    { path: 'manga-list', component: app.MangaListComponent },
    { path: 'manga/:id', component: app.MangaDetailComponent }
  ];
  app.AppRoutingModule =
    ng.core.NgModule({
      imports: [
        ng.router.RouterModule.forRoot(routes)
      ],
      exports: [ ng.router.RouterModule ]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
