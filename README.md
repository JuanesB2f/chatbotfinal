# Chatbot de Prácticas Universitarias IUDC

Bot de WhatsApp diseñado para ayudar a estudiantes con información sobre prácticas universitarias, utilizando la biblioteca @bot-whatsapp.

## Estructura del Proyecto

### Directorios Principales

#### `/data`
- `internshipFAQ.js`: Contiene las preguntas frecuentes y respuestas sobre prácticas.
- `words.js`: Define las palabras clave y términos para el reconocimiento de intenciones del usuario.

#### `/flows`
Contiene la lógica de conversación del bot, dividida en módulos:

##### `/flows/internship`
- `flowDocuments.js`: Maneja las consultas sobre documentación requerida.
- `flowInternshipInfo.js`: Proporciona información general sobre las prácticas.
- `flowInternshipQA.js`: Gestiona preguntas y respuestas específicas sobre prácticas.

##### `/flows/menu`
- `flowContact.js`: Maneja las solicitudes de contacto con el departamento.
- `flowHelp.js`: Proporciona ayuda sobre el uso del bot.
- `flowMain.js`: Gestiona el menú principal y la navegación general.

#### `/state`
- `globalState.js`: Maneja el estado global del bot y la información de sesión del usuario.

### Archivos de Configuración

- `app.js`: Punto de entrada principal de la aplicación.
- `.env`: Variables de entorno (no incluido en el repositorio).
- `.env.example`: Ejemplo de configuración de variables de entorno.
- `.gitignore`: Especifica qué archivos Git debe ignorar.
- `package.json`: Configuración del proyecto y dependencias.
- `package-lock.json`: Versiones exactas de las dependencias.
- `internship_state.json`: Almacena estados de las conversaciones.
- `db.json`: Base de datos local para el bot.

### Archivos de Registro
- `baileys.log`: Registro de eventos del proveedor Baileys.
- `core.class.log`: Registro de eventos del núcleo del bot.

## Descripción Detallada de Componentes

### Archivos de Datos
- `internshipFAQ.js`: Almacena una base de datos estructurada de preguntas frecuentes sobre prácticas, incluyendo requisitos, procesos y documentación necesaria.
- `words.js`: Define un diccionario de palabras clave que el bot utiliza para entender las intenciones del usuario y dirigirlo al flujo correcto.

### Flujos de Conversación
- `flowDocuments.js`: Gestiona consultas sobre documentos necesarios para las prácticas, formatos y requisitos de presentación.
- `flowInternshipInfo.js`: Proporciona información general sobre el programa de prácticas, incluyendo duración, requisitos y procesos.
- `flowInternshipQA.js`: Maneja preguntas específicas sobre las prácticas utilizando la base de datos de FAQ.
- `flowContact.js`: Facilita el contacto con el departamento de prácticas, proporcionando información de contacto y horarios.
- `flowHelp.js`: Ofrece ayuda sobre cómo usar el bot y navegar por sus opciones.
- `flowMain.js`: Implementa el menú principal y coordina la navegación entre diferentes flujos.

### Gestión de Estado
- `globalState.js`: Mantiene el estado de la conversación, información del usuario y seguimiento de interacciones.

## Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Instala las dependencias:
```bash
npm install
```

3. Copia el archivo .env.example a .env y configura las variables:
```bash
cp .env.example .env
```

4. Inicia el bot:
```bash
npm start
```

## Uso

El bot responde a mensajes de WhatsApp con un menú interactivo que permite:
- Consultar información sobre prácticas
- Revisar requisitos y documentación
- Hacer preguntas frecuentes
- Contactar al departamento de prácticas
- Obtener ayuda sobre el uso del bot

## Contribución

1. Haz fork del repositorio
2. Crea una rama para tu función: `git checkout -b feature/NuevaFuncion`
3. Commit tus cambios: `git commit -am 'Añade nueva función'`
4. Push a la rama: `git push origin feature/NuevaFuncion`
5. Crea un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE.md para detalles.