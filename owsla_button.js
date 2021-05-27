const discord = require('discord.js');
const client = new discord.Client();
const disbut = require('discord-buttons')(client);

let roller = {
    "vk": "Vampir Köylü Rol ID",
    "dc": "Doğruluk Cesaretlik Rol ID",
    "gartic": "Gartic IO Rol ID"
};

client.on("message", async (message) => {
    if (message.content !== "!button" && message.author.id === "BotOwnerID") return; // BOT SAHİBİ ID' GİRİNİZ VE BU KOMUTU SADECE 1 DEFALIĞINA 1 KANALDA KULLANINIZ!
    let vk = new disbut.MessageButton()
        .setStyle('green')
        .setLabel('Vampir Köylü!')
        .setID('vk')
    let dc = new disbut.MessageButton()
        .setStyle('red')
        .setLabel('Doğruluk / Cesaretlik!')
        .setID('dc')
    let grt = new disbut.MessageButton()
        .setStyle("gray")
        .setLabel('Gartic!')
        .setID('gartic')

    message.channel.send('Aşağıdaki menüden kendinize oyun seçebilirsiniz. Bir oyunun rolünü almak için o butona tıklayın.', {
        buttons: [vk, dc, grt]
    });
})

client.on('clickButton', async (button) => {
    if (button.id === 'vk') {
        if (button.clicker.member.roles.cache.get(roller.vk)) {
            await button.clicker.member.roles.remove(roller.vk)
            await button.think(true);
            await button.reply.edit("Vampir Köylü rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(roller.vk)
            await button.think(true);
            await button.reply.edit("Vampir Köylü rolü üzerinize verildi.")
        }
    }
    if (button.id === 'dc') {
        if (button.clicker.member.roles.cache.get(roller.dc)) {
            await button.clicker.member.roles.remove(roller.dc)
            await button.think(true);
            await button.reply.edit("Doğruluk Cesaret rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(roller.dc)
            await button.think(true);
            await button.reply.edit("Doğruluk Cesaret rolü üzerinize verildi.")
        }

    }
    if (button.id === 'gartic') {
        if (button.clicker.member.roles.cache.get(roller.gartic)) {
            await button.clicker.member.roles.remove(roller.gartic)
            await button.think(true);
            await button.reply.edit("Gartic.İO rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(roller.gartic)
            await button.think(true);
            await button.reply.edit("Gartic rolü üzerinize verildi.")
        }

    }

});


client.login("BOT TOKEN")