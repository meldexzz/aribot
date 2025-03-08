import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;

  let who = m.messageStubParameters[0]
  let taguser = `@${who.split('@')[0]}`
  let chat = global.db.data.chats[m.chat]
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/xr2m6u.jpg')
  let img = await (await fetch(`${pp}`)).buffer()

    if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
      let bienvenida = `❀ *Bienvenido* a ${groupMetadata.subject}\n  ${taguser}\n${global.welcom1}\n 𝘿𝙞𝙨𝙛𝙧𝙪𝙩𝙖 𝙩𝙪 𝙚𝙨𝙩𝙖𝙙í𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤!\n> 𝙋𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 *#𝙝𝙚𝙡𝙥* 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨.🌱`
      await conn.sendMessage(m.chat, { image: img, caption: bienvenida, mentions: [who] })
    }
       
    if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
      let bye = `❀ *Adiós* de ${groupMetadata.subject}\n ✰ ${taguser}\n${global.welcom2}\n 𝙏𝙚 𝙚𝙨𝙥𝙚𝙧𝙖𝙢𝙤𝙨 𝙥𝙧𝙤𝙣𝙩𝙤!\n> 𝙋𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 *#𝙝𝙚𝙡𝙥* 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨.🌱`
      await conn.sendMessage(m.chat, { image: img, caption: bye, mentions: [who] })
    }

    if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) { 
      let kick = `❀ *Adiós* de ${groupMetadata.subject}\n ✰ ${taguser}\n${global.welcom2}\n 𝙏𝙚 𝙚𝙨𝙥𝙚𝙧𝙖𝙢𝙤𝙨 𝙥𝙧𝙤𝙣𝙩𝙤!\n> 𝙋𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 *#𝙝𝙚𝙡𝙥* 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨.🌱`
      await conn.sendMessage(m.chat, { image: img, caption: kick, mentions: [who] })
  }}
