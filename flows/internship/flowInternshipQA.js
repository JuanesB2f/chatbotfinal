const { addKeyword } = require('@bot-whatsapp/bot')

const PREGUNTAS_FRECUENTES = {
    '1': {
        pregunta: 'Requisitos para prácticas',
        respuesta: [
            "*Requisitos para iniciar prácticas:*📌 *Académicos:*",
            "• Estar al día financieramente",
            "• Promedio mínimo de 3.8",
            "• 60% de créditos aprobados (apartir de septimo periodo academico)",
            "",
            "📌 *Formatos Requeridos:*",
            "• FOR GA 17 (Formato de aceptacion)",
            "• Formato de control de asistencia",
            "• FOR GA 05 (Seguimiento de practica laboral)",
            "",
            "📌 *Adicionales:*",
            "• Copia de la cedula del representante legal",
            "• Copia camara de comercio",
            "• Certificacion o carta laboral especificando las funciones",
            "• Los documentos se deben traer en pdf o deben ser enviados al correo practicas.iudc@gmail.com"]
    },
    '2': {
        pregunta: 'Proceso de afiliacion ARL',
        respuesta: [
            '🏥 *Proceso de afiliciacion ARL:*',
            '• El estudiante debe enviar la fotocopia de cedula ampliada al 150%, el certificado de la eps no mayor a 30 dias y directamente de la eps (no se admite formato ADRES) ademas de adjuntar los documentos mencionados enviar documentos al correo practicas.iudc@gmail.com\n• Nombre completo\n• tipo de documento de identidad\n• Numero de identificacion\n• Programa academico\n• Jornada\n• Numero de contacto\n• Direccion de domicilio\n• Correo electronico\n• Año en el que se matriculo\n• Fecha de ingreso a practica\nEn caso de emergencia:\n• Nombre \n• Parentesco\n• Numero de contacto',
        ]
    },
    '3': {
        pregunta: 'Modalidades de práctica',
        respuesta: [
            '👨‍💼 *Modalidades de Práctica Disponibles:*',
            '1️⃣ Contrato de Aprendizaje:\n• Acuerdo formal entre el estudiante y la empresa donde el estudiante recibe formacion practica y teorica, para ello el departamento de practicas profesionales conservan las hojas de vida de los estudiantes que cumplen con los requisitos academicos para presentar el aval entre las empresas. ',
            '2️⃣ Vinculo Laboral:\n•Relacion de trabajo formal entre el estudiante y la empresa, donde el estudiante desempeña funciones laborales y recibe una remuneración. Este vinculo se rige por la legislación laboral correspondiente.',
            '3️⃣ Convenio:\n• Acuerdo entre la universidad y una entidad externa que establece los terminos bajo los cuales se realizan las practicas.\nEste documento detalla el aspecto como objetivos, responsabilidades y condiciones para los estudiantes.',
            '4️⃣ Pasantia Laboral :\n• Modalidad en la cual los estudiantes deben realizar practicas en una empresa por un tiempo determinado, generalmente con el objetivo de aplicar lo aprendido en la academia.\nLas pasantias pueden ser remuneradas y suelen tener un enfoque mas practico.',

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
