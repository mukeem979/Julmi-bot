const fs = require("fs");
module.exports.config = {
  name: "𝘀𝗮𝗺𝗲𝗲𝗿 𝗸𝗵𝗮𝗻",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ABHISHEK", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes" ||
     react.includes || react.includes("") || react.includes("jay mahakal") ||
react.includes() ||
react.includes()) {
    var msg = {
        body: `【】`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
