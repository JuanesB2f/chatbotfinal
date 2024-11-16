const { addKeyword } = require('@bot-whatsapp/bot')

const flowContact = addKeyword(['5', 'contacto'])
    .addAnswer([
        '📞 *Información de Contacto*\n',
        '*Coordinación de Prácticas Profesionales*\n',
        '👤 *Coordinador General:* Dr. Erika Alarcon',
        '📧 Email:practicas.iudc@gmail.com', 
        '*Horarios de Atención:*',
        '• Lunes a Viernes: 8:00 AM - 5:00 PM',     
        '*Ubicación:*',
        '• Casa verde, sede administrativa\n',
        'Para volver al menú principal, escribe "menu"'
    ],
    { capture: true },
    async (ctx, { gotoFlow }) => {
        const userResponse = ctx.body.trim()

        if (userResponse === '0') {
            const flowMain = require('../menu/flowMain')
            return gotoFlow(flowMain)
        }
    })

module.exports = flowContact