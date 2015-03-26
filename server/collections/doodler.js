/*
 * Add query methods like this:
 *  Doodler.findPublic = function () {
 *    return Doodler.find({is_public: true});
 *  }
 */
Doodler.allow({
  insert: function (doc) {
    return false;
  },

  update: function (doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return false;
  }
});

Doodler.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
