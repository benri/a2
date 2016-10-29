(function (app) {
  app.MangaFormComponent =
    ng.core.Component({
      selector: 'manga-form',
      templateUrl: 'app/components/manga-form/manga-form.component.html'
    })
    .Class({
      constructor: [app.MangaService, app.LoggerService, function(mangaService, logger) {
        this.mangaService = mangaService;
        this.logger = logger;

        this.model = new app.Manga(null, '');
        this.submitted = false;
      }],
      onSubmit: function(mangaForm) {
        this.logger.log(this.model);
        this.mangaService.addMangaToList(this.model);
        this.submitted = true;
      }
    });
})(window.app || (window.app = {}));
