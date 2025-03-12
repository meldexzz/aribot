let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];
    
    // Ruta de la imagen de Spotify
    const imagenSpotify = './plataformas/spotify.jpg'; // Ruta de la imagen en la carpeta 'plataformas'
    
    // Comprobamos si se ha configurado un catálogo para Spotify
    if (chat.setspotify) {
        let catalogo = chat.setspotify; // Obtener el catálogo de Spotify
        
        // Enviar imagen y catálogo juntos sin texto adicional en la imagen
        await conn.reply(m.chat, catalogo, m, { 
            image: { url: imagenSpotify },  // Se envía la imagen antes del texto
            // No agregamos texto extra en la imagen
        });
    } else {
        // Si no se ha configurado un catálogo de Spotify, mostramos un mensaje de advertencia
        m.reply(`𝙉𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤 𝙪𝙣 𝙘𝙖𝙩á𝙡𝙤𝙜𝙤 𝙥𝙖𝙧𝙖 𝚂𝚙𝚘𝚝𝚒𝚏𝚢, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 .𝙨𝙚𝙩𝙨𝙥𝙤𝚝𝙞𝚏𝚢 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙪𝙣𝙤.`); 
    }
};

// Definir el comando .setspotify
handler.command = ['setspotify'];
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
