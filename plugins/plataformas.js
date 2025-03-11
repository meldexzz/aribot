let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];

    // Definir las plataformas con sus URLs y mensajes predeterminados
    let platforms = {
        '.netflix': {
            img: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Netflix_Logo.png',
            message: 'Netflix: El mejor lugar para ver tus series y películas favoritas.'
        },
        '.plex': {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Plex_logo.svg/1200px-Plex_logo.svg.png',
            message: 'Plex: Organiza y transmite tus medios con Plex.'
        },
        '.spotify': {
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Spotify_logo_with_text.svg',
            message: 'Spotify: Escucha tu música favorita y más en cualquier lugar.'
        },
        '.youtube': {
            img: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png',
            message: 'YouTube: La mejor plataforma para videos y entretenimiento.'
        },
        '.canva': {
            img: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Canva_logo.svg',
            message: 'Canva: Crea diseños increíbles sin esfuerzo.'
        },
        '.disney': {
            img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Disney%2B_Logo.svg',
            message: 'Disney+: Disfruta del mejor contenido de Disney, Pixar, Marvel y más.'
        },
        '.hbomax': {
            img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/HBO_Max_Logo.svg',
            message: 'HBO Max: El hogar de tus series y películas favoritas de HBO.'
        },
        '.office': {
            img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Microsoft_Office_logo_%282016%E2%80%93present%29.svg',
            message: 'Office 365: Las mejores herramientas para productividad en la nube.'
        },
        '.capcut': {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/CapCut_Logo_2020.svg/1200px-CapCut_Logo_2020.svg.png',
            message: 'CapCut: Crea y edita videos increíbles con facilidad.'
        }
    };

    // Comprobar si el comando recibido corresponde a una plataforma y enviar la imagen + mensaje
    if (platforms[m.text.trim().toLowerCase()]) {
        let platform = platforms[m.text.trim().toLowerCase()];

        // Enviar la imagen y el mensaje correspondiente
        await conn.sendMessage(m.chat, { 
            image: { url: platform.img }, 
            caption: platform.message 
        }, { quoted: m });
    }
    // Verificar si el mensaje comienza con .set para cambiar el mensaje de la plataforma
    else if (m.text.startsWith('.set')) {
        // Extraer el nombre de la plataforma y el nuevo mensaje
        let args = m.text.split(' ');
        let platformKey = '.' + args[0].toLowerCase().replace('.set', '');  // Ejemplo: .setnetflix -> .netflix
        let newMessage = args.slice(1).join(' ');

        // Si la plataforma es válida, cambiar el mensaje
        if (platforms[platformKey]) {
            platforms[platformKey].message = newMessage;
            await conn.reply(m.chat, `Mensaje para ${platformKey} actualizado: ${newMessage}`, m);
        } else {
            // Si no se reconoce la plataforma
            await conn.reply(m.chat, "Plataforma no reconocida. Usa uno de los siguientes: .netflix, .plex, .spotify, etc.", m);
        }
    } else {
        // Mensaje por defecto si no es un comando reconocido
        await conn.reply(m.chat, "Comando no reconocido. Usa uno de los siguientes: .netflix, .plex, .spotify, etc.", m);
    }
};

handler.command = ['netflix', 'plex', 'spotify', 'youtube', 'canva', 'disney', 'hbomax', 'office', 'capcut']; // Comandos para mostrar la imagen y mensaje
handler.group = true;
export default handler;
