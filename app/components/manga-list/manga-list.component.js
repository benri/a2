(function (app) {
  app.MangaListComponent =
    ng.core.Component({
      selector: 'manga-list',
      templateUrl: 'app/components/manga-list/manga-list.component.html'
    })
    .Class({
      constructor: [app.MangaService, function(mangaService) {
        this.mangaList = [
          new app.Manga(0, 'one piece'),
          new app.Manga(1, 'orange')
        ]
      }]
    });
})(window.app || (window.app = {}));
