(function (app) {
  app.MangaService =
    ng.core.Class({
      constructor: [app.LoggerService, ng.http.Http,
        function MangaService(logger, http) {
          this.logger = logger;
          this.http = http;
          this.mangaUrl = 'api/manga';
        }],
      getMangaList: function () {
        return this.http.get(this.mangaUrl)
          .map((res) => {
            var body = res.json();
            return body.data || {};
          })
          .catch(function (err) {
            if (err.status !== 404) {
              return Rx.Observable.throw(err.statusText || 'Server error');
            } else {
              return Rx.Observable.empty();
            }
          });
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
