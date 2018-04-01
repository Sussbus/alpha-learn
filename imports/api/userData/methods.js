import { check } from 'meteor/check';

Meteor.methods({
    'UserData.insert' (data) { //data param is an object to add to user profile
      if (!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      let profile = Meteor.user().profile;
      var keys = Object.keys(data);

      keys.map((key) => {
          profile[key] = data[key];
      })  
  
      Meteor.users.update(this.userId, {$set: {profile: profile }});
    },
});