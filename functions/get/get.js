const faunadb = require('faunadb'),
  q = faunadb.query;
require('dotenv').config();
exports.handler = async (event, context) => {
  // if (event.httpMethod !== "GET") {
  //       return { statusCode: 405, body: "Method Not Allowed" };
  //   }
  try {
    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_KEY });
    var result = await client.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index('all_notes')
          )
        ),
        (ref) => q.Get(ref)
      )
    );
    console.log("Document retrived from Container in Database: " + JSON.stringify(result.data));

    return {
      statusCode: 200,
      body: JSON.stringify(result.data),

    }
  } catch (e) {
    console.log('Error: ', e);
  }
}
