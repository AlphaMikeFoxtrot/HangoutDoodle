/*****************************************************************************/
/* DoodlerIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.DoodlerIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   
});

Template.DoodlerIndex.helpers({
  'item':function(){
    return Doodler.find({},{sort:{votes:-1}});
  }
});

/*****************************************************************************/
/* DoodlerIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.DoodlerIndex.created = function () {
};

Template.DoodlerIndex.rendered = function () {
};

Template.DoodlerIndex.destroyed = function () {
};
