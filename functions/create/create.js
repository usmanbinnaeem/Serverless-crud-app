const faunadb = require("faunadb"),
  q = faunadb.query;
require("dotenv").config();

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  console.log(event.body);
  try {
    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_KEY });
    var note = JSON.parse(event.body);
    console.log(note, "note reached to server");
    var result = await client.query(
      q.Create(q.Collection("notes"), {
        data: {
          note
        },
      })
    );
    console.log("Document added Database: " + JSON.stringify(result));
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (e) {
    console.log("Error: ", e);
  }
};
