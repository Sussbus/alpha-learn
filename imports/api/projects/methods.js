import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { Projects } from './projects'

Meteor.methods({
    'Projects.insert'(project) {
        check(project.title, String)
        check(project.body, String)

        // Make sure the user is logged in before inserting a post
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized')
        }

        Projects.insert({
            user_id: Meteor.userId(),
            project_title: project.title,
            project_body: project.body,
            project_tags: project.project_tags,
            labeling_interface: project.labeling_interface,
            labeled: 0
        })
    },
    'Projects.remove'(projectId) {
        check(projectId, String)

        const project = Projects.findOne(projectId)

        Projects.remove(projectId)
    }
})
