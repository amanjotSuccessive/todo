import { Meteor } from 'meteor/meteor';
import '../imports/api/user/users';
import '../imports/api/user/methods';
import '../imports/api/user/server/publication'

Meteor.startup(() => {
  // code to run on server at startup
});
