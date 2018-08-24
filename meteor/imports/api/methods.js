import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Users from './tasks';

Meteor.methods({
    'regiserUser': function (userName, city, address, age, password) {
        console.log("registerUSer", userName, city, address, age, password);
        let userId = Accounts.createUser({
            username: userName,
            password: password})
        console.log("userId",userId);
        Users.update({ _id: userId }, {
          $set: {
          city: city,
          address: address,
          age: age,
        } });
        return;
    }
})