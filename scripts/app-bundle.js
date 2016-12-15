define('app',['exports', 'aurelia-framework', 'aurelia-fetch-client'], function (exports, _aureliaFramework, _aureliaFetchClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class = function () {
    function App(http) {
      _classCallCheck(this, App);

      this.http = http;
      this.message = 'Hello World! - Welcome to the Aurelia Client Skeleton';
      this.apiresp = '';
    }

    App.prototype.doapi = function doapi() {
      var _this = this;

      console.log('doing api baby');

      this.http.fetch('http://localhost:9000/api/testme').then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.apiresp = JSON.stringify(data);
      });
    };

    App.prototype.doclear = function doclear() {
      this.apiresp = '';
    };

    return App;
  }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${message}</h1>\n\n<div>\n  <p>This app is intended to be used in conjunction with the server provided in \n    <a href=\"https://github.com/jet3723/au-client-server-skeleton.git\">au-client-server-skeleton.</a>\n    The button down below activates a test web service API to the server and\n    displays the server response.\n  </p>\n</div>\n<div>\n  <button type=\"button\" click.trigger=\"doapi()\">API Activate</button>\n  <button type=\"button\" click.trigger=\"doclear()\">Clear Result</button>\n  <div id=\"result\">${apiresp}</div>\n</div>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map