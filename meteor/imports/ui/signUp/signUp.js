import './signUp.html';
import { Template } from 'meteor/templating';
import { info } from '../../api/tasks.js';
import SimpleSchema from 'simpl-schema';

Template.signUp.events({
  'submit .signUpForm'(event) {
    event.preventDefault();
    //const target = event.target;
    const { target } = event;
    const userSignUp = target.userSignUp.value;
    const citySignUp = target.citySignUp.value;
    const addressSignUp = target.addressSignUp.value;
    //const ageSignUp= target.ageSignUp.value;
    const agreeSignUp = target.agreeSignUp.value;
    const passwordSignUp = target.passwordSignUp.value;
    info.insert({
      name: userSignUp,
      city: citySignUp,
      address: addressSignUp,
      age: agreeSignUp,
      agree: agreeSignUp,
      password: passwordSignUp,
    });
  },
});
