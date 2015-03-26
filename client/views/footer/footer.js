/*****************************************************************************/
/* Footer: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.footer.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click #submit':function(e,tmpl){
     e.preventDefault();
     var regNo = tmpl.find('#reg_no').value;
     var entry = tmpl.find('#select').value;
     if(regNo!='' && entry!='None'){
       var stu = Students.find({reg_no:regNo}).fetch();
       if(stu.length === 0){
         Students.insert({
           reg_no:regNo,
           votedFor:entry
         });
         var doodler = Doodler.find({name:entry}).fetch();
         console.log(doodler[0].votes);
         Doodler.update({_id:doodler[0]._id},{$set:{votes:doodler[0].votes+1}});
       }else{
         alert("Student has Already voted");
       }
     tmpl.find('#reg_no').value = '';
   }
     tmpl.find('#select').value = 'None';
   }
});

Template.footer.helpers({

});

/*****************************************************************************/
/* Footer: Lifecycle Hooks */
/*****************************************************************************/
Template.footer.created = function () {
};

Template.footer.rendered = function () {
};

Template.footer.destroyed = function () {
};
