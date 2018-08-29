import './dashBoard.html';
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

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
