let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];
    
    // Ruta de la imagen
    const imagenNetflix = './imagenes/netflix.jpg'; // Ruta local donde se encuentra la imagen
    
    // Comprobamos si se ha configurado un catálogo para Netflix
    if (chat.setnetflix) {
        let catalogo = chat.setnetflix; // Obtener el catálogo de Netflix
        
        // Enviar imagen y catálogo juntos
        await conn.reply(m.chat, catalogo, m, { 
            image: { url: imagenNetflix },  // Se envía la imagen antes del texto
        });
    } else {
        // Si no se ha configurado un catálogo de Netflix, mostramos un mensaje de advertencia
        m.reply(`𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝙉𝙚𝙩𝙛𝙡𝙞𝙭, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙣𝙚𝙩𝙛𝙡𝙞𝙭 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.`); 
    }
};

// Definir el comando .setnetflix
handler.command = ['setnetflix'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
