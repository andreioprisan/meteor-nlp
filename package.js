Package.describe({
  summary: "NLP for Meteor"
});

Npm.depends({
    "natural": "0.1.21",
    "zlib": "1.0.5",
    "WNdb": "3.0.1"
});

Package.on_use(function (api, where) {
  api.add_files('nlp.js', 'server');
});
