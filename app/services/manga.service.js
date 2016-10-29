(function (app) {
  app.MangaService =
    ng.core.Class({
      constructor: [app.LoggerService, function(logger) {
        this.mangaList = [
          new app.Manga(0, 'one piece'),
          new app.Manga(1, 'orange')
        ];

        this.logger = logger;
      }],
      getMangaList: function () {
        return Promise.resolve(this.mangaList);
      },
      getManga: function (id) {
        return this.getMangaList().then((list) => {
          return Promise.resolve(_.find(list, {id: id}));
        })
      },
      addMangaToList: function (manga) {
        this.mangaList.push(manga);
        this.logger.log( "manga \"" + manga.name + "\" added to the list")
      }
    });
})(window.app || (window.app = {}));
