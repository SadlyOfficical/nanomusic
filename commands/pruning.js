const fs = require("fs");
const config = require("../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pruning",
  description: "Toggle pruning of bot messages",
  execute(message) {
    config.PRUNING = !config.PRUNING;

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), (err) => {
      if (err) {
        console.log(err);
        return message.channel.send("There was an error writing to the file.").catch(console.error);
      }

      const prunning = new MessageEmbed()
      .setDescription(`\`\`\`\🚮 | Message prunning is: ${config.PRUNING ? "**Enabled**" : "**Disabled**"}\`\`\``)

      return message.channel
        .send(prunning)
        .catch(console.error);
    });
  }
};
