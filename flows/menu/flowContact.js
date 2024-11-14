const { addKeyword } = require('@bot-whatsapp/bot')

const flowContact = addKeyword(['5', 'contacto'])
    .addAnswer([
        '📞 *Información de Contacto*\n',
        '*Coordinación de Prácticas Profesionales*\n',
        '👤 *Coordinador General:* Dr. Erika Alarcon',
        '📧 Email: practicas@universidad.edu',
        '*Coordinadores por Facultad:*\n',
        '1. Facultad de Ingeniería:',
        '   • Ing. María Rodríguez',
        '   • ingenieria.practicas@universidad.edu\n',
        '2. Facultad de Administración:',
        '   • Dr. Carlos González',
        '   • admin.practicas@universidad.edu\n',
        '*Horarios de Atención:*',
        '• Lunes a Viernes: 8:00 AM - 5:00 PM',
        '• Sábados: 8:00 AM - 12:00 PM\n',
        '*Ubicación:*',
        '• Edificio Central, Piso 3, Oficina 304\n',
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