import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

    if (global.conn.user.jid !== conn.user.jid) {
        return conn.reply(m.chat, `${emoji} Utiliza este comando directamente en el número principal del Bot.`, m)
    }

    let sessions = 'sessions' // Asegura que está definida
    let sessionPath = `./${sessions}/`

    if (!existsSync(sessionPath)) {
        return conn.reply(m.chat, `${emoji2} No se encontró la carpeta de sesiones.`, m)
    }

    let chatId = m.isGroup ? [m.chat, m.sender] : [m.sender]
    let filesDeleted = 0

    try {
        let files = await fs.readdir(sessionPath)

        for (let file of files) {
            for (let id of chatId) {
                if (file.includes(id.split('@')[0])) {
                    try {
                        await fs.unlink(path.join(sessionPath, file))
                        filesDeleted++
                    } catch (error) {
                        console.log(`No se pudo eliminar: ${file}`, error)
                    }
                    break
                }
            }
        }

        if (filesDeleted === 0) {
            await conn.reply(m.chat, `${emoji2} No se encontró ningún archivo de sesión para este chat.`, m)
        } else {
            await conn.reply(m.chat, `${emoji2} 𝙎𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧𝙤𝙣 ${filesDeleted} 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙙𝙚 𝙨𝙚𝙨𝙞ó𝙣.🌱`, m)
            conn.reply(m.chat, `${emoji} ¡𝙃𝙤𝙡𝙖!, ¿𝙔𝙖 𝙢𝙚 𝙫𝙚𝙨, 𝘼𝙧𝙞?.🌱`, m)
        }

    } catch (err) {
        console.error('𝙎𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧𝙤𝙣 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙙𝙚 𝙨𝙚𝙨𝙞ó𝙣.🌱', err)
        await conn.reply(m.chat, `${emoji} Hola Soy ${botname}, sigue el canal y apóyanos por favor.\n\n> ${channel}`, m)
    }
}

handler.help = ['ds', 'fixmsgespera']
handler.tags = ['info']
handler.command = ['fixmsgespera', 'ds']
handler.register = true

export default handler
