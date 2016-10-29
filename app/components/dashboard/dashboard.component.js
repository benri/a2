(function (app) {
  app.DashboardComponent =
    ng.core.Component({
      imports: [
        ng.router.Router
      ],
      selector: 'dashboard',
      templateUrl: 'app/components/dashboard/dashboard.component.html'
    })
    .Class({
      constructor: [app.MangaService, ng.router.Router, function(mangaService, router) {
        this.mangaService = mangaService;
        this.router = router;
      }],
      ngOnInit: function() {
        this.mangaService.getMangaList().then((mangaList) => {
          this.mangaList = mangaList.slice(0, 5);
        });
      },
      goToDetail: function(manga) {
        var link = ['/manga', manga.id];
        this.router.navigate(link);
      }
    })
})(window.app || (window.app = {}));
