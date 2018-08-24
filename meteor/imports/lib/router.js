import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/login', {
  action: () => {
    BlazeLayout.render('login');
  },
});

FlowRouter.route('/', {
  action: () => {
    BlazeLayout.render('login');
  },
});

FlowRouter.route('/signUp', {
  action: () => {
    BlazeLayout.render('signUp');
  },
});

FlowRouter.route('/dashBoard', {
  action: () => {
    BlazeLayout.render('dashBoard');
  },
});
