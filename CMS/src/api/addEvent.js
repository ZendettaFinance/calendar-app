// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// const addEvent = async (payload) => {
//     return await fetch(
//       "http://localhost:5001/calendar-d431e/us-central1/addCalendarEvent",
//       {
//         method: "POST",
//         body: payload,
//         mode: "no-cors",
//         headers: {
//           // "Content-Type": "application/json",
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       }
//     )
//       .then((res) => console.log("response: ", res))
//       .catch((error) => {
//         console.log("error:", error);
//       });
//   };

import axios from "axios";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

  const addEvent = async (payload) => {
    return await axios
      .post(
        "http://localhost:5001/calendar-d431e/us-central1/addCalendarEvent",payload,
        {
          mode:"no-cors",
          headers:{
            "Access-Control-Allow-Origin":"*"
          }
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  export { addEvent };