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
      constructor: [app.MangaService, ng.router.Router,
        function DashboardComponent(mangaService, router) {
          this.mangaService = mangaService;
          this.router = router;
        }],
      ngOnInit: function() {
        var list = this.mangaService.getMangaList();
        console.log(list);
        // .then((mangaList) => {
        //   this.mangaList = mangaList.slice(0, 5);
        // });
      },
      goToDetail: function(manga) {
        var link = ['/manga', manga.id];
        this.router.navigate(link);
      }
    })
})(window.app || (window.app = {}));
