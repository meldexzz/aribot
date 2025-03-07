let handler = async (m, { conn }) => {
    let menu = `🌟 *Estos son los comandos:* 🌟

🎭 *.comando1* - Descripción del comando 1  
🚀 *.comando2* - Descripción del comando 2  
🎵 *.comando3* - Descripción del comando 3  
📌 Y muchos más...`;

    conn.sendMessage(m.chat, { text: menu }, { quoted: m });
};

handler.command = ['menu'];
export default handler;
