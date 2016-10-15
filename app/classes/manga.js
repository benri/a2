(function (app) {
  app.Manga =
    ng.core.Class({
      constructor: [Number, String, function(id, name) {
        this.id = id;
        this.name = name;
        this.latestChapter = 1;
        this.currentChapter = 1;
      }]
    });
})(window.app || (window.app = {}));
