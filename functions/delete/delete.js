const faunadb = require('faunadb'),
  q = faunadb.query;
  require('dotenv').config();

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }
  try {
    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_KEY });
    var id = JSON.parse(event.body)
    var result = await client.query(q.Delete(q.Ref(q.Collection('notes'), id)));

    return {
      statusCode: 200,
      body: JSON.stringify(result),

    }
  } catch (e) {
    console.log('Error: ', e);
    return { statusCode: 500, body: e.toString() }
  }
}