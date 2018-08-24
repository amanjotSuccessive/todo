import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';

const Schema = {};

Schema.info = new SimpleSchema({
  _id: {
    type: String,
  },
  city: {
    type: String,
    max: 50,
    optional: true
  },
  address: {
    type: String,
    max: 100,
    optional: true
  },
  age: {
    type: Number,
    optional: true,
    defaultValue: 18,
    optional: true
  },
  "username": {
      type: String,
      optional: false
  },
  "services": {
    type: Object,
    blackbox: true
  },
});
const Users = Meteor.users;
Users.attachSchema(Schema.info);
export default Users;
