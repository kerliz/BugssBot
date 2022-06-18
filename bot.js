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


let Counter = 0


client.on("messageCreate", (message) => {

    //         console.log( message.author.username)
    if (message.content.match(/yes/gmi)) {
        message.reply("Hiiii")
        Counter++
    }


    if (message.content.match(/work/gmi)) {
        let counter = message.content.split("work").length - 1
        Counter++
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

    if (message.content.match(/welcome/gmi)) {
        // let counter = message.content.split("work").length - 1
        message.reply("\"Knock, knock.\"\n" +
            "\"Who's there?\"")
        setTimeout(function () {
            const embed = new Discord.MessageEmbed()
                .setImage('attachment://welcome.png')
            message.channel.send({embeds: [embed], files: ['./pictures/welcome.png']})
        },1500)
        Counter ++
    }


    if (message.content.match(/like/gmi) && message.author.username !== "bugss") {
        message.reply("like")
        Counter++

    }


    if (message.content.match(/can/gmi) && message.author.username !== "bugss") {
        Counter++

        const embed = new Discord.MessageEmbed()
            .setTitle("Can February March? No, but April May!")
            .setImage('attachment://you.png')
        message.channel.send({embeds: [embed], files: ['./pictures/you.png']})

    }

    if (message.content.match(/but/gmi) && message.author.username !== "bugss") {
        const embed = new Discord.MessageEmbed()
            .setTitle(`But you own me already ${Counter + 1} DOGECOIN \n but next time it'll be ${Counter + 2} DOGECOIN.`)//(`Server icon of ${message.guild.name}`)//("But you own me already  DOGECOIN \n but next time it'll be 51 DOGECOIN.")
            .setImage('attachment://but.png')
        message.channel.send({embeds: [embed], files: ['./pictures/but.png']})
        Counter++
    }
    console.log("count it", Counter * 10)
})


client.login(TOKEN)

