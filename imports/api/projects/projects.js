import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

ProjectsSchema = new SimpleSchema({
	user_id: {
		type: String,
		label: "Creator's Meteor.userId"
	},
	createdAt: {
		type: Date,
		label: 'Date project created',
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			}
		}
	},
	project_title: {
		type: String,
		label: "Project's title"
	},
	project_body: {
		type: String,
		label: "Project's body/description"
	},
	project_tags: {
		type: [String],
		optional: true,
		label: "Project's relevant tags"
	}
});

export const Projects = new Mongo.Collection('projects');

Projects.attachSchema(ProjectsSchema);
