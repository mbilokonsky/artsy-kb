module.exports = async (req, res) => {
  console.log("SLACK ENDPOINT HIT!");

  const {
    body
  } = req;
  const json = JSON.stringify(body, null, 2);
  console.dir(req);
  console.log("req keys:", Object.keys(req).join(", "));

  const output = {
    response_type: "ephemeral",
    block
  };

  res.json(output);
};

const block = [{
    "type": "section",
    "block_id": "section789",
    "fields": [{
      "type": "mrkdwn",
      "text": "Welcome to Artsy knowledge base!"
    }]
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": "Pick an item from the dropdown list"
    },
    "accessory": {
      "type": "static_select",
      "placeholder": {
        "type": "plain_text",
        "text": "Select an item",
        "emoji": true
      },
      "options": [{
          "text": {
            "type": "plain_text",
            "text": "Ask a question",
            "emoji": true
          },
          "value": "askQuestion"
        },
        {
          "text": {
            "type": "plain_text",
            "text": "Search by tag",
            "emoji": true
          },
          "value": "searchByTag"
        },
      ]
    }
  },
]