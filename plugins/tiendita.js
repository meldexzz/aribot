let handler = async (m, { conn, usedPrefix }) => {
    let str = `¡Bienvenido a la tienda de ariBot! Aquí están nuestras opciones disponibles:\n`;
    str += `${usedPrefix}combos - Ver combos disponibles\n`;
    str += `${usedPrefix}ofertas - Ver nuestras ofertas\n`;
    str += `${usedPrefix}promociones - Ver promociones especiales`;

    m.react('🛍️');  // Reacción que se puede cambiar si prefieres otro emoji.
    
    // Si el mensaje es en un grupo
    if (m.isGroup) {
        let mentions = [m.sender];  // Mencionamos a quien mandó el comando
        conn.sendMessage(m.chat, { text: str, mentions }, { quoted: m });
    } else {
        // Si no es en un grupo, solo se envía el mensaje
        conn.sendMessage(m.chat, { text: str }, { quoted: m });
    }
}

handler.help = ['tiendita'];
handler.tags = ['información'];
handler.command = ['tiendita'];  // El comando será '.tiendita'
handler.group = true;

export default handler;
