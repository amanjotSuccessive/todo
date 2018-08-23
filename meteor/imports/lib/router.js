import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/login', {
  action: () => {
    BlazeLayout.render('login');
  },
});
