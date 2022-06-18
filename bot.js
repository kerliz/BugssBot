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

    if (message.content.match(/team$/gmi) && message.author.username !== "bugss") {
        Counter++
        const embed = new Discord.MessageEmbed()
            .setTitle("I'm already looking for you a new team!")
            .setImage('attachment://i.png')
        message.channel.send({embeds: [embed], files: ['./pictures/team.png']})
    }

    if (message.content.match(/i$/gmi) && message.author.username !== "bugss") {
        Counter++
        const embed = new Discord.MessageEmbed()
            .setTitle("Oops I did it again.")
            .setImage('attachment://i.png')
        message.channel.send({embeds: [embed], files: ['./pictures/i.png']})
    }

    if (message.content.match(/if$/gmi) && message.author.username !== "bugss") {
        Counter++
        const embed = new Discord.MessageEmbed()
            .setTitle("if (sad() === true) {\n" +
                "      sad.stop();\n" +
                "      beAwesome();\n" +
                "}")
            .setImage('attachment://if.png')
        message.channel.send({embeds: [embed], files: ['./pictures/if.png']})
    }

    if (message.content.match(/discord$/gmi) && message.author.username !== "bugss") {
        Counter++
        const embed = new Discord.MessageEmbed()
            .setTitle("how many Discord users does it take to change a lightbulb? None. They prefer dark mode.")
            .setImage('attachment://discord.png')
        message.channel.send({embeds: [embed], files: ['./pictures/discord.png']})
    }

    if (message.content.match(/we$/gmi) && message.author.username !== "bugss") {
        Counter++
        const embed = new Discord.MessageEmbed()
            .setTitle("Next time \"We will We will ban you\"!")
            .setImage('attachment://we.png')
        message.channel.send({embeds: [embed], files: ['./pictures/we.png']})
    }

    if (message.content.match(/welcome$/gmi) && message.author.username !== "bugss") {
        // let counter = message.content.split("work").length - 1
        message.reply("\"Knock, knock.\"\n" +
            "\"Who's there?\"")
        setTimeout(function () {
            const embed = new Discord.MessageEmbed()
                .setTitle("I'm not mic, I'm Kristers")
                .setImage('attachment://welcome.png')
            message.channel.send({embeds: [embed], files: ['./pictures/welcome.png']})
        }, 1500)
        Counter++
    }


    if (message.content.match(/can$/gmi) && message.author.username !== "bugss") {
        Counter++

        const embed = new Discord.MessageEmbed()
            .setTitle("Can February March? No, but April May!")
            .setImage('attachment://you.png')
        message.channel.send({embeds: [embed], files: ['./pictures/you.png']})

    }

    if (message.content.match(/but$/gmi) && message.author.username !== "bugss") {
        const embed = new Discord.MessageEmbed()
            .setTitle(`But you own me already ${Counter + 1} DOGECOIN \n but next time it'll be ${Counter + 2} DOGECOIN.`)//(`Server icon of ${message.guild.name}`)//("But you own me already  DOGECOIN \n but next time it'll be 51 DOGECOIN.")
            .setImage('attachment://but.png')
        message.channel.send({embeds: [embed], files: ['./pictures/but.png']})
        Counter++
    }
    //console.log("count it", Counter * 10)
})


client.login(TOKEN)

