const discord = require('discord.js');
const client = new discord.Client();
const disbut = require('discord-buttons')(client);

let config = {
"vk": "Vampir Köylü Rol ID",
"dc": "Doğruluk Cesaretlik Rol ID",
"gartic": "Gartic IO Rol ID",
"botOwner": "Bot Sahibinin ID'si",
"token": "Bot Tokeni"
};

client.on("message", async (message) => {
    const args = message.content.split(" ");
    const command = args.shift();
    if (command === "!button" && botOwner == message.author.id) {
    let vk = new disbut.MessageButton().setStyle('green').setLabel('Vampir Köylü!').setID('vk')
    let dc = new disbut.MessageButton().setStyle('red').setLabel('Doğruluk / Cesaretlik!').setID('dc')
    let grt = new disbut.MessageButton().setStyle("gray").setLabel('Gartic!').setID('gartic')
    message.channel.send('Aşağıdaki menüden kendinize oyun seçebilirsiniz. Bir oyunun rolünü almak için o butona tıklayın.', {
        buttons: [vk, dc, grt]
    });
}
});

client.on('clickButton', async (button) => {
    if (button.id === 'vk') {
        if (button.clicker.member.roles.cache.get(config.vk)) {
            await button.clicker.member.roles.remove(config.vk);await button.think(true);await button.reply.edit("Vampir Köylü rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.vk);await button.think(true);await button.reply.edit("Vampir Köylü rolü üzerinize verildi.")
        }
    }
    if (button.id === 'dc') {
        if (button.clicker.member.roles.cache.get(config.dc)) {
            await button.clicker.member.roles.remove(config.dc);await button.think(true);await button.reply.edit("Doğruluk Cesaret rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.dc);await button.think(true);await button.reply.edit("Doğruluk Cesaret rolü üzerinize verildi.")
        }

    }
    if (button.id === 'gartic') {
        if (button.clicker.member.roles.cache.get(config.gartic)) {
            await button.clicker.member.roles.remove(config.gartic);await button.think(true);await button.reply.edit("Gartic.İO rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.gartic);await button.think(true);await button.reply.edit("Gartic rolü üzerinize verildi.")
        }

    }

});


client.login(config.token)
