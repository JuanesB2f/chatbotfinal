const { addKeyword } = require('@bot-whatsapp/bot')

const flowInternshipInfo = addKeyword(['1', 'informacion', 'practicas'])
    .addAnswer([
        '📚 *Información Detallada sobre Prácticas*\n',
        'Selecciona el tema sobre el que necesitas información:\n',
        '1️⃣ Requisitos y proceso de inscripción',
        '2️⃣ Proceso de vinculación empresarial',
        '3️⃣ Modalidades y tipos de práctica',
        '4️⃣ Evaluación de practicas',
        '5️⃣ Derechos y deberes',
        'Escribe el número de tu consulta \n o escribe "menu" para volver al menú principal'
    ],
        { capture: true },
        async (ctx, { flowDynamic, gotoFlow }) => {
            const responses = {
                '1': [
                    '*Requisitos y Proceso de Inscripción a Practicas*\n',
                    '1. Requisitos académicos:\n• 60% de créditos aprobados (a partir de septimo periodo academico primer modulo)\n• Promedio mínimo de 3.8 \n • Materias aprobadas\n• Estar financieramente al día',
                    '2. Documentación inicial:\n• El estudiante debe solicitar a la empresa los siguientes documentos en digital, la empresa los puede entregar directamente al estudiante o enviar al correo practicas.iudc@gmail.com \n• Copia de la cédula del representante legal\n •Copia cámara y comercio no mayor a 90 días (tres meses)\n•Certificación o carta laboral especificando las funciones\n•Cumpliendo con la documentacion dirigirse a coordinacion de practicas',
                    '3. Documentación que debe diligenciar durante la práctica:\n• Una vez el estudiante firme contrato con la empresa, debe diligenciar\n-FOR GA 17 (Formato de carta de aceptación) por su supervisor o jefe directo\n• Durante el tiempo de práctica en la empresa, el estudiante debe diligenciar\n-FORMATO CONTROL ASISTENCIA PRÁCTICAS O PASANTIAS mes a mes.',
                    '4. Paso a paso para descargar los formatos del aula virtual:\n• Ingresar e iniciar sesion en este link https://ww1.aulavirtualuniversitariadecolombia.co/login/index.php \n• Al iniciar sesion dirigete a la parte final de la pagina, al lado derecho en la opción SERVICIOS, encuentras BIENESTAR UNIVERSITARIO, dar click en esta opción\n• En el segundo  titulo encuentras PASANTIAS Y PRACTICAS\n debes descargar los formatos.\n-FORMATO CONTROL DE ASISTENCIA\n-FOR-GA-05 SEGUIMIENTO PRACTICA LABORAL\n Los cuales debes diligenciar con los pasos anteriores.',
                    '5. Practicas Psicologia:\n•Los estudian del programa de psicologia que estan proximos a realizar sus practicas recuerden:\n PRACTICA CLINICA:\n Dirigirsen directamente al consultorio psicologico \n PRACTICA ORGANIZACIONAL:\n Diligenciar los formatos que se encuentran en el aula virtual mencionados en el punto 3',
                    '6. Practicas Derecho: \n•Los estudiantes que desean realizar la practica juridica en la institución debe dirigirse al consultorio juridico.  '

                ],
                '2': [
                    '*Lineamientos para el desarrollo de las practicas*\n',
                    '1. Duración:\n • Las practicas tienen un tiempo de duración de 6 meses y 1 año, a solicitud de la empresa y el acuerdo con el estudiante\n2•Horario:\nlos horarios se estipulan directamente con la empresa, respetando un maximo de 40 horas semanales \n'
                ],
                '3': [
                    '*Modalidades de Práctica*\n',
                    '1. Contrato de Aprendizaje:\n• Acuerdo formal entre el estudiante y la empresa donde el estudiante recibe formacion practica y teorica, para ello el departamento de practicas profesionales conservan las hojas de vida de los estudiantes que cumplen con los requisitos academicos para presentar el aval entre las empresas. ',
                    '2. Vinculo Laboral:\n•Relacion de trabajo formal entre el estudiante y la empresa, donde el estudiante desempeña funciones laborales y recibe una remuneración. Este vinculo se rige por la legislación laboral correspondiente.',
                    '3. Convenio:\n• Acuerdo entre la universidad y una entidad externa que establece los terminos bajo los cuales se realizan las practicas.\nEste documento detalla el aspecto como objetivos, responsabilidades y condiciones para los estudiantes.',
                    '4. Pasantia Laboral :\n• Modalidad en la cual los estudiantes deben realizar practicas en una empresa por un tiempo determinado, generalmente con el objetivo de aplicar lo aprendido en la academia.\nLas pasantias pueden ser remuneradas y suelen tener un enfoque mas practico.',

                ],
                '4': [
                    '*Evaluación de practicas*\n',
                    '1. Reporte de avance:\n• El estudiante debe presentar dos reportes parciales y un informe final a sus actividades\n• El tutor academico asignado al inicio de la practica en coordinacion de practicas profesionales, revisara cada reporte y realizara su respectiva retroalimentacion \n•',
                    '2. Evaluacion por parte de la empresa:\n•La empresa evaluara al estudiante en aspectos como responsabilidad, desempeño, habilidades tecnicas y habilidades interpersonales.\n• Se utilizara un formato de evaluacion estandar proporcionado por la universidad.',
                    '3. Evaluacion Final:\n• La evaluacion final sera realizada por el tutor academico, basandose con los reportes de avance, el informe final y la evaluacion de la empresa.'
                ],
                '5': [
                    '*Derechos y Deberes*\n',
                    '1. Derechos del estudiante:\n• Resivir orientacion, apoyo por parte de la universidad y la empresa \n•Realizar actividades acordes a su formacion academica \n• Obtener certificado de practica al finalizar\n',
                    '2. Deberes del estudiante:\n• Cumplir con horarios y actividades asignadas \n• Mantener una conducta profesional y etica\n• Informar de cualquier irregularidad al tutor academico\n',
                    '3. Resolucion de conflictos:\n• En caso de presentarse una inconformidad por parte de la empresa o el estudiante, se debe notificar inmediatamente al departamento de practicas.',
               
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
                    'Por favor, selecciona un número del 1 al 5 o escribe "menu" para volver al menú principal'
                ])
            }
        })

module.exports = flowInternshipInfo
