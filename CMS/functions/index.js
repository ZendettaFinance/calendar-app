const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");
admin.initializeApp({ projectId: "calendar-d431e" });

const cors = require("cors")({ origin: true });
const db = admin.firestore();

exports.getCalendarEvents = functions.https.onRequest(async (req, res) => {
  let events = [];
  cors(req, res, async (err) => {
    await db
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

    if (err) {
      console.error("CORS blocked request -> ", err);
    }
    res.status(200).send(JSON.stringify(events));
  });
});

exports.addCalendarEvent = functions.https.onRequest(async (req, res) => {
  const event = req.body;

  const data = {
    title: event.title,
    startdate: event.startdate,
    enddate: event.enddate,
    description: event.description,
    
    
    
    user: "kutaibah",
  };
  cors(req, res, async (err) => {
    await db
      .collection("calendar-english")
      .doc()
      .set({ data })
      .then(() => console.log("Succesfully stored subscriber"));

    if (err) {
      console.error("CORS blocked request -> ", err);
    }

    res.status(200).send("success");
  });
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
