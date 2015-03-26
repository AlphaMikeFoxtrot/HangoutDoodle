/*
 * Add query methods like this:
 *  Students.findPublic = function () {
 *    return Students.find({is_public: true});
 *  }
 */
Students.allow({
  insert: function (doc) {
    return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});

Students.deny({
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
