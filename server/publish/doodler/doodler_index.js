/*****************************************************************************/
/* DoodlerIndex Publish Functions
/*****************************************************************************/

Meteor.publish('doodlerIndex', function () {
  // you can remove this if you return a cursor
  return Doodler.find({});
});
