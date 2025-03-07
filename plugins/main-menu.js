import moment from 'moment-timezone';

let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    let user = global.db.data.users[userId];
    let name = conn.getName(userId);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let totalreg = Object.keys(global.db.data.users).length;
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
    
    let txt = `
Hola! Soy 𝘼𝙧𝙮𝘽𝙤𝙩.🌱
    
Aquí tienes la lista de comandos
• :･ﾟ⊹˚• `『 𝘐𝘯𝘧𝘰-𝘉𝘰𝘵 』` •˚⊹:･ﾟ•
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘵𝘢𝘥𝘰 𝘦 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪ó𝘯 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱 *#𝘩𝘦𝘭𝘱 • #𝘮𝘦𝘯𝘶*
> ✦ 𝘝𝘦𝘳 𝘭𝘢 𝘭𝘪𝘴𝘵𝘢 𝘥𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱 *#𝘶𝘱𝘵𝘪𝘮𝘦 • #𝘳𝘶𝘯𝘵𝘪𝘮𝘦*
> ✦ 𝘝𝘦𝘳 𝘵𝘪𝘦𝘮𝘱𝘰 𝘢𝘤𝘵𝘪𝘷𝘰 𝘰 𝘦𝘯 𝘭𝘪𝘯𝘦𝘢 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱*#𝘴𝘤 • #𝘴𝘤𝘳𝘪𝘱𝘵*
> ✦ 𝘝𝘦𝘳 𝘭𝘢 𝘭𝘪𝘴𝘵𝘢 𝘥𝘦 𝘥𝘦𝘴𝘢𝘳𝘳𝘰𝘭𝘭𝘢𝘥𝘰𝘳𝘦𝘴 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱 *#𝘴𝘦𝘳𝘣𝘰𝘵 • #𝘴𝘦𝘳𝘣𝘰𝘵 𝘤𝘰𝘥𝘦*
> ✦ 𝘊𝘳𝘦𝘢 𝘶𝘯𝘢 𝘴𝘦𝘴𝘪ó𝘯 𝘥𝘦 𝘚𝘶𝘣-𝘉𝘰𝘵.
🌱 *#𝘣𝘰𝘵𝘴 • #𝘴𝘰𝘤𝘬𝘦𝘵𝘴*
> ✦ 𝘝𝘦𝘳 𝘭𝘢 𝘭𝘪𝘴𝘵𝘢 𝘥𝘦 𝘚𝘶𝘣-𝘉𝘰𝘵𝘴 𝘢𝘤𝘵𝘪𝘷𝘰𝘴.
🌱 *#𝘤𝘳𝘦𝘢𝘥𝘰𝘳*
> ✦ 𝘊𝘰𝘯𝘵𝘢𝘤𝘵𝘰 𝘥𝘦𝘭 𝘤𝘳𝘦𝘢𝘥𝘰𝘳 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱 *#𝘴𝘵𝘢𝘵𝘶𝘴 • #𝘦𝘴𝘵𝘢𝘥𝘰*
> ✦ 𝘝𝘦𝘳 𝘦𝘭 𝘦𝘴𝘵𝘢𝘥𝘰 𝘢𝘤𝘵𝘶𝘢𝘭 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱 *#𝘭𝘪𝘯𝘬𝘴 • #𝘨𝘳𝘶𝘱𝘰𝘴*
> ✦ 𝘝𝘦𝘳 𝘭𝘰𝘴 𝘦𝘯𝘭𝘢𝘤𝘦𝘴 𝘰𝘧𝘪𝘤𝘪𝘢𝘭𝘦𝘴 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱 *#𝘪𝘯𝘧𝘰𝘣𝘰𝘵 • #𝘪𝘯𝘧𝘰𝘣𝘰𝘵*
> ✦ 𝘝𝘦𝘳 𝘭𝘢 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪ó𝘯 𝘤𝘰𝘮𝘱𝘭𝘦𝘵𝘢 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱 *#𝘴𝘶𝘨 • #𝘯𝘦𝘸𝘤𝘰𝘮𝘮𝘢𝘯𝘥*
> ✦ 𝘚𝘶𝘨𝘪𝘦𝘳𝘦 𝘶𝘯 𝘯𝘶𝘦𝘷𝘰 𝘤𝘰𝘮𝘢𝘯𝘥𝘰.
🌱 *#𝘱 • #𝘱𝘪𝘯𝘨*
> ✦ 𝘝𝘦𝘳 𝘭𝘢 𝘷𝘦𝘭𝘰𝘤𝘪𝘥𝘢𝘥 𝘥𝘦 𝘳𝘦𝘴𝘱𝘶𝘦𝘴𝘵𝘢 𝘥𝘦𝘭 𝘉𝘰𝘵.
🌱 *#𝘳𝘦𝘱𝘰𝘳𝘵𝘦 • #𝘳𝘦𝘱𝘰𝘳𝘵𝘢𝘳*
> ✦ 𝘙𝘦𝘱𝘰𝘳𝘵𝘢 𝘢𝘭𝘨𝘶𝘯𝘢 𝘧𝘢𝘭𝘭𝘢 𝘰 𝘱𝘳𝘰𝘣𝘭𝘦𝘮𝘢 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱 *#𝘴𝘪𝘴𝘵𝘦𝘮𝘢 • #𝘴𝘺𝘴𝘵𝘦𝘮*
> ✦ 𝘝𝘦𝘳 𝘦𝘴𝘵𝘢𝘥𝘰 𝘥𝘦𝘭 𝘴𝘪𝘴𝘵𝘦𝘮𝘢 𝘥𝘦 𝘢𝘭𝘰𝘫𝘢𝘮𝘪𝘦𝘯𝘵𝘰.
🌱 *#𝘴𝘱𝘦𝘦𝘥 • #𝘴𝘱𝘦𝘦𝘥𝘵𝘦𝘴𝘵*
> ✦ 𝘝𝘦𝘳 𝘭𝘢𝘴 𝘦𝘴𝘵𝘢𝘥í𝘴𝘵𝘪𝘤𝘢𝘴 𝘥𝘦 𝘷𝘦𝘭𝘰𝘤𝘪𝘥𝘢𝘥 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱 *#𝘷𝘪𝘦𝘸𝘴 • #𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴*
> ✦ 𝘝𝘦𝘳 𝘭𝘢 𝘤𝘢𝘯𝘵𝘪𝘥𝘢𝘥 𝘥𝘦 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘳𝘦𝘨𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘴 𝘦𝘯 𝘦𝘭 𝘴𝘪𝘴𝘵𝘦𝘮𝘢.
🌱 *#𝘧𝘶𝘯𝘤𝘪𝘰𝘯𝘦𝘴 • #𝘵𝘰𝘵𝘢𝘭𝘧𝘶𝘯𝘤𝘪𝘰𝘯𝘦𝘴*
> ✦ 𝘝𝘦𝘳 𝘵𝘰𝘥𝘢𝘴 𝘭𝘢𝘴 𝘧𝘶𝘯𝘤𝘪𝘰𝘯𝘦𝘴 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
🌱 *#𝘥𝘴 • #𝘧𝘪𝘹𝘮𝘴𝘨𝘦𝘴𝘱𝘦𝘳𝘢*
> ✦ 𝘌𝘭𝘪𝘮𝘪𝘯𝘢𝘳 𝘢𝘳𝘤𝘩𝘪𝘷𝘰𝘴 𝘥𝘦 𝘴𝘦𝘴𝘪ó𝘯 𝘪𝘯𝘯𝘦𝘤𝘦𝘴𝘢𝘳𝘪𝘰𝘴.
🌱 *#𝘦𝘥𝘪𝘵𝘢𝘶𝘵𝘰𝘳𝘦𝘴𝘱𝘰𝘯𝘥𝘦𝘳*
> ✦ 𝘊𝘰𝘯𝘧𝘪𝘨𝘶𝘳𝘢𝘳 𝘶𝘯 𝘗𝘳𝘰𝘮𝘱𝘵 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘻𝘢𝘥𝘰 𝘥𝘦 𝘭𝘢 𝘉𝘰𝘵.
 `『 𝘉𝘶𝘴𝘤𝘢𝘥𝘰𝘳𝘦𝘴 』` 
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘱𝘢𝘳𝘢 𝘳𝘦𝘢𝘭𝘪𝘻𝘢𝘳 𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢𝘴 𝘦𝘯 𝘥𝘪𝘴𝘵𝘪𝘯𝘵𝘢𝘴 𝘱𝘭𝘢𝘵𝘢𝘧𝘰𝘳𝘮𝘢𝘴.
🌱 *#𝘵𝘪𝘬𝘵𝘰𝘬𝘴𝘦𝘢𝘳𝘤𝘩 • #𝘵𝘪𝘬𝘵𝘰𝘬𝘴*
> ✦ 𝘉𝘶𝘴𝘤𝘢𝘥𝘰𝘳 𝘥𝘦 𝘷𝘪𝘥𝘦𝘰𝘴 𝘥𝘦 𝘵𝘪𝘬𝘵𝘰𝘬.
🌱 *#𝘵𝘸𝘦𝘦𝘵𝘱𝘰𝘴𝘵𝘴*
> ✦ 𝘉𝘶𝘴𝘤𝘢𝘥𝘰𝘳 𝘥𝘦 𝘱𝘰𝘴𝘵𝘴 𝘥𝘦 𝘛𝘸𝘪𝘵𝘵𝘦𝘳/𝘟.
🌱 *#𝘺𝘵𝘴𝘦𝘢𝘳𝘤𝘩 • #𝘺𝘵𝘴*
> ✦ 𝘙𝘦𝘢𝘭𝘪𝘻𝘢 𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢𝘴 𝘥𝘦 𝘠𝘰𝘶𝘵𝘶𝘣𝘦.
🌱 *#𝘨𝘪𝘵𝘩𝘶𝘣𝘴𝘦𝘢𝘳𝘤𝘩*
> ✦ 𝘉𝘶𝘴𝘤𝘢𝘥𝘰𝘳 𝘥𝘦 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘥𝘦 𝘎𝘪𝘵𝘏𝘶𝘣.
🌱 *#𝘤𝘶𝘦𝘷𝘢𝘯𝘢 • #𝘤𝘶𝘦𝘷𝘢𝘯𝘢𝘴𝘦𝘢𝘳𝘤𝘩*
> ✦ 𝘉𝘶𝘴𝘤𝘢𝘥𝘰𝘳 𝘥𝘦 𝘱𝘦𝘭í𝘤𝘶𝘭𝘢𝘴/𝘴𝘦𝘳𝘪𝘦𝘴 𝘱𝘰𝘳 𝘊𝘶𝘦𝘷𝘢𝘯𝘢.
🌱 *#𝘨𝘰𝘰𝘨𝘭𝘦*
> ✦ 𝘙𝘦𝘢𝘭𝘪𝘻𝘢 𝘣ú𝘴𝘲𝘶𝘦𝘥𝘢𝘴 𝘱𝘰𝘳 𝘎𝘰𝘰𝘨𝘭𝘦.
🌱 *#𝘱𝘪𝘯 • #𝘱𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘵*
> ✦ 𝘉𝘶𝘴𝘤𝘢𝘥𝘰𝘳 𝘥𝘦 𝘪𝘮𝘢𝘨𝘦𝘯𝘦𝘴 𝘥𝘦 𝘗𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘵.
🌱 *#𝘪𝘮𝘢𝘨𝘦𝘯 • #𝘪𝘮𝘢𝘨𝘦*
> ✦ 𝘣𝘶𝘴𝘤𝘢𝘥𝘰𝘳 𝘥𝘦 𝘪𝘮𝘢𝘨𝘦𝘯𝘦𝘴 𝘥𝘦 𝘎𝘰𝘰𝘨𝘭𝘦.
🌱 *#𝘢𝘯𝘪𝘮𝘦𝘴𝘦𝘢𝘳𝘤𝘩 • #𝘢𝘯𝘪𝘮𝘦𝘴𝘴*
> ✦ 𝘉𝘶𝘴𝘤𝘢𝘥𝘰𝘳 𝘥𝘦 𝘢𝘯𝘪𝘮𝘦𝘴 𝘥𝘦 𝘵𝘪𝘰𝘢𝘯𝘪𝘮𝘦.
🌱 *#𝘢𝘯𝘪𝘮𝘦𝘪 • #𝘢𝘯𝘪𝘮𝘦𝘪𝘯𝘧𝘰*
> ✦ 𝘉𝘶𝘴𝘤𝘢𝘥𝘰𝘳 𝘥𝘦 𝘤𝘢𝘱í𝘵𝘶𝘭𝘰𝘴 𝘥𝘦 #𝘢𝘯𝘪𝘮𝘦𝘴𝘦𝘢𝘳𝘤𝘩.
🌱 *#𝘪𝘯𝘧𝘰𝘢𝘯𝘪𝘮𝘦*
> ✦ 𝘉𝘶𝘴𝘤𝘢𝘥𝘰𝘳 𝘥𝘦 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪ó𝘯 𝘥𝘦 𝘢𝘯𝘪𝘮𝘦/𝘮𝘢𝘯𝘨𝘢.
• :･ﾟ⊹˚• `『 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴 』` •˚⊹:･ﾟ•
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴 𝘱𝘢𝘳𝘢 𝘷𝘢𝘳𝘪𝘰𝘴 𝘢𝘳𝘤𝘩𝘪𝘷𝘰𝘴.
🌱 *#𝘵𝘪𝘬𝘵𝘰𝘬 • #𝘵𝘵*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘷𝘪𝘥𝘦𝘰𝘴 𝘥𝘦 𝘛𝘪𝘬𝘛𝘰𝘬.
🌱 *#𝘮𝘦𝘥𝘪𝘢𝘧𝘪𝘳𝘦 • #𝘮𝘧*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘶𝘯 𝘢𝘳𝘤𝘩𝘪𝘷𝘰 𝘥𝘦 𝘔𝘦𝘥𝘪𝘢𝘍𝘪𝘳𝘦.
🌱 *#𝘱𝘪𝘯𝘷𝘪𝘥 • #𝘱𝘪𝘯𝘷𝘪𝘥𝘦𝘰* + [𝘦𝘯𝘭𝘢𝘤é]
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘷í𝘥𝘦𝘰𝘴 𝘥𝘦 𝘗𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘵. 
🌱 *#𝘮𝘦𝘨𝘢 • #𝘮𝘨* + [𝘦𝘯𝘭𝘢𝘤é]
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘶𝘯 𝘢𝘳𝘤𝘩𝘪𝘷𝘰 𝘥𝘦 𝘔𝘌𝘎𝘈.
🌱 *#𝘱𝘭𝘢𝘺 • #𝘱𝘭𝘢𝘺2*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘮ú𝘴𝘪𝘤𝘢/𝘷𝘪𝘥𝘦𝘰 𝘥𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦.
🌱*#𝘺𝘵𝘮𝘱3 • #𝘺𝘵𝘮𝘱4*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘮ú𝘴𝘪𝘤𝘢/𝘷𝘪𝘥𝘦𝘰 𝘥𝘦 𝘠𝘰𝘶𝘛𝘶𝘣𝘦 𝘮𝘦𝘥𝘪𝘢𝘯𝘵𝘦 𝘶𝘳𝘭.
🌱 *#𝘧𝘣 • #𝘧𝘢𝘤𝘦𝘣𝘰𝘰𝘬*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘷𝘪𝘥𝘦𝘰𝘴 𝘥𝘦 𝘍𝘢𝘤𝘦𝘣𝘰𝘰𝘬.
🌱 *#𝘵𝘸𝘪𝘵𝘵𝘦𝘳 • #𝘹* + [𝘓𝘪𝘯𝘬]
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘶𝘯 𝘷𝘪𝘥𝘦𝘰 𝘥𝘦 𝘛𝘸𝘪𝘵𝘵𝘦𝘳/𝘟
🌱 *#𝘪𝘨 • #𝘪𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘤𝘰𝘯𝘵𝘦𝘯𝘪𝘥𝘰 𝘥𝘦 𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮.
🌱 *#𝘵𝘵𝘴 • #𝘵𝘪𝘬𝘵𝘰𝘬𝘴* + [𝘣𝘶𝘴𝘲𝘶𝘦𝘥𝘢]
> ✦ 𝘉𝘶𝘴𝘤𝘢𝘳 𝘷𝘪𝘥𝘦𝘰𝘴 𝘥𝘦 𝘵𝘪𝘬𝘵𝘰𝘬 
🌱 *#𝘵𝘦𝘳𝘢𝘣𝘰𝘹 • #𝘵𝘣* + [𝘦𝘯𝘭𝘢𝘤𝘦]
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘢𝘳𝘤𝘩𝘪𝘷𝘰𝘴 𝘱𝘰𝘳 𝘛𝘦𝘳𝘢𝘣𝘰𝘹.
🌱 *#𝘨𝘥𝘳𝘪𝘷𝘦 • #𝘥𝘳𝘪𝘷𝘦* + [𝘦𝘯𝘭𝘢𝘤𝘦]
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘢𝘳𝘤𝘩𝘪𝘷𝘰𝘴 𝘱𝘰𝘳 𝘎𝘰𝘰𝘨𝘭𝘦 𝘋𝘳𝘪𝘷𝘦.
🌱 *#𝘵𝘵𝘪𝘮𝘨 • #𝘵𝘵𝘮𝘱3* + <𝘶𝘳𝘭>
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘧𝘰𝘵𝘰𝘴/𝘢𝘶𝘥𝘪𝘰𝘴 𝘥𝘦 𝘵𝘪𝘬𝘵𝘰𝘬. 
🌱 *#𝘨𝘪𝘵𝘤𝘭𝘰𝘯𝘦* + <𝘶𝘳𝘭> 
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘶𝘯 𝘳𝘦𝘱𝘰𝘴𝘪𝘵𝘰𝘳𝘪𝘰 𝘥𝘦 𝘨𝘪𝘵𝘩𝘶𝘣.
🌱 *#𝘹𝘷𝘪𝘥𝘦𝘰𝘴𝘥𝘭*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘷𝘪𝘥𝘦𝘰𝘴 𝘱𝘰𝘳𝘯𝘰 𝘥𝘦 (𝘟𝘷𝘪𝘥𝘦𝘰𝘴). 
🌱 *#𝘹𝘯𝘹𝘹𝘥𝘭*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘷𝘪𝘥𝘦𝘰𝘴 𝘱𝘰𝘳𝘯𝘰 𝘥𝘦 (𝘹𝘯𝘹𝘹).
🌱 *#𝘢𝘱𝘬 • #𝘮𝘰𝘥𝘢𝘱𝘬*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘶𝘯 𝘢𝘱𝘬 𝘥𝘦 𝘈𝘱𝘵𝘰𝘪𝘥𝘦.
🌱 *#𝘵𝘪𝘬𝘵𝘰𝘬𝘳𝘢𝘯𝘥𝘰𝘮 • #𝘵𝘵𝘳𝘢𝘯𝘥𝘰𝘮*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘶𝘯 𝘷𝘪𝘥𝘦𝘰 𝘢𝘭𝘦𝘢𝘵𝘰𝘳𝘪𝘰 𝘥𝘦 𝘵𝘪𝘬𝘵𝘰𝘬.
🌱 *#𝘯𝘱𝘮𝘥𝘭 • #𝘯𝘱𝘮𝘥𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘦𝘳*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘱𝘢𝘲𝘶𝘦𝘵𝘦𝘴 𝘥𝘦 𝘕𝘗𝘔𝘑𝘴.
🌱 *#𝘢𝘯𝘪𝘮𝘦𝘭𝘪𝘯𝘬𝘴 • #𝘢𝘯𝘪𝘮𝘦𝘥𝘭*
> ✦ 𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢 𝘓𝘪𝘯𝘬𝘴 𝘥𝘪𝘴𝘱𝘰𝘯𝘪𝘣𝘭𝘦𝘴 𝘥𝘦 𝘥𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘴.
• :･ﾟ⊹˚• `『 𝘌𝘤𝘰𝘯𝘰𝘮𝘪𝘢 』` •˚⊹:･ﾟ•
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘦𝘤𝘰𝘯𝘰𝘮í𝘢 𝘺 𝘳𝘱𝘨 𝘱𝘢𝘳𝘢 𝘨𝘢𝘯𝘢𝘳 𝘥𝘪𝘯𝘦𝘳𝘰 𝘺 𝘰𝘵𝘳𝘰𝘴 𝘳𝘦𝘤𝘶𝘳𝘴𝘰𝘴.
🌱 *#𝘸 • #𝘸𝘰𝘳𝘬 • #𝘵𝘳𝘢𝘣𝘢𝘫𝘢𝘳*
> ✦ 𝘛𝘳𝘢𝘣𝘢𝘫𝘢 𝘱𝘢𝘳𝘢 𝘨𝘢𝘯𝘢𝘳.
🌱 *#𝘴𝘭𝘶𝘵 • #𝘱𝘳𝘰𝘵𝘪𝘵𝘶𝘪𝘳𝘴𝘦*
> ✦ 𝘛𝘳𝘢𝘣𝘢𝘫𝘢 𝘤𝘰𝘮𝘰 𝘱𝘳𝘰𝘴𝘵𝘪𝘵𝘶𝘵𝘢 𝘺 𝘨𝘢𝘯𝘢.
🌱 *#𝘤𝘧 • #𝘴𝘶𝘦𝘳𝘵𝘦*
> ✦ 𝘈𝘱𝘶𝘦𝘴𝘵𝘢 𝘢 𝘤𝘢𝘳𝘢 𝘰 𝘤𝘳𝘶𝘻.
🌱 *#𝘤𝘳𝘪𝘮𝘦 • #𝘤𝘳𝘪𝘮𝘦𝘯
> ✦ 𝘛𝘳𝘢𝘣𝘢𝘫𝘢 𝘤𝘰𝘮𝘰 𝘭𝘢𝘥𝘳ó𝘯 𝘱𝘢𝘳𝘢 𝘨𝘢𝘯𝘢𝘳.
🌱 *#𝘳𝘶𝘭𝘦𝘵𝘢 • #𝘳𝘰𝘶𝘭𝘦𝘵𝘵𝘦 • #𝘳𝘵*
> ✦ 𝘈𝘱𝘶𝘦𝘴𝘵𝘢 𝘢𝘭 𝘤𝘰𝘭𝘰𝘳 𝘳𝘰𝘫𝘰 𝘰 𝘯𝘦𝘨𝘳𝘰.
🌱 *#𝘤𝘢𝘴𝘪𝘯𝘰 • #𝘢𝘱𝘰𝘴𝘵𝘢𝘳*
> ✦ 𝘈𝘱𝘶𝘦𝘴𝘵𝘢 𝘦𝘯 𝘦𝘭 𝘤𝘢𝘴𝘪𝘯𝘰.
🌱 *#𝘴𝘭𝘰𝘵*
> ✦ 𝘈𝘱𝘶𝘦𝘴𝘵𝘢 𝘦𝘯 𝘭𝘢 𝘳𝘶𝘭𝘦𝘵𝘢 𝘺 𝘱𝘳𝘶𝘦𝘣𝘢 𝘵𝘶 𝘴𝘶𝘦𝘳𝘵𝘦.
🌱 *#𝘤𝘢𝘳𝘵𝘦𝘳𝘢 • #𝘸𝘢𝘭𝘭𝘦𝘵*
> ✦ 𝘝𝘦𝘳 𝘵𝘶𝘴  𝘦𝘯 𝘭𝘢 𝘤𝘢𝘳𝘵𝘦𝘳𝘢.
🌱 *#𝘣𝘢𝘯𝘤𝘰 • #𝘣𝘢𝘯𝘬*
> ✦ 𝘝𝘦𝘳 𝘵𝘶𝘴  𝘦𝘯 𝘦𝘭 𝘣𝘢𝘯𝘤𝘰.
🌱 *#𝘥𝘦𝘱𝘰𝘴𝘪𝘵 • #𝘥𝘦𝘱𝘰𝘴𝘪𝘵𝘢𝘳 • #𝘥*
> ✦ 𝘋𝘦𝘱𝘰𝘴𝘪𝘵𝘢 𝘢𝘭 𝘣𝘢𝘯𝘤𝘰.
🌱 *#𝘸𝘪𝘵𝘩 • #𝘳𝘦𝘵𝘪𝘳𝘢𝘳 • #𝘸𝘪𝘵𝘩𝘥𝘳𝘢𝘸*
> ✦ 𝘙𝘦𝘵𝘪𝘳𝘢 𝘵𝘶𝘴 𝘥𝘦𝘭 𝘣𝘢𝘯𝘤𝘰.
🌱 *#𝘵𝘳𝘢𝘯𝘴𝘧𝘦𝘳 • #𝘱𝘢𝘺*
> ✦ 𝘛𝘳𝘢𝘯𝘴𝘧𝘪𝘦𝘳𝘦 𝘰 𝘟𝘗 𝘢 𝘰𝘵𝘳𝘰𝘴 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴.
🌱 *#𝘮𝘪𝘮𝘪𝘯𝘨 • #𝘮𝘪𝘯𝘢𝘳 • #𝘮𝘪𝘯𝘦*
> ✦ 𝘛𝘳𝘢𝘣𝘢𝘫𝘢 𝘤𝘰𝘮𝘰 𝘮𝘪𝘯𝘦𝘳𝘰 𝘺 𝘳𝘦𝘤𝘰𝘭𝘦𝘤𝘵𝘢 𝘳𝘦𝘤𝘶𝘳𝘴𝘰𝘴.
🌱 *#𝘣𝘶𝘺𝘢𝘭𝘭 • #𝘣𝘶𝘺*
> ✦ 𝘊𝘰𝘮𝘱𝘳𝘢 𝘤𝘰𝘯 𝘵𝘶 𝘟𝘗.
🌱 *#𝘥𝘢𝘪𝘭𝘺 • #𝘥𝘪𝘢𝘳𝘪𝘰*
> ✦ 𝘙𝘦𝘤𝘭𝘢𝘮𝘢 𝘵𝘶 𝘳𝘦𝘤𝘰𝘮𝘱𝘦𝘯𝘴𝘢 𝘥𝘪𝘢𝘳𝘪𝘢.
🌱 *#𝘤𝘰𝘧𝘳𝘦*
> ✦ 𝘙𝘦𝘤𝘭𝘢𝘮𝘢 𝘶𝘯 𝘤𝘰𝘧𝘳𝘦 𝘥𝘪𝘢𝘳𝘪𝘰 𝘭𝘭𝘦𝘯𝘰 𝘥𝘦 𝘳𝘦𝘤𝘶𝘳𝘴𝘰𝘴.
🌱 *#𝘸𝘦𝘦𝘬𝘭𝘺 • #𝘴𝘦𝘮𝘢𝘯𝘢𝘭*
> ✦ 𝘙𝘦𝘤𝘭𝘢𝘮𝘢 𝘵𝘶 𝘳𝘦𝘨𝘢𝘭𝘰 𝘴𝘦𝘮𝘢𝘯𝘢𝘭.
🌱 *#𝘮𝘰𝘯𝘵𝘩𝘭𝘺 • #𝘮𝘦𝘯𝘴𝘶𝘢𝘭*
> ✦ 𝘙𝘦𝘤𝘭𝘢𝘮𝘢 𝘵𝘶 𝘳𝘦𝘤𝘰𝘮𝘱𝘦𝘯𝘴𝘢 𝘮𝘦𝘯𝘴𝘶𝘢𝘭.
🌱 *#𝘴𝘵𝘦𝘢𝘭 • #𝘳𝘰𝘣𝘢𝘳 • #𝘳𝘰𝘣*
> ✦ 𝘐𝘯𝘵𝘦𝘯𝘵𝘢 𝘳𝘰𝘣𝘢𝘳𝘭𝘦 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯.
🌱 *#𝘳𝘰𝘣𝘢𝘳𝘹𝘱 • #𝘳𝘰𝘣𝘹𝘱*
> ✦ 𝘐𝘯𝘵𝘦𝘯𝘵𝘢 𝘳𝘰𝘣𝘢𝘳 𝘟𝘗 𝘢 𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘦𝘣𝘰𝘢𝘳𝘥 • #𝘣𝘢𝘭𝘵𝘰𝘱*
> ✦ 𝘝𝘦𝘳 𝘦𝘭 𝘳𝘢𝘯𝘬𝘪𝘯𝘨 𝘥𝘦 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘤𝘰𝘯 𝘮á𝘴.
🌱 *#𝘢𝘷𝘦𝘯𝘵𝘶𝘳𝘢 • #𝘢𝘥𝘷𝘦𝘯𝘵𝘶𝘳𝘦*
> ✦ 𝘈𝘷𝘦𝘯𝘵ú𝘳𝘢𝘵𝘦 𝘦𝘯 𝘶𝘯 𝘯𝘶𝘦𝘷𝘰 𝘳𝘦𝘪𝘯𝘰 𝘺 𝘳𝘦𝘤𝘰𝘭𝘦𝘤𝘵𝘢 𝘳𝘦𝘤𝘶𝘳𝘴𝘰𝘴.
🌱 *#𝘤𝘶𝘳𝘢𝘳 • #𝘩𝘦𝘢𝘭*
> ✦ 𝘊𝘶𝘳𝘢 𝘵𝘶 𝘴𝘢𝘭𝘶𝘥 𝘱𝘢𝘳𝘢 𝘷𝘰𝘭𝘷𝘦𝘳𝘵𝘦 𝘢𝘷𝘦𝘯𝘵𝘶𝘳𝘢𝘳.
🌱 *#𝘤𝘢𝘻𝘢𝘳 • #𝘩𝘶𝘯𝘵 • #𝘣𝘦𝘳𝘣𝘶𝘳𝘶*
> ✦ 𝘈𝘷𝘦𝘯𝘵ú𝘳𝘢𝘵𝘦 𝘦𝘯 𝘶𝘯𝘢 𝘤𝘢𝘻𝘢 𝘥𝘦 𝘢𝘯𝘪𝘮𝘢𝘭𝘦𝘴.
🌱 *#𝘪𝘯𝘷 • #𝘪𝘯𝘷𝘦𝘯𝘵𝘢𝘳𝘪𝘰*
> ✦ 𝘝𝘦𝘳 𝘵𝘶 𝘪𝘯𝘷𝘦𝘯𝘵𝘢𝘳𝘪𝘰 𝘤𝘰𝘯 𝘵𝘰𝘥𝘰𝘴 𝘵𝘶𝘴 í𝘵𝘦𝘮𝘴.
🌱 *#𝘮𝘢𝘻𝘮𝘰𝘳𝘳𝘢 • #𝘦𝘹𝘱𝘭𝘰𝘳𝘢𝘳*
> ✦ 𝘌𝘹𝘱𝘭𝘰𝘳𝘢𝘳 𝘮𝘢𝘻𝘮𝘰𝘳𝘳𝘢𝘴 𝘱𝘢𝘳𝘢 𝘨𝘢𝘯𝘢𝘳.
🌱 *#𝘩𝘢𝘭𝘭𝘰𝘸𝘦𝘦𝘯*
> ✦ 𝘙𝘦𝘤𝘭𝘢𝘮𝘢 𝘵𝘶 𝘥𝘶𝘭𝘤𝘦 𝘰 𝘵𝘳𝘶𝘤𝘰 (𝘚𝘰𝘭𝘰 𝘦𝘯 𝘏𝘢𝘭𝘭𝘰𝘸𝘦𝘦𝘯).
🌱 *#𝘤𝘩𝘳𝘪𝘴𝘵𝘮𝘢𝘴 • #𝘯𝘢𝘷𝘪𝘥𝘢𝘥*
> ✦ 𝘙𝘦𝘤𝘭𝘢𝘮𝘢 𝘵𝘶 𝘳𝘦𝘨𝘢𝘭𝘰 𝘯𝘢𝘷𝘪𝘥𝘦ñ𝘰 (𝘚𝘰𝘭𝘰 𝘦𝘯 𝘕𝘢𝘷𝘪𝘥𝘢𝘥).
• :･ﾟ⊹˚• `『 𝘎𝘢𝘤𝘩𝘢 』` •˚⊹:･ﾟ•
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘨𝘢𝘤𝘩𝘢 𝘱𝘢𝘳𝘢 𝘳𝘦𝘤𝘭𝘢𝘮𝘢𝘳 𝘺 𝘤𝘰𝘭𝘦𝘤𝘤𝘪ó𝘯𝘢𝘳 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘫𝘦𝘴.
🌱 *#𝘳𝘰𝘭𝘭𝘸𝘢𝘪𝘧𝘶 • #𝘳𝘸 • #𝘳𝘰𝘭𝘭*
> ✦ 𝘞𝘢𝘪𝘧𝘶 𝘰 𝘩𝘶𝘴𝘣𝘢𝘯𝘥𝘰 𝘢𝘭𝘦𝘢𝘵𝘰𝘳𝘪𝘰.
🌱  *#𝘤𝘭𝘢𝘪𝘮 • #𝘤 • #𝘳𝘦𝘤𝘭𝘢𝘮𝘢𝘳*
> ✦ 𝘙𝘦𝘤𝘭𝘢𝘮𝘢𝘳 𝘶𝘯 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘫𝘦.
🌱 *#𝘩𝘢𝘳𝘦𝘮 • #𝘸𝘢𝘪𝘧𝘶𝘴 • #𝘤𝘭𝘢𝘪𝘮𝘴*
> ✦ 𝘝𝘦𝘳 𝘵𝘶𝘴 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘫𝘦𝘴 𝘳𝘦𝘤𝘭𝘢𝘮𝘢𝘥𝘰𝘴.
🌱 *#𝘤𝘩𝘢𝘳𝘪𝘮𝘢𝘨𝘦 • #𝘸𝘢𝘪𝘧𝘶𝘪𝘮𝘢𝘨𝘦 • #𝘸𝘪𝘮𝘢𝘨𝘦* 
> ✦ 𝘝𝘦𝘳 𝘶𝘯𝘢 𝘪𝘮𝘢𝘨𝘦𝘯 𝘢𝘭𝘦𝘢𝘵𝘰𝘳𝘪𝘢 𝘥𝘦 𝘶𝘯 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘫𝘦.
🌱 *#𝘤𝘩𝘢𝘳𝘪𝘯𝘧𝘰 • #𝘸𝘪𝘯𝘧𝘰 • #𝘸𝘢𝘪𝘧𝘶𝘪𝘯𝘧𝘰*
> ✦ 𝘝𝘦𝘳 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪ó𝘯 𝘥𝘦 𝘶𝘯 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘫𝘦.
🌱 *#𝘨𝘪𝘷𝘦𝘤𝘩𝘢𝘳 • #𝘨𝘪𝘷𝘦𝘸𝘢𝘪𝘧𝘶 • #𝘳𝘦𝘨𝘢𝘭𝘢𝘳*
> ✦ 𝘙𝘦𝘨𝘢𝘭𝘢𝘳 𝘶𝘯 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘫𝘦 𝘢 𝘰𝘵𝘳𝘰 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘷𝘰𝘵𝘦 • #𝘷𝘰𝘵𝘢𝘳*
> ✦ 𝘝𝘰𝘵𝘢𝘳 𝘱𝘰𝘳 𝘶𝘯 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘫𝘦 𝘱𝘢𝘳𝘢 𝘴𝘶𝘣𝘪𝘳 𝘴𝘶 𝘷𝘢𝘭𝘰𝘳.
🌱 *#𝘸𝘢𝘪𝘧𝘶𝘴𝘣𝘰𝘢𝘳𝘥 • #𝘸𝘢𝘪𝘧𝘶𝘴𝘵𝘰𝘱 • #𝘵𝘰𝘱𝘸𝘢𝘪𝘧𝘶𝘴*
> ✦ 𝘝𝘦𝘳 𝘦𝘭 𝘵𝘰𝘱 𝘥𝘦 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘫𝘦𝘴 𝘤𝘰𝘯 𝘮𝘢𝘺𝘰𝘳 𝘷𝘢𝘭𝘰𝘳.
• :･ﾟ⊹˚• `『 𝘚𝘵𝘪𝘤𝘬𝘦𝘳𝘴 』` •˚⊹:･ﾟ•
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘱𝘢𝘳𝘢 𝘤𝘳𝘦𝘢𝘤𝘪𝘰𝘯𝘦𝘴 𝘥𝘦 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴 𝘦𝘵𝘤.
🌱 *#𝘴𝘵𝘪𝘤𝘬𝘦𝘳 • #𝘴*
> ✦ 𝘊𝘳𝘦𝘢 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴 𝘥𝘦 (𝘪𝘮𝘢𝘨𝘦𝘯/𝘷𝘪𝘥𝘦𝘰)
🌱 *#𝘴𝘦𝘵𝘮𝘦𝘵𝘢*
> ✦ 𝘌𝘴𝘵𝘢𝘣𝘭𝘦 𝘶𝘯 𝘱𝘢𝘤𝘬 𝘺 𝘢𝘶𝘵𝘰𝘳 𝘱𝘢𝘳𝘢 𝘭𝘰𝘴 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴.
🌱 *#𝘥𝘦𝘭𝘮𝘦𝘵𝘢*
> ✦ 𝘌𝘭𝘪𝘮𝘪𝘯𝘢 𝘵𝘶 𝘱𝘢𝘤𝘬 𝘥𝘦 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴.
🌱 *#𝘱𝘧𝘱 • #𝘨𝘦𝘵𝘱𝘪𝘤*
> ✦ 𝘖𝘣𝘵é𝘯 𝘭𝘢 𝘧𝘰𝘵𝘰 𝘥𝘦 𝘱𝘦𝘳𝘧𝘪𝘭 𝘥𝘦 𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘲𝘤*
> ✦ 𝘊𝘳𝘦𝘢 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴 𝘤𝘰𝘯 𝘵𝘦𝘹𝘵𝘰 𝘰 𝘥𝘦 𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘵𝘰𝘪𝘮𝘨 • #𝘪𝘮𝘨*
> ✦ 𝘊𝘰𝘯𝘷𝘪𝘦𝘳𝘵𝘦 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴 𝘦𝘯 𝘪𝘮𝘢𝘨𝘦𝘯.
🌱 *#𝘣𝘳𝘢𝘵 • #𝘵𝘵𝘱 • #𝘢𝘵𝘵𝘱*︎ 
> ✦ 𝘊𝘳𝘦𝘢 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴 𝘤𝘰𝘯 𝘵𝘦𝘹𝘵𝘰.
🌱 *#𝘦𝘮𝘰𝘫𝘪𝘮𝘪𝘹*
> ✦ 𝘍𝘶𝘤𝘪𝘰𝘯𝘢 2 𝘦𝘮𝘰𝘫𝘪𝘴 𝘱𝘢𝘳𝘢 𝘤𝘳𝘦𝘢𝘳 𝘶𝘯 𝘴𝘵𝘪𝘤𝘬𝘦𝘳.
🌱 *#𝘸𝘮*
> ✦ 𝘊𝘢𝘮𝘣𝘪𝘢 𝘦𝘭 𝘯𝘰𝘮𝘣𝘳𝘦 𝘥𝘦 𝘭𝘰𝘴 𝘴𝘵𝘪𝘤𝘬𝘦𝘳𝘴.
•:･ﾟ⊹˚• `『 𝘏𝘦𝘳𝘳𝘢𝘮𝘪𝘦𝘯𝘵𝘢𝘴 』` •˚⊹:･ﾟ•
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘩𝘦𝘳𝘳𝘢𝘮𝘪𝘦𝘯𝘵𝘢𝘴 𝘤𝘰𝘯 𝘮𝘶𝘤𝘩𝘢𝘴 𝘧𝘶𝘯𝘤𝘪𝘰𝘯𝘦𝘴.
🌱 *#𝘤𝘢𝘭𝘤𝘶𝘭𝘢𝘳 • #𝘤𝘢𝘭𝘤𝘶𝘭𝘢𝘳 • #𝘤𝘢𝘭*
> ✦ 𝘊𝘢𝘭𝘤𝘶𝘭𝘢𝘳 𝘵𝘰𝘥𝘰 𝘵𝘪𝘱𝘰 𝘥𝘦 𝘦𝘤𝘶𝘢𝘤𝘪𝘰𝘯𝘦𝘴.
🌱 *#𝘵𝘪𝘦𝘮𝘱𝘰 • #𝘤𝘭𝘪𝘮𝘢*
> ✦ 𝘝𝘦𝘳 𝘦𝘭 𝘤𝘭𝘪𝘮𝘢 𝘥𝘦 𝘶𝘯 𝘱𝘢𝘪𝘴.
🌱 *#𝘩𝘰𝘳𝘢𝘳𝘪𝘰*
> ✦ 𝘝𝘦𝘳 𝘦𝘭 𝘩𝘰𝘳𝘢𝘳𝘪𝘰 𝘨𝘭𝘰𝘣𝘢𝘭 𝘥𝘦 𝘭𝘰𝘴 𝘱𝘢í𝘴𝘦𝘴.
🌱 *#𝘧𝘢𝘬𝘦 • #𝘧𝘢𝘬𝘦𝘳𝘦𝘱𝘭𝘺*
> ✦ 𝘊𝘳𝘦𝘢 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘧𝘢𝘭𝘴𝘰 𝘥𝘦 𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘦𝘯𝘩𝘢𝘯𝘤𝘦 • #𝘳𝘦𝘮𝘪𝘯𝘪 • #𝘩𝘥*
> ✦ 𝘔𝘦𝘫𝘰𝘳𝘢 𝘭𝘢 𝘤𝘢𝘭𝘪𝘥𝘢𝘥 𝘥𝘦 𝘶𝘯𝘢 𝘪𝘮𝘢𝘨𝘦𝘯.
🌱 *#𝘭𝘦𝘵𝘳𝘢*
> ✦ 𝘊𝘢𝘮𝘣𝘪𝘢 𝘭𝘢 𝘧𝘶𝘦𝘯𝘵𝘦 𝘥𝘦 𝘭𝘢𝘴 𝘭𝘦𝘵𝘳𝘢𝘴.
🌱 *#𝘳𝘦𝘢𝘥 • #𝘳𝘦𝘢𝘥𝘷𝘪𝘦𝘸𝘰𝘯𝘤𝘦 • #𝘷𝘦𝘳*
> ✦ 𝘝𝘦𝘳 𝘪𝘮á𝘨𝘦𝘯𝘦𝘴 𝘥𝘦 𝘶𝘯𝘢 𝘴𝘰𝘭𝘢 𝘷𝘪𝘴𝘵𝘢.
🌱 *#𝘸𝘩𝘢𝘵𝘮𝘶𝘴𝘪𝘤 • #𝘴𝘩𝘢𝘻𝘢𝘮*
> ✦ 𝘋𝘦𝘴𝘤𝘶𝘣𝘳𝘦 𝘦𝘭 𝘯𝘰𝘮𝘣𝘳𝘦 𝘥𝘦 𝘤𝘢𝘯𝘤𝘪𝘰𝘯𝘦𝘴 𝘰 𝘷í𝘥𝘦𝘰𝘴.
🌱 *#𝘴𝘱𝘢𝘮𝘸𝘢 • #𝘴𝘱𝘢𝘮*
> ✦ 𝘌𝘯𝘷𝘪𝘢 𝘴𝘱𝘢𝘮 𝘢𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘴𝘴 • #𝘴𝘴𝘸𝘦𝘣*
> ✦ 𝘝𝘦𝘳 𝘦𝘭 𝘦𝘴𝘵𝘢𝘥𝘰 𝘥𝘦 𝘶𝘯𝘢 𝘱á𝘨𝘪𝘯𝘢 𝘸𝘦𝘣.
🌱 *#𝘭𝘦𝘯𝘨𝘵𝘩 • #𝘵𝘢𝘮𝘢ñ𝘰*
> ✦ 𝘊𝘢𝘮𝘣𝘪𝘢 𝘦𝘭 𝘵𝘢𝘮𝘢ñ𝘰 𝘥𝘦 𝘪𝘮á𝘨𝘦𝘯𝘦𝘴 𝘺 𝘷í𝘥𝘦𝘰𝘴.
🌱 *#𝘴𝘢𝘺 • #𝘥𝘦𝘤𝘪𝘳* + [𝘵𝘦𝘹𝘵𝘰]
> ✦ 𝘙𝘦𝘱𝘦𝘵𝘪𝘳 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦.
🌱 *#𝘵𝘰𝘥𝘰𝘤 • #𝘵𝘰𝘥𝘶𝘤𝘶𝘮𝘦𝘯𝘵*
> ✦ 𝘊𝘳𝘦𝘢 𝘥𝘰𝘤𝘶𝘮𝘦𝘯𝘵𝘰𝘴 𝘥𝘦 (𝘢𝘶𝘥𝘪𝘰, 𝘪𝘮á𝘨𝘦𝘯𝘦𝘴 𝘺 𝘷í𝘥𝘦𝘰𝘴).
🌱 *#𝘵𝘳𝘢𝘯𝘴𝘭𝘢𝘵𝘦 • #𝘵𝘳𝘢𝘥𝘶𝘤𝘪𝘳 • #𝘵𝘳𝘢𝘥*
> ✦ 𝘛𝘳𝘢𝘥𝘶𝘤𝘦 𝘱𝘢𝘭𝘢𝘣𝘳𝘢𝘴 𝘦𝘯 𝘰𝘵𝘳𝘰𝘴 𝘪𝘥𝘪𝘰𝘮𝘢𝘴.
• :･ﾟ⊹˚• `『 𝘗𝘦𝘳𝘧𝘪𝘭 』` •˚⊹:･ﾟ•
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘱𝘦𝘳𝘧𝘪𝘭 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳, 𝘤𝘰𝘯𝘧𝘪𝘨𝘶𝘳𝘢𝘳 𝘺 𝘤𝘰𝘮𝘱𝘳𝘰𝘣𝘢𝘳 𝘦𝘴𝘵𝘢𝘥𝘰𝘴 𝘥𝘦 𝘵𝘶 𝘱𝘦𝘳𝘧𝘪𝘭.
🌱 *#𝘳𝘦𝘨 • #𝘷𝘦𝘳𝘪𝘧𝘪𝘤𝘢𝘳 • #𝘳𝘦𝘨𝘪𝘴𝘵𝘦𝘳*
> ✦ 𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘢 𝘵𝘶 𝘯𝘰𝘮𝘣𝘳𝘦 𝘺 𝘦𝘥𝘢𝘥 𝘦𝘯 𝘦𝘭 𝘣𝘰𝘵.
🌱 *#𝘶𝘯𝘳𝘦𝘨*
> ✦ 𝘌𝘭𝘪𝘮𝘪𝘯𝘢 𝘵𝘶 𝘳𝘦𝘨𝘪𝘴𝘵𝘳𝘰 𝘥𝘦𝘭 𝘣𝘰𝘵.
🌱 *#𝘱𝘳𝘰𝘧𝘪𝘭𝘦*
> ✦ 𝘔𝘶𝘦𝘴𝘵𝘳𝘢 𝘵𝘶 𝘱𝘦𝘳𝘧𝘪𝘭 𝘥𝘦 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘮𝘢𝘳𝘳𝘺* [𝘮𝘦𝘯𝘴𝘪𝘰𝘯 / 𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢𝘳]
> ✦ 𝘗𝘳𝘰𝘱ó𝘯 𝘮𝘢𝘵𝘳𝘪𝘮𝘰𝘯𝘪𝘰 𝘢 𝘰𝘵𝘳𝘰 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘥𝘪𝘷𝘰𝘳𝘤𝘦*
> ✦ 𝘋𝘪𝘷𝘰𝘳𝘤𝘪𝘢𝘳𝘵𝘦 𝘥𝘦 𝘵𝘶 𝘱𝘢𝘳𝘦𝘫𝘢.
🌱 *#𝘴𝘦𝘵𝘨𝘦𝘯𝘳𝘦 • #𝘴𝘦𝘵𝘨𝘦𝘯𝘦𝘳𝘰*
> ✦ 𝘌𝘴𝘵𝘢𝘣𝘭𝘦𝘤𝘦 𝘵𝘶 𝘨é𝘯𝘦𝘳𝘰 𝘦𝘯 𝘦𝘭 𝘱𝘦𝘳𝘧𝘪𝘭 𝘥𝘦𝘭 𝘣𝘰𝘵.
🌱 *#𝘥𝘦𝘭𝘨𝘦𝘯𝘳𝘦 • #𝘥𝘦𝘭𝘨𝘦𝘯𝘦𝘳𝘰*
> ✦ 𝘌𝘭𝘪𝘮𝘪𝘯𝘢 𝘵𝘶 𝘨é𝘯𝘦𝘳𝘰 𝘥𝘦𝘭 𝘱𝘦𝘳𝘧𝘪𝘭 𝘥𝘦𝘭 𝘣𝘰𝘵.
🌱 *#𝘴𝘦𝘵𝘣𝘪𝘳𝘵𝘩 • #𝘴𝘦𝘵𝘯𝘢𝘤𝘪𝘮𝘪𝘦𝘯𝘵𝘰*
> ✦ 𝘌𝘴𝘵𝘢𝘣𝘭𝘦𝘤𝘦 𝘵𝘶 𝘧𝘦𝘤𝘩𝘢 𝘥𝘦 𝘯𝘢𝘤𝘪𝘮𝘪𝘦𝘯𝘵𝘰 𝘦𝘯 𝘦𝘭 𝘱𝘦𝘳𝘧𝘪𝘭 𝘥𝘦𝘭 𝘣𝘰𝘵.
🌱 *#𝘥𝘦𝘭𝘣𝘪𝘳𝘵𝘩 • #𝘥𝘦𝘭𝘯𝘢𝘤𝘪𝘮𝘪𝘦𝘯𝘵𝘰*
> ✦ 𝘌𝘭𝘪𝘮𝘪𝘯𝘢 𝘵𝘶 𝘧𝘦𝘤𝘩𝘢 𝘥𝘦 𝘯𝘢𝘤𝘪𝘮𝘪𝘦𝘯𝘵𝘰 𝘥𝘦𝘭 𝘱𝘦𝘳𝘧𝘪𝘭 𝘥𝘦𝘭 𝘣𝘰𝘵.
🌱 *#𝘴𝘦𝘵𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘵𝘪𝘰𝘯 • #𝘴𝘦𝘵𝘥𝘦𝘴𝘤*
> ✦ 𝘌𝘴𝘵𝘢𝘣𝘭𝘦𝘤𝘦 𝘶𝘯𝘢 𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪ó𝘯 𝘦𝘯 𝘵𝘶 𝘱𝘦𝘳𝘧𝘪𝘭 𝘥𝘦𝘭 𝘣𝘰𝘵.
🌱 *#𝘥𝘦𝘭𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘵𝘪𝘰𝘯 • #𝘥𝘦𝘭𝘥𝘦𝘴𝘤*
> ✦ 𝘌𝘭𝘪𝘮𝘪𝘯𝘢 𝘭𝘢 𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪ó𝘯 𝘥𝘦 𝘵𝘶 𝘱𝘦𝘳𝘧𝘪𝘭 𝘥𝘦𝘭 𝘣𝘰𝘵.
🌱 *#𝘭𝘣 • #𝘭𝘣𝘰𝘢𝘳𝘥* + <𝘗𝘢𝘨𝘪𝘯á>
> ✦ 𝘛𝘰𝘱 𝘥𝘦 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘤𝘰𝘯 𝘮á𝘴 (𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘪𝘢 𝘺 𝘯𝘪𝘷𝘦𝘭).
🌱 *#𝘭𝘦𝘷𝘦𝘭 • #𝘭𝘷𝘭* + <@𝘔𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘝𝘦𝘳 𝘵𝘶 𝘯𝘪𝘷𝘦𝘭 𝘺 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘪𝘢 𝘢𝘤𝘵𝘶𝘢𝘭.
🌱 *#𝘤𝘰𝘮𝘱𝘳𝘢𝘳𝘱𝘳𝘦𝘮𝘪𝘶𝘮 • #𝘱𝘳𝘦𝘮𝘪𝘶𝘮*
> ✦ 𝘊𝘰𝘮𝘱𝘳𝘢 𝘶𝘯 𝘱𝘢𝘴𝘦 𝘱𝘳𝘦𝘮𝘪𝘶𝘮 𝘱𝘢𝘳𝘢 𝘶𝘴𝘢𝘳 𝘦𝘭 𝘣𝘰𝘵 𝘴𝘪𝘯 𝘭í𝘮𝘪𝘵𝘦𝘴.
🌱 *#𝘤𝘰𝘯𝘧𝘦𝘴𝘪𝘰𝘯𝘦𝘴 • #𝘤𝘰𝘯𝘧𝘦𝘴𝘢𝘳*
> ✦ 𝘊𝘰𝘯𝘧𝘪𝘦𝘴𝘢 𝘵𝘶𝘴 𝘴𝘦𝘯𝘵𝘪𝘮𝘪𝘦𝘯𝘵𝘰𝘴 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯 𝘥𝘦 𝘮𝘢𝘯𝘦𝘳𝘢 𝘢𝘯𝘰𝘯𝘪𝘮𝘢.
• :･ﾟ⊹˚• `『 𝘎𝘳𝘶𝘱𝘰𝘴 』` •˚⊹:･ﾟ•
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘨𝘳𝘶𝘱𝘰𝘴 𝘱𝘢𝘳𝘢 𝘶𝘯𝘢 𝘮𝘦𝘫𝘰𝘳 𝘨𝘦𝘴𝘵𝘪ó𝘯 𝘥𝘦 𝘦𝘭𝘭𝘰𝘴.
🌱 *#𝘤𝘰𝘯𝘧𝘪𝘨 • #𝘰𝘯*
> ✦ 𝘝𝘦𝘳 𝘰𝘱𝘤𝘪𝘰𝘯𝘦𝘴 𝘥𝘦 𝘤𝘰𝘯𝘧𝘪𝘨𝘶𝘳𝘢𝘤𝘪ó𝘯 𝘥𝘦 𝘨𝘳𝘶𝘱𝘰𝘴.
🌱 *#𝘩𝘪𝘥𝘦𝘵𝘢𝘨*
> ✦ 𝘌𝘯𝘷𝘪𝘢 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘯𝘥𝘰 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴
🌱 *#𝘨𝘱 • #𝘪𝘯𝘧𝘰𝘨𝘳𝘶𝘱𝘰*
> ✦  𝘝𝘦𝘳 𝘭𝘢 𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪𝘰𝘯 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘭𝘪𝘯𝘦𝘢 • #𝘭𝘪𝘴𝘵𝘰𝘯𝘭𝘪𝘯𝘦*
> ✦ 𝘝𝘦𝘳 𝘭𝘢 𝘭𝘪𝘴𝘵𝘢 𝘥𝘦 𝘭𝘰𝘴 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘦𝘯 𝘭𝘪𝘯𝘦𝘢.
🌱 *#𝘴𝘦𝘵𝘸𝘦𝘭𝘤𝘰𝘮𝘦*
> ✦ 𝘌𝘴𝘵𝘢𝘣𝘭𝘦𝘤𝘦𝘳 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘥𝘦 𝘣𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘻𝘢𝘥𝘰.
🌱 *#𝘴𝘦𝘵𝘣𝘺𝘦*
> ✦ 𝘌𝘴𝘵𝘢𝘣𝘭𝘦𝘤𝘦𝘳 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘥𝘦 𝘥𝘦𝘴𝘱𝘦𝘥𝘪𝘥𝘢 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘻𝘢𝘥𝘰.
🌱 *#𝘭𝘪𝘯𝘬*
> ✦ 𝘌𝘭 𝘣𝘰𝘵 𝘦𝘯𝘷𝘪𝘢 𝘦𝘭 𝘭𝘪𝘯𝘬 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘢𝘥𝘮𝘪𝘯𝘴 • #𝘢𝘥𝘮𝘪𝘯*
> ✦ 𝘔𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘳 𝘢 𝘭𝘰𝘴 𝘢𝘥𝘮𝘪𝘯𝘴 𝘱𝘢𝘳𝘢 𝘴𝘰𝘭𝘪𝘤𝘪𝘵𝘢𝘳 𝘢𝘺𝘶𝘥𝘢.
🌱 *#𝘳𝘦𝘴𝘵𝘢𝘣𝘭𝘦𝘤𝘦𝘳 • #𝘳𝘦𝘷𝘰𝘬𝘦*
> ✦ 𝘙𝘦𝘴𝘵𝘢𝘣𝘭𝘦𝘤𝘦𝘳 𝘦𝘭 𝘦𝘯𝘭𝘢𝘤𝘦 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘨𝘳𝘶𝘱𝘰 • #𝘨𝘳𝘰𝘶𝘱* [𝘰𝘱𝘦𝘯 / 𝘢𝘣𝘳𝘪𝘳]
> ✦ 𝘊𝘢𝘮𝘣𝘪𝘢 𝘢𝘫𝘶𝘴𝘵𝘦𝘴 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘱𝘢𝘳𝘢 𝘲𝘶𝘦 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘦𝘯𝘷𝘪𝘦𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦.
🌱 *#𝘨𝘳𝘶𝘱𝘰 • #𝘨𝘳𝘶𝘰𝘱* [𝘤𝘭𝘰𝘴𝘦 / 𝘤𝘦𝘳𝘳𝘢𝘳]
> ✦ 𝘊𝘢𝘮𝘣𝘪𝘢 𝘢𝘫𝘶𝘴𝘵𝘦𝘴 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰 𝘱𝘢𝘳𝘢 𝘲𝘶𝘦 𝘴𝘰𝘭𝘰 𝘭𝘰𝘴 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘦𝘴 𝘦𝘯𝘷𝘪𝘦𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦.
🌱 *#𝘬𝘪𝘤𝘬* [𝘯ú𝘮𝘦𝘳𝘰 / 𝘮𝘦𝘯𝘴𝘪𝘰𝘯]
> ✦ 𝘌𝘭𝘪𝘮𝘪𝘯𝘢 𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰 𝘥𝘦 𝘶𝘯 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘢𝘥𝘥 • #𝘢ñ𝘢𝘥𝘪𝘳 • #𝘢𝘨𝘳𝘦𝘨𝘢𝘳* [𝘯ú𝘮𝘦𝘳𝘰]
> ✦ 𝘐𝘯𝘷𝘪𝘵𝘢 𝘢 𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰 𝘢 𝘵𝘶 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘱𝘳𝘰𝘮𝘰𝘵𝘦* [𝘮𝘦𝘯𝘴𝘪𝘰𝘯 / 𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢𝘳]
> ✦ 𝘌𝘭 𝘣𝘰𝘵 𝘥𝘢𝘳𝘢 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳 𝘢𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘯𝘥𝘰.
🌱 *#𝘥𝘦𝘮𝘰𝘵𝘦* [𝘮𝘦𝘯𝘴𝘪𝘰𝘯 / 𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢𝘳]
> ✦ 𝘌𝘭 𝘣𝘰𝘵 𝘲𝘶𝘪𝘵𝘢𝘳𝘢 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳 𝘢𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰 𝘮𝘦𝘯𝘤𝘪𝘰𝘯𝘢𝘯𝘥𝘰.
🌱 *#𝘨𝘱𝘣𝘢𝘯𝘯𝘦𝘳 • #𝘨𝘳𝘰𝘶𝘱𝘪𝘮𝘨*
> ✦ 𝘊𝘢𝘮𝘣𝘪𝘢𝘳 𝘭𝘢 𝘪𝘮𝘢𝘨𝘦𝘯 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘨𝘱𝘯𝘢𝘮𝘦 • #𝘨𝘳𝘰𝘶𝘱𝘯𝘢𝘮𝘦*
> ✦ 𝘊𝘢𝘮𝘣𝘪𝘢𝘳 𝘦𝘭 𝘯𝘰𝘮𝘣𝘳𝘦 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘨𝘱𝘥𝘦𝘴𝘤 • #𝘨𝘳𝘰𝘶𝘱𝘥𝘦𝘴𝘤*
> ✦ 𝘊𝘢𝘮𝘣𝘪𝘢𝘳 𝘭𝘢 𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘤𝘪ó𝘯 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘢𝘥𝘷𝘦𝘳𝘵𝘪𝘳 • #𝘸𝘢𝘳𝘯 • #𝘸𝘢𝘳𝘯𝘪𝘯𝘨*
> ✦ 𝘋𝘢𝘳𝘭𝘦 𝘶𝘯𝘢 𝘢𝘥𝘷𝘦𝘳𝘵𝘦𝘯𝘤𝘪𝘢 𝘢ú𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 ︎*#𝘶𝘯𝘸𝘢𝘳𝘯 • #𝘥𝘦𝘭𝘸𝘢𝘳𝘯*
> ✦ 𝘘𝘶𝘪𝘵𝘢𝘳 𝘢𝘥𝘷𝘦𝘳𝘵𝘦𝘯𝘤𝘪𝘢𝘴.
🌱 *#𝘢𝘥𝘷𝘭𝘪𝘴𝘵 • #𝘭𝘪𝘴𝘵𝘢𝘥𝘷*
> ✦ 𝘝𝘦𝘳 𝘭𝘪𝘴𝘵𝘢 𝘥𝘦 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘢𝘥𝘷𝘦𝘳𝘵𝘪𝘥𝘰𝘴.
🌱 *#𝘣𝘢𝘯𝘤𝘩𝘢𝘵*
> ✦ 𝘉𝘢𝘯𝘦𝘢𝘳 𝘦𝘭 𝘉𝘰𝘵 𝘦𝘯 𝘶𝘯 𝘤𝘩𝘢𝘵 𝘰 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘶𝘯𝘣𝘢𝘯𝘤𝘩𝘢𝘵*
> ✦ 𝘋𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘳 𝘦𝘭 𝘉𝘰𝘵 𝘥𝘦𝘭 𝘤𝘩𝘢𝘵 𝘰 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘮𝘶𝘵𝘦* [𝘮𝘦𝘯𝘴𝘪𝘰𝘯 / 𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢𝘳]
> ✦ 𝘌𝘭 𝘣𝘰𝘵 𝘦𝘭𝘪𝘮𝘪𝘯𝘢 𝘭𝘰𝘴 𝘮𝘦𝘯𝘴𝘢𝘫𝘦𝘴 𝘥𝘦𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘶𝘯𝘮𝘶𝘵𝘦* [𝘮𝘦𝘯𝘴𝘪𝘰𝘯 / 𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢𝘳]
> ✦ 𝘌𝘭 𝘣𝘰𝘵 𝘥𝘦𝘫𝘢 𝘥𝘦 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳 𝘭𝘰𝘴 𝘮𝘦𝘯𝘴𝘢𝘫𝘦𝘴 𝘥𝘦𝘭 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘦𝘯𝘤𝘶𝘦𝘴𝘵𝘢 • #𝘱𝘰𝘭𝘭*
> ✦ 𝘊𝘳𝘦𝘢 𝘶𝘯𝘢 𝘦𝘯𝘤𝘶𝘦𝘴𝘵𝘢.
🌱 *#𝘥𝘦𝘭𝘦𝘵𝘦 • #𝘥𝘦𝘭*
> ✦ 𝘌𝘭𝘪𝘮𝘪𝘯𝘢 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘥𝘦 𝘰𝘵𝘳𝘰𝘴 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴.
🌱 *#𝘧𝘢𝘯𝘵𝘢𝘴𝘮𝘢𝘴*
> ✦ 𝘝𝘦𝘳 𝘭𝘪𝘴𝘵𝘢 𝘥𝘦 𝘪𝘯𝘢𝘤𝘵𝘪𝘷𝘰𝘴 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘬𝘪𝘤𝘬𝘧𝘢𝘯𝘵𝘢𝘴𝘮𝘢𝘴*
> ✦ 𝘌𝘭𝘪𝘮𝘪𝘯𝘢 𝘢 𝘭𝘰𝘴 𝘪𝘯𝘢𝘤𝘵𝘪𝘷𝘰𝘴 𝘥𝘦𝘭 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘪𝘯𝘷𝘰𝘤𝘢𝘳 • #𝘵𝘢𝘨𝘢𝘭𝘭 • #𝘵𝘰𝘥𝘰𝘴*
> ✦ 𝘐𝘯𝘷𝘰𝘤𝘢 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘥𝘦 𝘶𝘯 𝘨𝘳𝘶𝘱𝘰.
🌱 *#𝘴𝘦𝘵𝘦𝘮𝘰𝘫𝘪 • #𝘴𝘦𝘵𝘦𝘮𝘰*
> ✦ 𝘊𝘢𝘮𝘣𝘪𝘢 𝘦𝘭 𝘦𝘮𝘰𝘫𝘪 𝘲𝘶𝘦 𝘴𝘦 𝘶𝘴𝘢 𝘦𝘯 𝘭𝘢 𝘪𝘯𝘷𝘪𝘵𝘢𝘤𝘪ó𝘯 𝘥𝘦 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴.
🌱 *#𝘭𝘪𝘴𝘵𝘯𝘶𝘮 • #𝘬𝘪𝘤𝘬𝘯𝘶𝘮*
> ✦ 𝘌𝘭𝘪𝘮𝘪𝘯𝘦 𝘢 𝘶𝘴𝘶𝘢𝘳𝘪𝘰 𝘱𝘰𝘳 𝘦𝘭 𝘱𝘳𝘦𝘧𝘪𝘫𝘰 𝘥𝘦 𝘱𝘢í𝘴.
• :･ﾟ⊹˚• `『 𝘈𝘯𝘪𝘮𝘦 』` •˚⊹:･ﾟ•
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘳𝘦𝘢𝘤𝘤𝘪𝘰𝘯𝘦𝘴 𝘥𝘦 𝘢𝘯𝘪𝘮𝘦.
🌱 *#𝘢𝘯𝘨𝘳𝘺 • #𝘦𝘯𝘰𝘫𝘢𝘥𝘰* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘌𝘴𝘵𝘢𝘳 𝘦𝘯𝘰𝘫𝘢𝘥𝘰
🌱 *#𝘣𝘪𝘵𝘦* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘔𝘶𝘦𝘳𝘥𝘦 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯
🌱 *#𝘣𝘭𝘦𝘩* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘚𝘢𝘤𝘢𝘳 𝘭𝘢 𝘭𝘦𝘯𝘨𝘶𝘢
🌱 *#𝘣𝘭𝘶𝘴𝘩* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘚𝘰𝘯𝘳𝘰𝘫𝘢𝘳𝘵𝘦
🌱 *#𝘣𝘰𝘳𝘦𝘥 • #𝘢𝘣𝘶𝘳𝘳𝘪𝘥𝘰* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘌𝘴𝘵𝘢𝘳 𝘢𝘣𝘶𝘳𝘳𝘪𝘥𝘰
🌱 *#𝘤𝘳𝘺* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘓𝘭𝘰𝘳𝘢𝘳 𝘱𝘰𝘳 𝘢𝘭𝘨𝘰 𝘰 𝘢𝘭𝘨𝘶𝘪𝘦𝘯
🌱 *#𝘤𝘶𝘥𝘥𝘭𝘦* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘈𝘤𝘶𝘳𝘳𝘶𝘤𝘢𝘳𝘴𝘦
🌱 *#𝘥𝘢𝘯𝘤𝘦* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘚𝘢𝘤𝘢𝘵𝘦 𝘭𝘰𝘴 𝘱𝘢𝘴𝘪𝘵𝘰𝘴 𝘱𝘳𝘰𝘩í𝘣𝘪𝘥𝘰𝘴
🌱 *#𝘥𝘳𝘶𝘯𝘬* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘌𝘴𝘵𝘢𝘳 𝘣𝘰𝘳𝘳𝘢𝘤𝘩𝘰
🌱 *#𝘦𝘢𝘵 • #𝘤𝘰𝘮𝘦𝘳* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘊𝘰𝘮𝘦𝘳 𝘢𝘭𝘨𝘰 𝘥𝘦𝘭𝘪𝘤𝘪𝘰𝘴𝘰
🌱 *#𝘧𝘢𝘤𝘦𝘱𝘢𝘭𝘮* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘋𝘢𝘳𝘵𝘦 𝘶𝘯𝘢 𝘱𝘢𝘭𝘮𝘢𝘥𝘢 𝘦𝘯 𝘭𝘢 𝘤𝘢𝘳𝘢
🌱 *#𝘩𝘢𝘱𝘱𝘺 • #𝘧𝘦𝘭𝘪𝘻* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘚𝘢𝘭𝘵𝘢 𝘥𝘦 𝘧𝘦𝘭𝘪𝘤𝘪𝘥𝘢𝘥
🌱 *#𝘩𝘶𝘨* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘋𝘢𝘳 𝘶𝘯 𝘢𝘣𝘳𝘢𝘻𝘰
🌱 *#𝘪𝘮𝘱𝘳𝘦𝘨𝘯𝘢𝘵𝘦 • #𝘱𝘳𝘦𝘨* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘌𝘮𝘣𝘢𝘳𝘢𝘻𝘢𝘳 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯
🌱 *#𝘬𝘪𝘭𝘭* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘛𝘰𝘮𝘢 𝘵𝘶 𝘢𝘳𝘮𝘢 𝘺 𝘮𝘢𝘵𝘢 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯
🌱 *#𝘬𝘪𝘴𝘴 • #𝘣𝘦𝘴𝘢𝘳* • #𝘬𝘪𝘴𝘴2 + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘋𝘢𝘳 𝘶𝘯 𝘣𝘦𝘴𝘰
🌱 *#𝘭𝘢𝘶𝘨𝘩* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘙𝘦í𝘳𝘵𝘦 𝘥𝘦 𝘢𝘭𝘨𝘰 𝘰 𝘢𝘭𝘨𝘶𝘪𝘦𝘯
🌱 *#𝘭𝘪𝘤𝘬* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘓𝘢𝘮𝘦𝘳 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯
🌱 *#𝘭𝘰𝘷𝘦 • #𝘢𝘮𝘰𝘳* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘚𝘦𝘯𝘵𝘪𝘳𝘴𝘦 𝘦𝘯𝘢𝘮𝘰𝘳𝘢𝘥𝘰
🌱 *#𝘱𝘢𝘵* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘈𝘤𝘢𝘳𝘪𝘤𝘪𝘢 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯
🌱 *#𝘱𝘰𝘬𝘦* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘗𝘪𝘤𝘢𝘳 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯
🌱 *#𝘱𝘰𝘶𝘵* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘏𝘢𝘤𝘦𝘳 𝘱𝘶𝘤𝘩𝘦𝘳𝘰𝘴
🌱 *#𝘱𝘶𝘯𝘤𝘩* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘋𝘢𝘳 𝘶𝘯 𝘱𝘶ñ𝘦𝘵𝘢𝘻𝘰
🌱 *#𝘳𝘶𝘯* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘊𝘰𝘳𝘳𝘦𝘳
🌱 *#𝘴𝘢𝘥 • #𝘵𝘳𝘪𝘴𝘵𝘦* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘌𝘹𝘱𝘳𝘦𝘴𝘢𝘳 𝘵𝘳𝘪𝘴𝘵𝘦𝘻𝘢
🌱 *#𝘴𝘤𝘢𝘳𝘦𝘥* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘌𝘴𝘵𝘢𝘳 𝘢𝘴𝘶𝘴𝘵𝘢𝘥𝘰
🌱 *#𝘴𝘦𝘥𝘶𝘤𝘦* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘚𝘦𝘥𝘶𝘤𝘪𝘳 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯
🌱 *#𝘴𝘩𝘺 • #𝘵𝘪𝘮𝘪𝘥𝘰* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘚𝘦𝘯𝘵𝘪𝘳 𝘵𝘪𝘮𝘪𝘥𝘦𝘻
🌱 *#𝘴𝘭𝘢𝘱* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘋𝘢𝘳 𝘶𝘯𝘢 𝘣𝘰𝘧𝘦𝘵𝘢𝘥𝘢
🌱 *#𝘥𝘪𝘢𝘴 • #𝘥𝘢𝘺𝘴*
> ✦ 𝘋𝘢𝘳𝘭𝘦 𝘭𝘰𝘴 𝘣𝘶𝘦𝘯𝘰𝘴 𝘥í𝘢𝘴 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯 
🌱 *#𝘯𝘰𝘤𝘩𝘦𝘴 • #𝘯𝘪𝘨𝘩𝘵𝘴*
> ✦ 𝘋𝘢𝘳𝘭𝘦 𝘭𝘢𝘴 𝘣𝘶𝘦𝘯𝘢𝘴 𝘯𝘰𝘤𝘩𝘦𝘴 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯 
🌱 *#𝘴𝘭𝘦𝘦𝘱* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘛𝘶𝘮𝘣𝘢𝘳𝘵𝘦 𝘢 𝘥𝘰𝘳𝘮𝘪𝘳
🌱 *#𝘴𝘮𝘰𝘬𝘦* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘍𝘶𝘮𝘢𝘳
🌱 *#𝘵𝘩𝘪𝘯𝘬* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘗𝘦𝘯𝘴𝘢𝘳 𝘦𝘯 𝘢𝘭𝘨𝘰
• :･ﾟ⊹˚• `『 𝘑𝘶𝘦𝘨𝘰𝘴 』` •˚⊹:･ﾟ•
❍ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘫𝘶𝘦𝘨𝘰𝘴 𝘱𝘢𝘳𝘢 𝘫𝘶𝘨𝘢𝘳 𝘤𝘰𝘯 𝘳𝘶𝘴 𝘢𝘮𝘪𝘨𝘰𝘴.
🌱 *#𝘢𝘮𝘪𝘴𝘵𝘢𝘥 • #𝘢𝘮𝘪𝘨𝘰𝘳𝘢𝘯𝘥𝘰𝘮* 
> ✦ 𝘩𝘢𝘤𝘦𝘳 𝘢𝘮𝘪𝘨𝘰𝘴 𝘤𝘰𝘯 𝘶𝘯 𝘫𝘶𝘦𝘨𝘰. 
🌱 *#𝘤𝘩𝘢𝘲𝘶𝘦𝘵𝘢 • #𝘫𝘢𝘭𝘢𝘮𝘦𝘭𝘢*
> ✦ 𝘏𝘢𝘤𝘦𝘳𝘵𝘦 𝘶𝘯𝘢 𝘤𝘩𝘢𝘲𝘶𝘦𝘵𝘢.
🌱 *#𝘤𝘩𝘪𝘴𝘵𝘦*
> ✦ 𝘓𝘢 𝘣𝘰𝘵 𝘵𝘦 𝘤𝘶𝘦𝘯𝘵𝘢 𝘶𝘯 𝘤𝘩𝘪𝘴𝘵𝘦.
🌱 *#𝘤𝘰𝘯𝘴𝘦𝘫𝘰* 
> ✦ 𝘓𝘢 𝘣𝘰𝘵 𝘵𝘦 𝘥𝘢 𝘶𝘯 𝘤𝘰𝘯𝘴𝘦𝘫𝘰. 
🌱 *#𝘥𝘰𝘹𝘦𝘰 • #𝘥𝘰𝘹𝘦𝘢𝘳* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘚𝘪𝘮𝘶𝘭𝘢𝘳 𝘶𝘯 𝘥𝘰𝘹𝘦𝘰 𝘧𝘢𝘭𝘴𝘰.
🌱 *#𝘧𝘢𝘤𝘵𝘰*
> ✦ 𝘓𝘢 𝘣𝘰𝘵 𝘵𝘦 𝘭𝘢𝘯𝘻𝘢 𝘶𝘯 𝘧𝘢𝘤𝘵𝘰. 
🌱 *#𝘧𝘰𝘳𝘮𝘢𝘳𝘱𝘢𝘳𝘦𝘫𝘢*
> ✦ 𝘍𝘰𝘳𝘮𝘢 𝘶𝘯𝘢 𝘱𝘢𝘳𝘦𝘫𝘢. 
🌱 *#𝘧𝘰𝘳𝘮𝘢𝘳𝘱𝘢𝘳𝘦𝘫𝘢5*
> ✦ 𝘍𝘰𝘳𝘮𝘢 5 𝘱𝘢𝘳𝘦𝘫𝘢𝘴 𝘥𝘪𝘧𝘦𝘳𝘦𝘯𝘵𝘦𝘴.
🌱 *#𝘧𝘳𝘢𝘴𝘦*
> ✦ 𝘓𝘢 𝘣𝘰𝘵 𝘵𝘦 𝘥𝘢 𝘶𝘯𝘢 𝘧𝘳𝘢𝘴𝘦.
🌱 *#𝘩𝘶𝘦𝘷𝘰*
> ✦ 𝘈𝘨𝘢𝘳𝘳𝘢𝘭𝘦 𝘦𝘭 𝘩𝘶𝘦𝘷𝘰 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯.
🌱 *#𝘤𝘩𝘶𝘱𝘢𝘭𝘰* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘏𝘢𝘤𝘦𝘳 𝘲𝘶𝘦 𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰 𝘵𝘦 𝘭𝘢 𝘤𝘩𝘶𝘱𝘦.
🌱 *#𝘢𝘱𝘭𝘢𝘶𝘴𝘰* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘈𝘱𝘭𝘢𝘶𝘥𝘪𝘳𝘭𝘦 𝘢 𝘢𝘭𝘨𝘶𝘪𝘦𝘯.
🌱 *#𝘮𝘢𝘳𝘳𝘰𝘯* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘉𝘶𝘳𝘭𝘢𝘳𝘵𝘦 𝘥𝘦𝘭 𝘤𝘰𝘭𝘰𝘳 𝘥𝘦 𝘱𝘪𝘦𝘭 𝘥𝘦 𝘶𝘯 𝘶𝘴𝘶𝘢𝘳𝘪𝘰. 
🌱 *#𝘴𝘶𝘪𝘤𝘪𝘥𝘢𝘳*
> ✦ 𝘚𝘶𝘪𝘤𝘪𝘥𝘢𝘵𝘦. 
🌱 *#𝘪𝘲 • #𝘪𝘲𝘵𝘦𝘴𝘵* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘊𝘢𝘭𝘤𝘶𝘭𝘢𝘳 𝘦𝘭 𝘪𝘲 𝘥𝘦 𝘢𝘭𝘨𝘶𝘯𝘢 𝘱𝘦𝘳𝘴𝘰𝘯𝘢. 
🌱 *#𝘮𝘦𝘮𝘦*
> ✦ 𝘓𝘢 𝘣𝘰𝘵 𝘵𝘦 𝘦𝘯𝘷í𝘢 𝘶𝘯 𝘮𝘦𝘮𝘦 𝘢𝘭𝘦𝘢𝘵𝘰𝘳𝘪𝘰. 
🌱 *#𝘮𝘰𝘳𝘴𝘦*
> ✦ 𝘊𝘰𝘯𝘷𝘪𝘦𝘳𝘵𝘦 𝘶𝘯 𝘵𝘦𝘹𝘵𝘰 𝘢 𝘤𝘰𝘥𝘪𝘨𝘰 𝘮𝘰𝘳𝘴𝘦. 
🌱 *#𝘯𝘰𝘮𝘣𝘳𝘦𝘯𝘪𝘯𝘫𝘢*
> ✦ 𝘉𝘶𝘴𝘤𝘢 𝘶𝘯 𝘯𝘰𝘮𝘣𝘳𝘦 𝘯𝘪𝘯𝘫𝘢 𝘢𝘭𝘦𝘢𝘵𝘰𝘳𝘪𝘰. 
🌱 *#𝘱𝘢𝘫𝘢 • #𝘱𝘢𝘫𝘦𝘢𝘮𝘦* 
> ✦ 𝘓𝘢 𝘣𝘰𝘵 𝘵𝘦 𝘩𝘢𝘤𝘦 𝘶𝘯𝘢 𝘱𝘢𝘫𝘢.
🌱 *#𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘥𝘢𝘥* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘓𝘢 𝘣𝘰𝘵 𝘣𝘶𝘴𝘤𝘢 𝘵𝘶 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘥𝘢𝘥. 
🌱 *#𝘱𝘪𝘳𝘰𝘱𝘰*
> ✦ 𝘓𝘢𝘯𝘻𝘢 𝘶𝘯 𝘱𝘪𝘳𝘰𝘱𝘰.
🌱 *#𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢*
> ✦ 𝘏𝘢𝘻𝘭𝘦 𝘶𝘯𝘢 𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢 𝘢 𝘭𝘢 𝘣𝘰𝘵.
🌱 *#𝘴𝘩𝘪𝘱 • #𝘱𝘢𝘳𝘦𝘫𝘢*
> ✦ 𝘓𝘢 𝘣𝘰𝘵 𝘵𝘦 𝘥𝘢 𝘭𝘢 𝘱𝘳𝘰𝘣𝘢𝘣𝘪𝘭𝘪𝘥𝘢𝘥 𝘥𝘦 𝘦𝘯𝘢𝘮𝘰𝘳𝘢𝘳𝘵𝘦 𝘥𝘦 𝘶𝘯𝘢 𝘱𝘦𝘳𝘴𝘰𝘯𝘢. 
🌱 *#𝘴𝘰𝘳𝘵𝘦𝘰*
> ✦ 𝘌𝘮𝘱𝘪𝘦𝘻𝘢 𝘶𝘯 𝘴𝘰𝘳𝘵𝘦𝘰. 
🌱 *#𝘵𝘰𝘱*
> ✦ 𝘌𝘮𝘱𝘪𝘦𝘻𝘢 𝘶𝘯 𝘵𝘰𝘱 𝘥𝘦 𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘴.
🌱 *#𝘧𝘰𝘳𝘮𝘢𝘳𝘵𝘳𝘪𝘰* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘍𝘰𝘳𝘮𝘢 𝘶𝘯 𝘵𝘳𝘪𝘰.
🌱 *#𝘢𝘩𝘰𝘳𝘤𝘢𝘥𝘰*
> ✦ 𝘋𝘪𝘷𝘪𝘦𝘳𝘵𝘦𝘵𝘦 𝘤𝘰𝘯 𝘭𝘢 𝘣𝘰𝘵 𝘫𝘶𝘨𝘢𝘯𝘥𝘰 𝘦𝘭 𝘫𝘶𝘦𝘨𝘰 𝘢𝘩𝘰𝘳𝘤𝘢𝘥𝘰.
🌱 *#𝘨𝘦𝘯𝘪𝘰*
> ✦ 𝘊𝘰𝘮𝘪𝘦𝘯𝘻𝘢 𝘶𝘯𝘢 𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢 𝘤𝘰𝘯 𝘦𝘭 𝘨𝘦𝘯𝘪𝘰.
🌱 *#𝘮𝘢𝘵𝘦𝘴 • #𝘮𝘢𝘵𝘦𝘮𝘢𝘵𝘪𝘤𝘢𝘴*
> ✦ 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘭𝘢𝘴 𝘱𝘳𝘦𝘨𝘶𝘯𝘵𝘢𝘴 𝘥𝘦 𝘮𝘢𝘵𝘦𝘮á𝘵𝘪𝘤𝘢𝘴 𝘱𝘢𝘳𝘢 𝘨𝘢𝘯𝘢𝘳 𝘳𝘦𝘤𝘰𝘮𝘱𝘦𝘯𝘴𝘢𝘴.
🌱 *#𝘱𝘱𝘵*
> ✦ 𝘑𝘶𝘦𝘨𝘢 𝘱𝘪𝘦𝘥𝘳𝘢 𝘱𝘢𝘱𝘦𝘭 𝘰 𝘵𝘪𝘫𝘦𝘳𝘢𝘴 𝘤𝘰𝘯 𝘭𝘢 𝘣𝘰𝘵.
🌱 *#𝘴𝘰𝘱𝘢 • #𝘣𝘶𝘴𝘤𝘢𝘳𝘱𝘢𝘭𝘢𝘣𝘳𝘢*
> ✦ 𝘑𝘶𝘦𝘨𝘢 𝘦𝘭 𝘧𝘢𝘮𝘰𝘴𝘰 𝘫𝘶𝘦𝘨𝘰 𝘥𝘦 𝘴𝘰𝘱𝘢 𝘥𝘦 𝘭𝘦𝘵𝘳𝘢𝘴.
🌱 *#𝘱𝘷𝘱 • #𝘴𝘶𝘪𝘵* + <𝘮𝘦𝘯𝘤𝘪𝘰𝘯>
> ✦ 𝘑𝘶𝘦𝘨𝘢 𝘶𝘯 𝘱𝘷𝘱 𝘤𝘰𝘯𝘵𝘳𝘢 𝘰𝘵𝘳𝘰 𝘶𝘴𝘶𝘢𝘳𝘪𝘰.
🌱 *#𝘵𝘵𝘵*
> ✦ 𝘊𝘳𝘦𝘢 𝘶𝘯𝘢 𝘴𝘢𝘭𝘢 𝘥𝘦 𝘫𝘶𝘦𝘨𝘰. 
`.trim();
     await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m });

};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help'];

export default handler;

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    return `${hours}h ${minutes}m ${seconds}s`;
}
conn.sendMessage(m.chat, txt, { quoted: m });
