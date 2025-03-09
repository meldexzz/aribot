let handler = async (m, { conn }) => {
    // Convertimos el texto del mensaje a minúsculas para hacer la búsqueda más flexible
    let messageText = m.text.toLowerCase();

    // Si el mensaje contiene la palabra "gracias"
    if (messageText.includes("gracias")) {
        // El bot responde con el mensaje personalizado
        await m.reply('Un placer, gracias por comprar y disfruta. \n\nATT: Equipo de Ary ventas');
    }
};

handler.help = ['gracias'];  // Este comando es más para referencia, ya que detecta cualquier mensaje con la palabra
handler.tags = ['información'];  // Lo clasificamos como información
handler.command = ['gracias'];  // Este comando también es para referencia

export default handler;
