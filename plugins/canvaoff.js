let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];

    // Verificamos si se ha configurado el texto para CanvaOffice
    if (chat.setcanvaoffice) {
        let canvaoffice = chat.setcanvaoffice;
        await conn.reply(m.chat, canvaoffice, m);
    } else {
        m.reply('𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝘾𝙖𝙣𝙫𝙖𝙊𝙛𝙛𝙞𝙘𝙚, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙘𝙖𝙣𝙫𝙖𝙤𝙛𝙛𝙞𝙘𝙚 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.');
    }
};

handler.command = ['canvaoffice'];
handler.group = true;
export default handler;
