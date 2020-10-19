const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

const {token} = require("./config.json");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('QuoteBot is online.');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'quote') {
        if (!args.length || args.length == 1) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}! The format is
            !quote, @username, phrase.`);
        }
                         channelMessages = message.channel.messages.fetch({ limit: 100 }).then(messages => {
                            var messagesSent = [];
                            var userName = args[0];
                            USER_ID = userName;
                            const user = message.member.user;
                            if (user !== null) {
                            for(m=1; m<messages.size; m++) {
                                if(("<@" + messages.get(messages.keyArray()[m]).author.id + ">") === USER_ID) {
                                messagesSent.push(messages.get(messages.keyArray()[m]).toString());
                                }
                            }

                            for(m=1; m<messages.size; m++) {
                                if(("<@!" + messages.get(messages.keyArray()[m]).author.id + ">") === USER_ID) {
                                messagesSent.push(messages.get(messages.keyArray()[m]).toString());
                                }
                            }
                        } else {
                            return message.channel.send(`There is no user with that name!`);
                        }
                            var str = args[1];
                            var g = 0;
                            var found = false;
                                    for(g=0; g<messagesSent.length; g++) {
                                        if((messagesSent[g].toLowerCase().includes(str) || messagesSent[g].toUpperCase().includes(str)) && !messagesSent[g].includes("!quote")) {
                                            var userMessage = messagesSent[g];
                                            return message.channel.send(args[0] + ` said "` +  userMessage + `" ` + (g+2) + ` messages ago!`);
                                        }
                                    }
                                    if(found === true) {
                                        return message.channel.send(args[0] + ` said " ` +  userMessage + ` "`);
                                    } else {
                                        return message.channel.send(args[0] + ` never said: ` + `"`+ str + `"`);
                                    }
                          })

    }
});




client.login(token);
