(function (app) {
  app.MangaService =
    ng.core.Class({
      constructor: [app.LoggerService, ng.http.HttpModule, function(logger, http) {
        console.log(http);
        this.http = http;

        this.mangaUrl = 'api/manga';

        this.mangaList = [
          new app.Manga(0, 'one piece'),
          new app.Manga(1, 'orange')
        ];

        this.logger = logger;
      }],
      getMangaList: function () {
        console.log(this.http);
        return this.http.get(this.mangaUrl)
          // .map(function (res) {
          //   var body = res.json();
          //   return body.data || {};
          // })
          // .catch(function (err) {
          //   if (err) {
          //     console.log(err);
          //   }
          // });
        // return Promise.resolve(this.mangaList);
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
