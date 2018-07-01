const Article = require("../models/article");

module.exports = {
  // method to find articles in db
  find: function(req, res) {
    Article.find().then(function(data) {
      res.json(data);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // method to add articles to db
  insert: function(req, res) {
    //console.log("req.body: ", req.body);
    Article.create(req.body).then(function(data) {
      res.json(data);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // method to delete articles from the db
  delete: function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(data) {
      res.json(data);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
