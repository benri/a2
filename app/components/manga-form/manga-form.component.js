(function (app) {
  app.MangaFormComponent =
    ng.core.Component({
      selector: 'manga-form',
      templateUrl: 'app/components/manga-form/manga-form.component.html'
    })
    .Class({
      constructor: function() {
        this.newMangaList = [];
      },
      addManga: function(name) {
        if (name) {
          this.newMangaList.push(name);
        }
      }
    });
})(window.app || (window.app = {}));
