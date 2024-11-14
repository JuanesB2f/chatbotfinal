const { addKeyword } = require('@bot-whatsapp/bot')

const flowHelp = addKeyword(['7', 'ayuda'])
    .addAnswer([
        '🤖 *Guía de Uso del Bot de Prácticas*\n',
        '*Comandos Principales:*',
        '• "menu" - Volver al menú principal',
        '• "contacto" - Información de contacto',
        '• "urgente" - Ayuda inmediata',
        '• "documentos" - Lista de formatos\n',
        '*Navegación:*',
        '1. Usa los números para seleccionar opciones',
        '2. Escribe palabras clave para búsquedas',
        '3. Usa "atras" para retroceder\n',
        '*Consejos:*',
        '• Selecciona la opcion correcta',
        '• Revisa todas las opciones disponibles',
        '• Guarda los contactos importantes\n',
        '*Horario del Bot:*',
        '• Disponible 24/7 para consultas',
        '• Respuestas instantáneas\n',
        '*Problemas Técnicos:*',
        'Si encuentras algún problema:',
        '1. Reinicia la conversación',
        '2. Verifica tu conexión',
        '3. Contacta soporte técnico\n',
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

module.exports = flowHelp