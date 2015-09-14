var assert = require("assert");

var Model = require("./model");

function load(url, callback) {
  Model.loadFromUrl(url, function(model) {
    global.model = model;
    global.score = model.score;

    var d = new Date();
    for (var n = 0; n < 100; n++) {
      model.predict(model.forward(model.makeState(), "a", model.makeState()));
    }
    console.log(new Date() - d);
    console.log(model.predict(model.forward(model.makeState(), "a", model.makeState())));
    console.log(model.predict(model.forward(model.makeState(), "a", model.makeState())));

    if (callback) {
      callback(model);
    }
  });
}

//load("data/large");

global.load = load;
