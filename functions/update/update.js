
const faunadb = require('faunadb'),
  q = faunadb.query;
  require('dotenv').config();

exports.handler = async (event, context) => {
  console.log(event.body)
  try {
    if (event.httpMethod !== "PATCH") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }
    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_KEY });
    var { id, note } = JSON.parse(event.body)
    var result = await client.query(
      q.Update(q.Ref(q.Collection('notes'), id), {
        data: {
          note
        },
      })
    );
    return {
      statusCode: 200,
      body: JSON.stringify(result),

    }
  } catch (e) {
    console.log('Error: ',e);

  }
}

