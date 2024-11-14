const globalState = {
  currentFlow: null,
  userData: {
      name: null,
      lastInteraction: null,
      sessionStarted: false,
      documentosRevisados: [],
      empresasConsultadas: [],
      preguntasRealizadas: 0
  },
  setUserData(data) {
      this.userData = { 
          ...this.userData, 
          ...data, 
          lastInteraction: new Date().toISOString() 
      }
  },
  addDocumentoRevisado(documento) {
      if (!this.userData.documentosRevisados.includes(documento)) {
          this.userData.documentosRevisados.push(documento)
      }
  },
  addEmpresaConsultada(empresa) {
      if (!this.userData.empresasConsultadas.includes(empresa)) {
          this.userData.empresasConsultadas.push(empresa)
      }
  },
  incrementPreguntas() {
      this.userData.preguntasRealizadas += 1
  },
  clearUserData() {
      this.userData = {
          name: null,
          lastInteraction: null,
          sessionStarted: false,
          documentosRevisados: [],
          empresasConsultadas: [],
          preguntasRealizadas: 0
      }
  },
  isSessionActive() {
      if (!this.userData.lastInteraction) return false
      const now = new Date()
      const lastInteraction = new Date(this.userData.lastInteraction)
      const diffMinutes = (now - lastInteraction) / 60000
      return diffMinutes < 30 // Sesión expira después de 30 minutos
  }
}

module.exports = { globalState }