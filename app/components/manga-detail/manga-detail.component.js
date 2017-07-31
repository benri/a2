(function (app) {
  app.MangaDetailComponent =
    ng.core.Component({
      imports: [
        ng.router.ActivatedRoute,
        ng.router.Params,
        ng.common.Location
      ],
      selector: 'manga-detail',
      templateUrl: 'app/components/manga-detail/manga-detail.component.html',
      inputs: ['manga']
    })
    .Class({
      constructor: [app.MangaService, ng.router.ActivatedRoute, ng.common.Location,
        function MangaDetailComponent(mangaService, route, location) {
          this.mangaService = mangaService;
          this.route = route;
          this.location = location;
      }],
      ngOnInit: function () {
        this.route.params.forEach((params) => {
          var id = +params['id'];
          this.mangaService.getManga(id).then((manga) => {
            this.manga = manga;
          });
        });
      },
      goBack: function () {
        this.location.back();
      }
    });
})(window.app || (window.app = {}));
