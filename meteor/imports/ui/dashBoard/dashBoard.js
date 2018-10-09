import './dashBoard.html';
let counter =1; 
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import Users from '../../../imports/api/user/users'
Template.dashBoard.events({
  'click'(event) {
    event.preventDefault();
    console.log("Logout")
    Meteor.logout(function(err) {
      if (err) {
        alert('Something went wrong'); }
      else {
        FlowRouter.go('/login');
      }
    });
  },
});
Template.dashBoard.helpers({
cUser : () => {

  return ('user name: '+ Meteor.user().username + '<br>') ;

},
pubSub : () =>{ 
  
  console.log(counter,'+++++++++++>>>>>>',Users.find({}).fetch());
  counter++;
  // return Users.find({}).fetch();
  // console.log('+++++++++++>>>>>>',Users.find({},{fields:{username}}).fetch());
}
});

Template.dashBoard.onCreated(function bodyOnCreated() {
  Meteor.subscribe('pubSub');
});


Template.dashBoard.helpers({
  isOwner() {
  //  console.log('this.owner === Meteor.userId(); : ',this)
    return this.owner === Meteor.userId();
  },
});