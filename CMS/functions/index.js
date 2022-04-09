const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
admin.initializeApp({ projectId: "calendar-d431e" });


const cors = require("cors")({
  origin: true,
});

const getCalendarEvents = express();


getCalendarEvents.get(async (req, res) => {
    let events = [];
    
  
    return cors(req, res, async (err) => {
      await admin
        .firestore()
        .collection("calendar-english")
        .get()
        .then((Snapshot) => {
          Snapshot.forEach((doc) => {
            events.push({
              id: doc.id,
              data: doc.data(),
            });
          });
        });


        if(err){
            console.error("CORS blocked request -> ", err);

        }
      res.status(200).send(JSON.stringify(events));
    });
  });


  exports.getCalendarEvents = functions.https.onRequest(getCalendarEvents) ;


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
