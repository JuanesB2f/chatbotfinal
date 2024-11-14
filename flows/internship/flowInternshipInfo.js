const { addKeyword } = require('@bot-whatsapp/bot')

const flowInternshipInfo = addKeyword(['1', 'informacion', 'practicas'])
    .addAnswer([
        '📚 *Información Detallada sobre Prácticas*\n',
        'Selecciona el tema sobre el que necesitas información:\n',
        '1️⃣ Requisitos y proceso de inscripción',
        '2️⃣ Proceso de vinculación empresarial',
        '3️⃣ Modalidades y tipos de práctica',
        '4️⃣ Evaluación y seguimiento',
        '5️⃣ Derechos y deberes',
        '6️⃣ Procedimientos especiales\n',
        'Escribe el número de tu consulta \n o escribe "menu" para volver al menú principal'
    ],
    { capture: true },
    async (ctx, { flowDynamic, gotoFlow }) => {
        const responses = {
            '1': [
                '*Requisitos y Proceso de Inscripción*\n',
                '1. Requisitos académicos:\n• 60% de créditos aprobados\n• Promedio mínimo de 3.8 \n • Materias prerrequisito aprobadas\n',
                '2. Documentación inicial:\n• Formato de inscripción\n• Hoja de vida institucional\n • Certificado de créditos\n',
                '3. Proceso de inscripción para derecho:\n• Registro en plataforma\n • Entrevista inicial\n • Taller de inducción',
                '4. Proceso de inscripción:\n  Registro en plataforma\n• Entrevista inicial\n • Taller de inducción'
            ],
            '2': [
                '*Proceso de Vinculación Empresarial*\n',
                '1. Búsqueda de empresa:\n • Base de datos institucional\n• Postulación independiente\n',
                '2. Documentación empresa:\n• Convenio marco\n• Acta de inicio\n • Plan de trabajo\n',
                '3. Requisitos empresa:\n• Registro legal vigente\n • Supervisor asignado\n• Plan de formación'
            ],
            '3': [
                '*Modalidades de Práctica*\n',
                '1. Práctica Empresarial:\n• Tiempo completo\n• Remuneración obligatoria\n• 6 meses de duración\n',
                '2. Práctica Social:\n• Medio tiempo\n• Sin remuneración\n • 6-12 meses\n',
                '3. Práctica Investigativa:\n• Flexible\n• Con grupos de investigación\n• Según proyecto\n',
                '4. Práctica Internacional:\n• Convenios especiales\n• Requisitos adicionales\n• Duración variable'
            ],
            '4': [
                '*Sistema de Evaluación*\n',
                '1. Seguimiento mensual:\n• Informes de avance\n• Evaluación del supervisor\n• Visitas de seguimiento\n',
                '2. Evaluación final:\n• Informe final\n• Sustentación\n• Certificación empresa\n',
                '3. Criterios de evaluación:\n• Desempeño laboral\n• Cumplimiento\n• Competencias'
            ],
            '5': [
                '*Derechos y Deberes*\n',
                '1. Derechos del practicante:\n• Asesoría académica\n• Seguro estudiantil\n• Cambio justificado\n',
                '2. Deberes:\n• Cumplimiento horario\n• Confidencialidad\n• Informes oportunos\n',
                '3. Normativa:\n• Reglamento interno\n• Código de ética\n• Manual de convivencia'
            ],
            '6': [
                '*Procedimientos Especiales*\n',
                '1. Cancelación de práctica:\n• Solicitud formal\n• Justificación\n• Documentación soporte\n',
                '2. Cambio de empresa:\n• Requisitos\n• Proceso\n• Plazos\n',
                '3. Prórrogas:\n• Condiciones\n• Documentación\n• Aprobación'
            ]
        }

        // Normalizar el input del usuario
        const userInput = ctx.body.trim().toLowerCase();

        // Revisar si el usuario quiere volver al menú principal
        if (userInput === 'menu') {
            const flowMain = require('../menu/flowMain')
            return gotoFlow(flowMain)
        }

        const response = responses[userInput]
        if (response) {
            await flowDynamic(response)
        } else {
            await flowDynamic([
                '❌ Opción no válida',
                'Por favor, selecciona un número del 1 al 6 o escribe "menu" para volver al menú principal'
            ])
        }
    })

module.exports = flowInternshipInfo
