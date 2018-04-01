import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base';

import { Match } from "meteor/check";

Meteor.startup(()=> {
    if (Meteor.users.find().count() === 0) {
        console.log('Seeding Accounts DB...');
        var users = [
            {username:'user',password:'user'},
            {username:'dev',password:'dev'}
        ];
        _.each(users, (user) => {
            Accounts.createUser({
                username: user.username,
                password: user.password,
                email: `${user.username}@${user.username}.${user.username}`,
                profile: {
                
                }
            });
        });
    }
})