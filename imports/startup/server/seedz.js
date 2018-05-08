import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

import { Match } from 'meteor/check'

import { Projects } from '../../api/projects/methods'

Meteor.startup(() => {
    if (Meteor.users.find().count() === 0) {
        console.log('Seeding Accounts DB...')
        var users = [
            { username: 'user', password: 'user' },
            { username: 'dev', password: 'dev' }
        ]
        var projects = [
            {
                title: 'SVHN Preprocessed Fragments',
                body:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
                tags: ['research', 'patterns', 'classification']
            }
        ]
        _.each(users, user => {
            Accounts.createUser({
                username: user.username,
                password: user.password,
                email: `${user.username}@${user.username}.${user.username}`,
                profile: {}
            })
            Projects.insert({
                user_id: Meteor.userId(),
                project_title: projects.title,
                project_body: projects.body,
                project_tags: projects.tags,
                labeled: 0
            })
        })
    }
})
