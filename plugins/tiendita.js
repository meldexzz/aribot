const fs = require('fs'); // Para leer archivos locales

let handler = async (m, { conn, usedPrefix }) => {
    let str = `╔═══════════════╗
┇➤𝙏𝙄𝙀𝙉𝘿𝙄𝙏𝘼 𝘼𝙧𝙞𝘽𝙤𝙩 / 𝘼𝙧𝙮
╚═══════════════╝

▸▸𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀𝙎◂◂

▸▸ 𝘾𝙊𝙈𝘽𝙄𝘼𝙍 ◂◂
│┊➺ 🛒 .𝘤𝘰𝘮𝘱𝘳𝘢𝘳
│┊➺ 📦 .𝘤𝘢𝘵𝘢𝘭𝘰𝘨𝘰
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  

▸▸ 𝙀𝙎𝙋𝙀𝘾𝙄𝘼𝙇𝙀𝙎 ◂◂
│┊➺ 🎁 .𝘰𝘧𝘦𝘳𝘵𝘢𝘴
│┊➺ 🔥 .𝘤𝘰𝘮𝘣𝘰𝘴
│┊➺ 🎊 .𝘴𝘰𝘳𝘵𝘦𝘰
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  

▸▸ 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀𝙎 ◂◂
│┊➺ 📺 .𝘱𝘭𝘦x
│┊➺ 🎶 .𝘴𝘱𝘰𝘵𝘪𝘧𝘺
│┊➺ 🎥 .𝘺𝘰𝘶𝘵𝘶𝘣𝘦
│┊➺ 🖼️ .𝘤𝘢𝘯𝘷𝘢
│┊➺ 🎬 .𝘯𝘦𝘹𝘵𝘧𝘪𝘹
│┊➺ 🏰 .𝘥𝘪𝘴𝘯𝘦𝘺
│┊➺ 📡 .𝘩𝘣𝘰𝘮𝘢𝘹
│┊➺ 💼 .𝘤𝘢𝘯𝘷𝘢 𝘰𝘶𝘧𝘪𝘤𝘦
│┊➺ ✂️ .𝘤𝘢𝘱𝘤𝘶𝘵
│┊➺ 📜 .𝘯𝘶𝘦𝘷𝘰𝘴
│┊➺ 📑 .𝘥𝘰𝘤𝘶
│┊➺ 🔲 .𝘰𝘵𝘳𝘰𝘴
│┊➺ 🔒 .𝘨𝘢𝘳𝘢𝘯𝘵𝘪𝘢
│┊➺ 📝 .𝘳𝘦𝘨𝘭𝘢𝘴
│┊➺ 🧾 .𝘤𝘶𝘦𝘯𝘵𝘢
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  

▸▸ 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 ◂◂
│┊➺ 🚚 .𝘦𝘯𝘵𝘳𝘦𝘨𝘢
│┊➺ 💵 .𝘱𝘢𝘨𝘰𝘳𝘦𝘤𝘪𝘣
│┊➺ ⏳ .𝘦𝘴𝘱𝘦𝘳𝘢
│┊➺ 🎉 .𝘥𝘪𝘴𝘧𝘳𝘶𝘵𝘢
│┊➺ 🔄 .𝘪𝘯𝘷𝘦𝘯𝘷
│┊➺ 🔁 .𝘳𝘦𝘯𝘰𝘷𝘢𝘤𝘪𝘰𝘯𝘦𝘹𝘪𝘵
│┊➺ 🌅 .𝘩𝘢𝘴𝘵𝘢𝘮𝘢ñ𝘢
│┊➺ 💤 .𝘳𝘦𝘱𝘰
│┊➺ 🧘 .𝘳𝘦𝘭𝘢𝘺
│┊➺ 📱 .𝘤𝘰𝘯𝘵𝘢𝘤𝘵𝘢𝘮𝘦
│┊➺ ❌ .𝘧𝘶𝘦𝘳𝘢𝘴𝘦𝘳𝘷𝘪𝘤𝘪𝘰
│┊➺ 🙏 .𝘨𝘳𝘢𝘤𝘪𝘢𝘴
│┊➺ 🛠️ .𝘴𝘰𝘱𝘰𝘳𝘵𝘦
│┊➺ 💬 .𝘳𝘦𝘧𝘦
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  

𝘼𝙧𝙞𝘽𝙤𝙩 / 𝘼𝙧𝙮`;

    // Ruta local de la imagen en la raíz del proyecto
    let imageUrl = '../tiendita.jpg';  // La imagen está en la raíz del proyecto

    // Si el mensaje es en un grupo
    if (m.isGroup) {
        let mentions = [m.sender];  // Mencionamos a quien mandó el comando
        await conn.sendMessage(m.chat, { image: fs.createReadStream(imageUrl), caption: str, mentions }, { quoted: m });
    } else {
        // Si no es en un grupo, solo se envía el mensaje con la imagen
        await conn.sendMessage(m.chat, { image: fs.createReadStream(imageUrl), caption: str }, { quoted: m });
    }

    // Reacción del bot, puede cambiarse el emoji.
    m.react('🛍️');
};

handler.help = ['tiendita'];
handler.tags = ['información'];
handler.command = ['tiendita'];  // El comando será '.tiendita'
handler.group = true;

export default handler;
