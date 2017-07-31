(function (app) {
  app.MangaListComponent =
    ng.core.Component({
      selector: 'manga-list',
      templateUrl: 'app/components/manga-list/manga-list.component.html'
    })
    .Class({
      constructor: [app.MangaService,
        function MangaListComponent(mangaService) {
          this.mangaService = mangaService;
        }],
      ngOnInit: function () {
        this.mangaService.getMangaList()
          .subscribe((mangaList) => {
            console.log(mangaList);
            this.mangaList = mangaList;
          }, (err) => {
            console.error(err);
          }, () => {
            console.log('mangaList fetch complete.');
          });
      }
    });
})(window.app || (window.app = {}));
