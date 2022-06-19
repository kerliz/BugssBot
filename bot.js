// using bad word - you would have to add that amount of money to the swearing jar

const Discord = require("discord.js")
const TOKEN = 'TOKEN'
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

const countOccurences = function(string, word) {
    return string.split(word).length - 1;
}

client.on("messageCreate", (message) => {

    if (message.content.match(/code$/gmi)) {
        message.reply("I see some hacking out there!")
    }


    if (message.content.match(/dev$/gmi) && message.author.username !== "bugss") {
        message.reply("Hello there, dev!\nGot an Update?")
    }

    //

    if (countOccurences(message.content, "and") > 1) {
        message.reply(`Too much same words in Your sentence, ${message.author}!`)
    }

    if (message.content.match(/cat$/gmi)) {

        // const user = message.mentions.members.first();
        // if(!user) return;

        const colors = [
            0xffffff,
            0x000000,
            0x0000ff,
            0xff0000,
            0x7a7a7a,
            0x00ffff,
            0xffd700,
            0x4b0082
        ]

        const embed = new Discord.MessageEmbed()
            .setTitle('Attachment')
            .setDescription(`${message.author} is answering with a cat.`)
            .setColor(colors[Math.floor(Math.random() * colors.length)])
            // .setImage('http://62.77.155.157/cat1.gif') // by url address
            .setImage('attachment://cat1.gif');
        message.channel.send({ embeds: [embed], files: ['./pictures/cat1.gif']})
    }



    if (message.content.match(/team$/gmi) && message.author.username !== "bugss") {
        let counter = message.content.split("team").length - 1
        for (let i = 0; i < counter; i++) {

            Counter++
            const embed = new Discord.MessageEmbed()
                .setTitle("I'm already searching you a new team!")
                .setImage('attachment://i.png')
            message.channel.send({embeds: [embed], files: ['./pictures/team.png']})
        }
    }

    if (message.content.match(/i$/gmi) && message.author.username !== "bugss") {
        let counter = message.content.split("i").length - 1
        for (let i = 0; i < counter; i++) {
            Counter++
            const embed = new Discord.MessageEmbed()
                .setTitle("Oops I did it again.")
                .setImage('attachment://i.png')
            message.channel.send({embeds: [embed], files: ['./pictures/i.png']})
        }
    }

    if (message.content.match(/if$/gmi) && message.author.username !== "bugss") {
        let counter = message.content.split("if").length - 1
        for (let i = 0; i < counter; i++) {
            Counter++
            const embed = new Discord.MessageEmbed()
                .setTitle("if (sad() === true) {\n" +
                    "      sad.stop();\n" +
                    "      beAwesome();\n" +
                    "}")
                .setImage('attachment://if.png')
            message.channel.send({embeds: [embed], files: ['./pictures/if.png']})
        }
    }

    if (message.content.match(/discord$/gmi) && message.author.username !== "bugss") {
        let counter = message.content.split("discord").length - 1
        for (let i = 0; i < counter; i++) {
            Counter++
            const embed = new Discord.MessageEmbed()
                .setTitle("how many Discord users does it take to change a lightbulb? None. They prefer dark mode.")
                .setImage('attachment://discord.png')
            message.channel.send({embeds: [embed], files: ['./pictures/discord.png']})
        }
    }

    if (message.content.match(/we$/gmi) && message.author.username !== "bugss") {
        let counter = message.content.split("we").length - 1
        for (let i = 0; i < counter; i++) {
            Counter++
            const embed = new Discord.MessageEmbed()
                .setTitle("Next time \"We will We will ban you\"!")
                .setImage('attachment://we.png')
            message.channel.send({embeds: [embed], files: ['./pictures/we.png']})
        }
    }

    if (message.content.match(/welcome$/gmi) && message.author.username !== "bugss") {
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
        let counter = message.content.split("can").length - 1
        for (let i = 0; i < counter; i++) {
            Counter++

            const embed = new Discord.MessageEmbed()
                .setTitle("Can February March? No, but April May!")
                .setImage('attachment://you.png')
            message.channel.send({embeds: [embed], files: ['./pictures/you.png']})
        }
    }

    if (message.content.match(/but$/gmi) && message.author.username !== "bugss") {
        let counter = message.content.split("but").length - 1
        for (let i = 0; i < counter; i++) {
            const embed = new Discord.MessageEmbed()
                .setTitle(`But you own me already ${Counter + 1} DOGECOIN \n but next time it'll be ${Counter + 2} DOGECOIN.`)//(`Server icon of ${message.guild.name}`)//("But you own me already  DOGECOIN \n but next time it'll be 51 DOGECOIN.")
                .setImage('attachment://but.png')
            message.channel.send({embeds: [embed], files: ['./pictures/but.png']})
            Counter++
        }
    }

})


client.login(TOKEN)

