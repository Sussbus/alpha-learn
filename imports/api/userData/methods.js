import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'

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
    'UserData.replaceEmail' (newEmail) { //data param is an object to add to user profile
        if (!Meteor.userId()) {
          throw new Meteor.Error('not-authorized');
        }
        if(newEmail === null) return;
        
        Accounts.removeEmail(Meteor.userId(), Meteor.user().emails[0].address)
        Accounts.addEmail(Meteor.userId(), newEmail);
      },
});