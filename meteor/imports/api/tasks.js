import { Mongo } from 'meteor/mongo';

import { SimpleSchema } from 'simpl-schema/dist/SimpleSchema';

const info = new Mongo.Collection('info');

const Schema = {};

Schema.info = new SimpleSchema({
  _id: {
    type: String,
    optional: true,
  },
  name: {
    type: String,
    max: 50,
  },
  city: {
    type: String,
    max: 50,
  },
  address: {
    type: Number,
    max: 100,
  },
  age: {
    type: Number,
    optional: true,
    defaultValue: 18,
  },
  password: {
    type: String,
    min: 4,
  },
  agree: {
    type: String,
  },
});
info.attachSchema(Schema.info);
export default info;
