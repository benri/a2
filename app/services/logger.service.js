(function (app) {
  app.LoggerService = ng.core.Class({
    constructor: function () {
      this.logs = [];
    },

    log: function (msg) {
      this.logs.push("[info] " + msg);
      console.log(msg);
    },
    error: function (msg) {
      this.logs.push("[error] " + msg);
      console.error(msg);
    },
    warn: function (msg) {
      this.logs.push("[warn] " + msg);
      console.warn(msg);
    }
  });
})(window.app || (window.app = {}));
