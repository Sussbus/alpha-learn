import { Mongo } from "meteor/mongo"
import { SimpleSchema } from "meteor/aldeed:simple-schema"

ProjectsSchema = new SimpleSchema({
    user_id: {
        type: String,
        label: "Creator's Meteor.userId"
    },
    createdAt: {
        type: Date,
        label: "Date project created",
        autoValue: function() {
            if (this.isInsert) {
                return new Date()
            }
        }
    },
    project_title: {
        type: String,
        label: "Project's title",
        optional: false
    },
    project_body: {
        type: String,
        label: "Project's body/description",
        optional: false
    },
    project_tags: {
        type: [String],
        optional: false,
        label: "Project's relevant tags"
    },
    labeled: {
        type: SimpleSchema.Integer,
        optional: false,
        label: "Number of labeled items in dataset"
    }
})

export const Projects = new Mongo.Collection("projects")

Projects.attachSchema(ProjectsSchema)
