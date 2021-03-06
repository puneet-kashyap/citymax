require("dotenv").config();
const dialogflow = require("dialogflow");
const request = require("request");

const dToken = process.env.DIALOGFLOW_TOKEN;

const getResponse = (query, res) => {
  let options = {
    method: "POST",
    url: "https://api.dialogflow.com/v1/query",
    qs: { v: "20150910" },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${dToken}`
    },
    body: `{lang: "en",query: "${query.msg}",sessionId: "${query.sessionId}"}`
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    let result = JSON.parse(body);
    res.send(result.result.fulfillment.speech);
  });
};

module.exports = {
  getResponse
};
