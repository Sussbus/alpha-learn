var gcloud, gcs, bucket, bucketMetadata, Request, bound, Collections = {};

if (Meteor.isServer) {
  gcloud = Npm.require('google-cloud')({
    projectId: 'durable-melody-204106', // <-- Replace this with your project ID
    keyFilename: './alphalearn-7490cf07398b.json'  // <-- Replace this with the path to your key.json
  });
  gcs = gcloud.storage();
  bucket = gcs.bucket('alphalearn'); // <-- Replace this with your bucket name
  bucket.getMetadata(function(error, metadata, apiResponse){
    if (error) {
      console.error(error);
    }
  });
  Request = Npm.require('request');
  bound = Meteor.bindEnvironment(function(callback){
    return callback();
  });
}

function downloadFile(bucketName, srcFilename, destFilename) {
    // [START storage_download_file]
    // Imports the Google Cloud client library
    const Storage = require('@google-cloud/storage');
  
    // Creates a client
    const storage = new Storage();

    const options = {
      // The path to which the file should be downloaded, e.g. "./file.txt"
      destination: destFilename,
    };
  
    // Downloads the file
    storage
      .bucket(bucketName)
      .file(srcFilename)
      .download(options)
      .then(() => {
        console.log(
          `gs://${bucketName}/${srcFilename} downloaded to ${destFilename}.`
        );
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
    // [END storage_download_file]
  }