const { addKeyword } = require('@bot-whatsapp/bot')

const PREGUNTAS_FRECUENTES = {
    '1': {
        pregunta: 'Requisitos para prácticas',
        respuesta: [
            '📋 *Requisitos para iniciar prácticas:*',
            '',
            '1️⃣ *Requisitos Académicos:*',
            '• Ser estudiante activo',
            '• Haber cursado el 60% de los créditos',
            '• Promedio mínimo de 3.8',
            '• No tener sanciones disciplinarias',
            '',
            '2️⃣ *Documentación Requerida:*',
            '• Hoja de vida actualizada',
            '• Carta de presentación',
            '• Seguro estudiantil vigente',
            '• Carné de vacunación (según empresa)',
            '',
            '3️⃣ *Requisitos Administrativos:*',
            '• Matrícula del semestre vigente',
            '• Paz y salvo financiero',
            '• Inscripción en el sistema de prácticas'
        ]
    },
    '2': {
        pregunta: 'Proceso de ARL',
        respuesta: [
            '🏥 *Proceso completo de ARL:*',
            '',
            '1️⃣ *Solicitud Inicial:*',
            '• Descargar formato de ARL',
            '• Completar datos personales',
            '• Adjuntar documentos de identidad',
            '• Incluir información de la empresa',
            '',
            '2️⃣ *Documentos Necesarios:*',
            '• Copia de cédula',
            '• Carta de aceptación empresarial',
            '• Convenio firmado',
            '• Formato de solicitud ARL',
            '',
            '3️⃣ *Proceso de Renovación:*',
            '• Solicitar 5 días antes del vencimiento',
            '• Adjuntar carta de la empresa',
            '• Informe de actividades actual',
            '',
            '⚠️ *Importante:*',
            '• La ARL debe estar activa antes de iniciar',
            '• Renovar antes del vencimiento',
            '• Informar cambios de horario o sede'
        ]
    },
    '3': {
        pregunta: 'Modalidades de práctica',
        respuesta: [
            '👨‍💼 *Modalidades de Práctica Disponibles:*',
            '',
            '1️⃣ *Práctica Empresarial:*',
            '• Tiempo completo en empresa',
            '• Remuneración obligatoria',
            '• Duración: 6 meses',
            '',
            '2️⃣ *Práctica Social:*',
            '• Medio tiempo',
            '• Sin remuneración obligatoria',
            '• Duración: 6-12 meses',
            '',
            '3️⃣ *Práctica Investigativa:*',
            '• Vinculación a grupo de investigación',
            '• Horario flexible',
            '• Duración según proyecto',
            '',
            '4️⃣ *Práctica Internacional:*',
            '• Tiempo completo',
            '• Requisitos adicionales',
            '• Duración según convenio'
        ]
    },
    '4': {
        pregunta: 'Evaluación y seguimiento',
        respuesta: [
            '📊 *Sistema de Evaluación y Seguimiento:*',
            '',
            '1️⃣ *Informes Mensuales:*',
            '• Formato F003 actualizado',
            '• Evidencias de actividades',
            '• Firma del supervisor',
            '',
            '2️⃣ *Evaluaciones:*',
            '• Evaluación mensual del supervisor',
            '• Autoevaluación del estudiante',
            '• Evaluación del tutor académico',
            '',
            '3️⃣ *Informe Final:*',
            '• Formato F004 completo',
            '• Presentación de resultados',
            '• Certificación de la empresa'
        ]
    },
    '5': {
        pregunta: 'Problemas comunes',
        respuesta: [
            '⚠️ *Solución a Problemas Frecuentes:*',
            '',
            '1️⃣ *Problemas con ARL:*',
            '• Verificar documentación completa',
            '• Revisar fechas de vigencia',
            '• Contactar coordinación inmediatamente',
            '',
            '2️⃣ *Conflictos en la Empresa:*',
            '• Informar al tutor académico',
            '• Documentar situaciones',
            '• Solicitar mediación si es necesario',
            '',
            '3️⃣ *Problemas de Horario:*',
            '• Notificar cambios con anticipación',
            '• Ajustar con autorización previa',
            '• Documentar acuerdos por escrito'
        ]
    }
}

const flowInternshipQA = addKeyword(['1', 'preguntas', 'faq'])
    .addAnswer([
        '❓ *Preguntas Frecuentes sobre Prácticas*',
        '',
        'Selecciona el tema de tu consulta:',
        '',
        '1. Requisitos para prácticas',
        '2. Proceso de ARL',
        '3. Modalidades de práctica',
        '4. Evaluación y seguimiento',
        '5. Problemas comunes',
        'Escribe "menu" para volver al menú principal',
        '',
        '📝 Escribe el número de tu consulta'
    ],
    { capture: true },
    async (ctx, { flowDynamic, gotoFlow }) => {
        const userResponse = ctx.body.trim().toLowerCase()

        if (userResponse === 'menu') {
            const flowMain = require('../menu/flowMain')
            return gotoFlow(flowMain)
        }

        const pregunta = PREGUNTAS_FRECUENTES[userResponse]
        if (pregunta) {
            await flowDynamic(pregunta.respuesta)
            await flowDynamic([
                '',
                '¿Deseas consultar algo más?',
                '',
                '1-5: Seleccionar otra pregunta',
                'Escribe "menu" para volver al menú principal'
            ])
            return
        }

        await flowDynamic([
            '❌ Opción no válida',
            'Por favor, selecciona un número del 1 al 5 o escribe "menu" para volver al menú principal'
        ])
    })

module.exports = flowInternshipQA
