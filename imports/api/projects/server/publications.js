import { Meteor } from 'meteor/meteor';
import { Projects } from '../projects';
import { publishComposite } from 'meteor/reywood:publish-composite';

Meteor.publish('Projects.pub.list', () => {
	return Projects.find();
});
