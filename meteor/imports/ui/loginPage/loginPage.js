import './loginPage.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
// import { Tasks } from '../../api/tasks.js';

/*
function to verify user login credentials
*/
Template.login.events({
  'submit .loginForm'(event) {
    event.preventDefault();

    const target = event.target;
    const loginName = target.nameLogin.value;
    const loginPassword = target.passwordLogin.value;
    // console.log("login", loginName);
    // console.log("pass", loginPassword);
    Meteor.loginWithPassword(loginName, loginPassword);
    FlowRouter.go('/dashBoard');
  },
});
