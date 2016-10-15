(function (app) {
  app.LoggerService =
    ng.core.Injectable()
    .Class({
      constructor: function() {},
      log: function(msg) {console.log(msg);},
      error: function(msg) {console.error(msg);},
      warn: function(msg) {console.warn(msg);}
    });
})(window.app || (window.app = {}));
