(function (app) {
  app.AddMangaComponent =
    ng.core.Component({
      selector: 'add-manga',
      templateUrl: 'app/components/add-manga/add-manga.component.html'
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
