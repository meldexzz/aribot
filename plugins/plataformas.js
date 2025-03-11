let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat];

    // Mensajes predeterminados para cada plataforma
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

    // Verifica si el mensaje contiene un comando válido
    if (platforms[m.text.trim().toLowerCase()]) {
        let platform = platforms[m.text.trim().toLowerCase()];

        // Envía la imagen y el mensaje correspondiente
        await conn.sendMessage(m.chat, { 
            image: { url: platform.img }, 
            caption: platform.message 
        }, { quoted: m });
    }
    // Verifica si el comando es para cambiar el mensaje
    else if (m.text.startsWith('.set')) {
        let platform = m.text.split(' ')[0].toLowerCase();
        let newMessage = m.text.split(' ').slice(1).join(' ');

        if (platforms[platform]) {
            platforms[platform].message = newMessage;
            await conn.reply(m.chat, `Mensaje para ${platform} actualizado: ${newMessage}`, m);
        } else {
            await conn.reply(m.chat, `Plataforma no reconocida. Usa uno de los siguientes comandos: .netflix, .plex, .spotify, etc.`, m);
        }
    } else {
        await conn.reply(m.chat, "Comando no reconocido. Usa uno de los siguientes: .netflix, .plex, .spotify, etc.", m);
    }
};

handler.command = ['netflix', 'plex', 'spotify', 'youtube', 'canva', 'disney', 'hbomax', 'office', 'capcut'];
handler.group = true;
export default handler;
