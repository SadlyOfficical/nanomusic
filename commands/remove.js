const { canModifyQueue } = require("../util/updatevoice");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "remove",
  description: "Remove song from the queue",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.prefix}remove <Queue Number>`);

    const song = queue.songs.splice(args[0] - 1, 1);

    const removed = new MessageEmbed()
    .setDescription(`\`\`\`❌ | Song has removed: **${song[0].title}** from the queue.\`\`\``)

    queue.textChannel.send(removed);
  }
};
