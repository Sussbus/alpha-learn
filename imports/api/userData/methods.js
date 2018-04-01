import { check } from 'meteor/check';

Meteor.methods({
    'UserData.insert' (data) { //data param is an array with objects with a 'field' and 'response'
      // Make sure the user is logged in before inserting userdata
      if (!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      if (data.length === 0) {
        throw new Meteor.Error('no data error :)');
      }
  
      var obj = {};
  
      _.each(data, function (item) {
        obj['profile.' + item.field] = item.response;
      });
  
      Meteor.users.update(this.userId, {$set: obj });
    },
});