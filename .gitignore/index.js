const Discord = require('discord.js')
const bot = new Discord.Client()
const ms = require ("ms");
const fs = require("fs")
const botcyb = new Discord.Client()
botcyb.login(process.env.TOKENCYB)
botcyb.commandscyb = new Discord.Collection();
var prefixcyb = ("/")
fs.readdir("./commandscyb/", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Je ne trouve pas les commandes");
      return;
    }
    jsfile.forEach((f, i) =>{
      let props = require(`./commandscyb/${f}`);
      console.log(`${f} à bien été chargé`);
      botcyb.commandscyb.set(props.help.name, props);
    });
  });
  botcyb.on("message", async message => {
    let auth = message.author
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = message.content.split(" ").slice(1);
    let commandfile = botcyb.commandscyb.get(cmd/*.slice(prefixcyb.length)*/);
    if(commandfile) commandfile.run(botcyb,message,args,auth);
});


botcyb.on("message", message => {
    var blackembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("commande impossible à effectuer!")
  .addField("vous ne pouvez pas exécuté de message ici car vous n'êtes pas autorisé à utilisé le bot dans ce serveur là, pour plsu d'information, veuillez contacté thunlos", "****", true)
  .setImage("http://www.parisenligne.com/wp-content/imgs/image-liste-noire-70.jpg")
   if(message.content.startsWith(prefixcyb)) {
    if(message.guild.id === "517032764571385857") {
    }else if(message.guild.id === "540175708840787997"){
    }else{
        message.delete()
        return message.channel.send(blackembed)
    }}})

botcyb.on("message", message => {
var auth = message.author

 
    if(message.content.startsWith(prefixcyb + "stop")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
message.reply("D'accord je suis ne train de m'eteindre, n'oublie pas de me rallumer :'(")
botcyb.destroy()
process.exit(60000)
}else message.reply("désolé mais tu n'a pas le droit d'utilisé cette commande") 
}
       
})

botcyb.on('message', async message =>  {
    var auth = message.author
    let blacklist2 = ['<@293857217365540895>'];

    let pingbl = false;
    for (var i in blacklist2) {
        if (message.content.toLowerCase().includes(blacklist2[i].toLowerCase())) pingbl = true;
    }
    if(pingbl) {
        let embedping = new Discord.RichEmbed()
        .setTitle("Ping cyber")
        .setColor("FE0000")
        .addField(`salon`, `${message.channel.name}`, true)
        .addField("Auteur", `${auth}`)
    message.guild.channels.find("name", "crocs-logs").send(embedping)
    message.guild.channels.find("name", "crocs-logs").send("<@&517053064792899584>")
    }
})

botcyb.on('message', async message =>  {
    if(message.channel.name === "🔵pub-discord🔵") {
    }else{
        if(message.member.hasPermission("ADMINISTRATOR")) {}else{

        
    var auth = message.author
    let blacklist2 = ['discord.gg/'];

    let pingbl = false;
    for (var i in blacklist2) {
        if (message.content.toLowerCase().includes(blacklist2[i].toLowerCase())) pingbl = true;
    }
    if(pingbl) {
    message.guild.channels.find("name", "crocs-logs").send(`${auth} a envoyé un lien discord dans ${message.channel.name} (<@&517053064792899584>))`)
    }
}
}
})

botcyb.on("ready", ready => {
   botcyb.guilds.find("id","540175708840787997").channels.find("id", "571996266104619008").send("Je viens de me relancé")
})
 botcyb.on("guildMemberRemove", member => {
    let list = botcyb.guilds.find("id","517032764571385857").memberCount
    console.log(list)
    let list2 = (`Utilisateur total: ${list}`)
    botcyb.guilds.find("id","517032764571385857").channels.find("id", "580093284211228681").edit({name: list2})
 })

 botcyb.on("guildMemberAdd", member => {
    let list = botcyb.guilds.find("id","517032764571385857").memberCount
    console.log(list)
    let list2 = (`Utilisateur total: ${list}`)
    botcyb.guilds.find("id","517032764571385857").channels.find("id", "580093284211228681").edit({name: list2})
})


 
