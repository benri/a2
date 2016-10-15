(function (app) {
  app.MangaService =
    ng.core.Injectable()
    .Class({
      constructor: [app.LoggerService, function(logger) {
        this.mangaList = [];

        this.logger = logger;
      }],
      getMangaList: function () {
        this.logger.log('test log');
      }
    });
})(window.app || (window.app = {}));
