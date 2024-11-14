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
        '6️⃣ Procedimientos especiales',
        '7️⃣ Volver al menú principal\n',
        'Escribe el número de tu consulta (1-7) o "menu" para volver al menú principal.'
    ],
    { capture: true },
    async (ctx, { flowDynamic, gotoFlow }) => {
        const responses = {
            '1': [
                '*Requisitos y Proceso de Inscripción*\n',
                '1. Requisitos académicos:',
                '• 75% de créditos aprobados',
                '• Promedio mínimo de 3.5',
                '• Materias prerrequisito aprobadas\n',
                '2. Documentación inicial:',
                '• Formato de inscripción',
                '• Hoja de vida institucional',
                '• Certificado de créditos\n',
                '3. Proceso de inscripción:',
                '• Registro en plataforma',
                '• Entrevista inicial',
                '• Taller de inducción'
            ],
            '2': [
                '*Proceso de Vinculación Empresarial*\n',
                '1. Búsqueda de empresa:',
                '• Base de datos institucional',
                '• Postulación independiente\n',
                '2. Documentación empresa:',
                '• Convenio marco',
                '• Acta de inicio',
                '• Plan de trabajo\n',
                '3. Requisitos empresa:',
                '• Registro legal vigente',
                '• Supervisor asignado',
                '• Plan de formación'
            ],
            '3': [
                '*Modalidades de Práctica*\n',
                '1. Práctica Empresarial:',
                '• Tiempo completo',
                '• Remuneración obligatoria',
                '• 6 meses de duración\n',
                '2. Práctica Social:',
                '• Medio tiempo',
                '• Sin remuneración',
                '• 6-12 meses\n',
                '3. Práctica Investigativa:',
                '• Flexible',
                '• Con grupos de investigación',
                '• Según proyecto\n',
                '4. Práctica Internacional:',
                '• Convenios especiales',
                '• Requisitos adicionales',
                '• Duración variable'
            ],
            '4': [
                '*Sistema de Evaluación*\n',
                '1. Seguimiento mensual:',
                '• Informes de avance',
                '• Evaluación del supervisor',
                '• Visitas de seguimiento\n',
                '2. Evaluación final:',
                '• Informe final',
                '• Sustentación',
                '• Certificación empresa\n',
                '3. Criterios de evaluación:',
                '• Desempeño laboral',
                '• Cumplimiento',
                '• Competencias'
            ],
            '5': [
                '*Derechos y Deberes*\n',
                '1. Derechos del practicante:',
                '• Asesoría académica',
                '• Seguro estudiantil',
                '• Cambio justificado\n',
                '2. Deberes:',
                '• Cumplimiento horario',
                '• Confidencialidad',
                '• Informes oportunos\n',
                '3. Normativa:',
                '• Reglamento interno',
                '• Código de ética',
                '• Manual de convivencia'
            ],
            '6': [
                '*Procedimientos Especiales*\n',
                '1. Cancelación de práctica:',
                '• Solicitud formal',
                '• Justificación',
                '• Documentación soporte\n',
                '2. Cambio de empresa:',
                '• Requisitos',
                '• Proceso',
                '• Plazos\n',
                '3. Prórrogas:',
                '• Condiciones',
                '• Documentación',
                '• Aprobación'
            ]
        }

        if (ctx.body.trim() === 'menu') {
            const flowMain = require('../menu/flowMain')
            return gotoFlow(flowMain)
        }

        const response = responses[ctx.body.trim()]
        if (response) {
            await flowDynamic(response)
            await flowDynamic([
                '\n¿Deseas consultar otra información?',
                '1-6: Seleccionar otro tema',
                '"menu": Volver al menú principal'
            ])
        } else {
            await flowDynamic([
                '❌ Opción no válida',
                'Por favor, selecciona un número del 1 al 6 o escribe "menu" para volver al menú principal'
            ])
        }
    })

module.exports = flowInternshipInfo
