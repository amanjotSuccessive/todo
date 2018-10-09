import { Meteor } from 'meteor/meteor';
import Users from './../users';

//if (Meteor.isServer) {
Meteor.publish('pubSub',function (){
    let data = Users.find({});
    console.log('data',data);
    return  data;
    
}); 
//}
/* else {
    console.log('Publish method false');
} */