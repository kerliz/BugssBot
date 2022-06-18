// using bad word - you would have to add that amount of money to the swearing jar

//statistics bot
// longest message
// who wrote the most


const Discord = require("discord.js")
const TOKEN = "OTg3NjI1Mjc2ODY1NDEzMTIw.Gk-w4z.aCO5-YSsoqfOtdSu-HvaZiOLOd7PzQMoAzyJbc"
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log("Logged in as " + client.user.tag)
})

// can markidega


client.on("messageCreate", (message) => {
    if (message.content == "yes") {
        message.reply("Hiiii")
    }

    if (message.content.includes("work")) {
        let counter = message.content.split("work").length - 1
        console.log(counter)
        for (let i = 0; i < counter; i++) {
            message.reply("no")
            message.react('😾')
            setTimeout(function () {
                const embed = new Discord.MessageEmbed()
                    .setImage('https://img.joomcdn.net/d6b061ccfef97b7e216f326d08003551532c6d1e_1024_1024.jpeg');
                message.channel.send({embeds: [embed]})
            }, 2000)
        }
    }


    if (message.content.includes("like")  && message.author.username !== "bugss") {
        console.log( message.author.username)
        message.reply("like")
    }

    if (message.content.match(/can/gmi) && message.author.username !== "bugss") {
        const embed = new Discord.MessageEmbed()
            .setTitle("Can February March? No, but April May!")
            .setImage('attachment://you.png')
        message.channel.send({ embeds: [embed], files: ['./you.png']})

    }

})


// regexp






client.login(TOKEN)

