// menu/flowMain.js
const { addKeyword } = require('@bot-whatsapp/bot')
const { globalState } = require('../../state/globalState')
const keywords = require('../../data/words')
const flowInternshipInfo = require('../internship/flowInternshipInfo')
const flowInternshipQA = require('../internship/flowInternshipQA')
const flowDocuments = require('../internship/flowDocuments')
const flowContact = require('./flowContact')
const flowHelp = require('./flowHelp')

// Definimos flowMain y keywordHandler
const flowMain = addKeyword(['hola', 'menu','menú', 'inicio'])
    .addAnswer('¡Bienvenido al Chatbot de Prácticas Universitarias IUDC!, Recuerda que el proceso de practicas es obligatorio en todos los programas para tu grado 👋')
    .addAnswer(
        [
            'Por favor, selecciona una opción:',
            '1. 📚 Información sobre prácticas',
            '2. 📄 Documentos y formatos',
            '3. ❓ Preguntas frecuentes',
            '4. 📞 Contactar al departamento de prácticas',
            '5. 🆘 Ayuda con el bot'
        ],
        { capture: true },
        async (ctx, { gotoFlow }) => {
            const option = ctx.body.trim()
            globalState.setUserData({ name: ctx.pushName })

            switch (option) {
                case '1':
                    return gotoFlow(flowInternshipInfo)
                case '2':
                    return gotoFlow(flowDocuments)
                case '3':
                    return gotoFlow(flowInternshipQA)
                case '4':
                    return gotoFlow(flowContact)
                case '5':
                    return gotoFlow(flowHelp)
                default:
                    return gotoFlow(flowMain)
            }
        }
    )

// Este controlador de palabras clave captura otras palabras y redirige
const keywordHandler = addKeyword(Object.values(keywords).flat())
    .addAnswer(
        'Parece que estás buscando información específica. ¿Puedes ser más claro con tu pregunta?',
        { capture: true },
        async (ctx, { gotoFlow }) => {
            const userInput = ctx.body.toLowerCase()

            if (keywords.practicas.some(word => userInput.includes(word))) {
                return gotoFlow(flowInternshipInfo)
            } else if (keywords.empresas.some(word => userInput.includes(word))) {
                return gotoFlow(flowCompanies)
            } else if (keywords.documentos.some(word => userInput.includes(word))) {
                return gotoFlow(flowDocuments)
            } else if (keywords.contacto.some(word => userInput.includes(word))) {
                return gotoFlow(flowContact)
            } else if (keywords.ayuda.some(word => userInput.includes(word))) {
                return gotoFlow(flowHelp)
            } else if (keywords.menu.some(word => userInput.includes(word))) {
                return gotoFlow(flowMain)
            } else {
                return gotoFlow(flowInternshipQA)
            }
        }
    )

module.exports = { flowMain, keywordHandler }
