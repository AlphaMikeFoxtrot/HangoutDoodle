Meteor.publish('studentList', function () {
  // you can remove this if you return a cursor
  return Students.find({});
});
