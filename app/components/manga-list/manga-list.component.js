(function (app) {
  app.MangaListComponent =
    ng.core.Component({
      selector: 'manga-list',
      templateUrl: 'app/components/manga-list/manga-list.component.html'
    })
    .Class({
      constructor: [app.MangaService, function(mangaService) {
        this.mangaService = mangaService;
      }],
      ngOnInit: function () {
        this.mangaService.getMangaList().then((mangaList) => {
          this.mangaList = mangaList;
        });
      }
    });
})(window.app || (window.app = {}));
