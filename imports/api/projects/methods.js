import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Projects } from './projects';

Meteor.methods({
	'Projects.insert'({ title, body, project_tags }) {
		check(title, String);
		check(body, String);

		// Make sure the user is logged in before inserting a post
		if (!Meteor.userId()) {
			throw new Meteor.Error('not-authorized');
		}

		Projects.insert({
			user_id: Meteor.userId(),
			project_title: title,
			project_body: body,
			project_tags: project_tags
		});
	},
	'Projects.remove'(projectId) {
		check(projectId, String);

		const project = Projects.findOne(projectId);

		Projects.remove(projectId);
	}
});
