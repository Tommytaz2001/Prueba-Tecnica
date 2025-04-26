describe('Pruebas de API DemoBlaze: Signup y Login', () => {
  // Datos de prueba
  const usuarioNuevo = {
    username: `test_${Date.now()}@example.com`, // Usuario único para cada ejecución
    password: 'asdfsd'
  }
  
  const usuarioExistente = {
    username: 'usuario.existente@example.com',
    password: 'asdfsd'
  }
  
  const usuarioLoginCorrecto = {
    username: 'usuario.existente@example.com',
    password: 'asdfsd'
  }
  
  const usuarioLoginIncorrecto = {
    username: 'usuario.existente@example.com',
    password: 'clave_incorrecta'
  }

  it('1. Crear un nuevo usuario en signup', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/signup',
      body: usuarioNuevo,
      failOnStatusCode: false
    }).then((response) => {
      cy.log('ENTRADA - Nuevo usuario:', JSON.stringify(usuarioNuevo))
      cy.log('SALIDA - Status:', response.status)
      cy.log('SALIDA - Body:', JSON.stringify(response.body))
      
      expect(response.status).to.be.oneOf([200, 201])
      // Si la API devuelve un mensaje de éxito específico, puedes validarlo aquí
    })
  })

  it('2. Intentar crear un usuario ya existente', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/signup',
      body: usuarioExistente,
      failOnStatusCode: false
    }).then((response) => {
      cy.log('ENTRADA - Usuario existente:', JSON.stringify(usuarioExistente))
      cy.log('SALIDA - Status:', response.status)
      cy.log('SALIDA - Body:', JSON.stringify(response.body))
      
      // La API puede devolver 200 con mensaje de error en el body
      expect(response.status).to.be.oneOf([200, 400, 409])
      expect(response.body).to.have.property('errorMessage', 'This user already exist.')
    })
  })

  it('3. Usuario y password correcto en login', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login',
      body: usuarioLoginCorrecto,
      failOnStatusCode: false
    }).then((response) => {
      cy.log('ENTRADA - Login correcto:', JSON.stringify(usuarioLoginCorrecto))
      cy.log('SALIDA - Status:', response.status)
      cy.log('SALIDA - Body:', JSON.stringify(response.body))
      
      expect(response.status).to.be.oneOf([200, 201])
      // La API debería devolver un token o algún identificador de autenticación
      // expect(response.body).to.have.property('auth_token')
    })
  })

  it('4. Usuario y password incorrecto en login', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login',
      body: usuarioLoginIncorrecto,
      failOnStatusCode: false
    }).then((response) => {
      cy.log('ENTRADA - Login incorrecto:', JSON.stringify(usuarioLoginIncorrecto))
      cy.log('SALIDA - Status:', response.status)
      cy.log('SALIDA - Body:', JSON.stringify(response.body))
      
      expect(response.status).to.be.oneOf([200, 400, 401, 403])
      // Validar mensaje de error según la respuesta real de la API
      // expect(response.body).to.have.property('errorMessage')
    })
  })
})