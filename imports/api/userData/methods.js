import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base'
import { Random } from 'meteor/random'
import Future from 'fibers/future';

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
    'file-upload'(data) {
      console.log("received file " + data.name );
      const name = data.name;
      const filename = Random.id()+name.substr(name.indexOf('.'));;
      let base64Image = data.blob.split(';base64,').pop();
      fs.writeFile('./'+filename, base64Image, { encoding: 'base64', flag: 'w' }, (err) => {
        if (err) {
          return console.error(err); 
        }
        uploadFile('alphalearn', './'+filename)
      });
    },
    'getimages'() {
      var future = new Future();
      
      const Storage = require('@google-cloud/storage');
      const storage = new Storage();
      storage
        .bucket('alphalearn')
        .getFiles()
        .then(results => {
          const files = results[0];
          const images = [];
          files.forEach(element => {
            const name = element.name;
            //console.log(element.name)
            //console.log(name.substr(name.indexOf('.')) === '.jpg')
            if (name.substr(name.indexOf('.')) === '.jpg' || name.substr(name.indexOf('.')) === '.png'){
              images.push(name);
            }
          });
          future.return( images);
        })
        .catch(err => {
          console.error('ERROR:', err);
        });

      return future.wait();
    }
});

const uploadFile = (bucketName, filename) => {
  // [START storage_upload_file]
  // Imports the Google Cloud client library
  const Storage = require('@google-cloud/storage');

  // Creates a client
  const storage = new Storage();

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
}