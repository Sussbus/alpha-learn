import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'

var gcloud, gcs, bucket, bucketMetadata, Request, bound, Collections = {};
var fs = Npm.require('fs');

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
      'file-upload': function (data) {
        console.log("received file " + data.name );
        console.log(__dirname)
        //fs.writeFile("temp/test.png",data.name, data);
        fs.writeFile('./myfile', data.blob, { flag: 'w' }, function(err) {
          if (err) 
              return console.error(err); 
          fs.readFile('./myfile.txt', 'utf-8', function (err, data) {
          if (err)
              return console.error(err);
          console.log(data);

          uploadFile('alphalearn', './myfile')
          });
      })

        fs.writeFile("temp.jpeg" ,data.blob, function(err) {
          if(err) {
            console.log("err", err);
          } else {
            console.log("yay" );
          }
        }) 
        
     }
});

function uploadFile(bucketName, filename) {
  // [START storage_upload_file]
  // Imports the Google Cloud client library
  const Storage = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const filename = 'Local file to upload, e.g. ./local/path/to/file.txt';

  // Uploads a local file to the bucket
  storage
    .bucket(bucketName)
    .upload(filename)
    .then(() => {
      console.log(`${filename} uploaded to ${bucketName}.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // [END storage_upload_file]
}