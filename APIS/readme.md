# Pruebas de APIs con Cypress - DemoBlaze

Esta prueba técnica contiene pruebas automatizadas para los servicios REST de la plataforma DemoBlaze, utilizando Cypress como framework de testing.

## Estructura
- **cypress/e2e/API.cy.js**: Archivo principal con las pruebas para los endpoints de registro (signup) y login.

## Endpoints probados
- `POST https://api.demoblaze.com/signup` - Registro de usuario
- `POST https://api.demoblaze.com/login` - Inicio de sesión

## Casos de prueba implementados
1. Crear un nuevo usuario en signup
2. Intentar crear un usuario ya existente
3. Login exitoso con usuario y password correctos
4. Login fallido con usuario y/o password incorrectos

## Ejecución de las pruebas
1. Instala dependencias (si no lo has hecho):
   ```
   npm install
   ```
2. Ejecuta Cypress en modo interactivo:
   ```
   npx cypress open
   ```
   O en modo headless:
   ```
   npx cypress run --spec "APIS/cypress/e2e/API.cy.js"
   ```

## Notas
- Los datos de usuario para pruebas están definidos en el propio archivo de test.
- El correo de usuario nuevo se genera dinámicamente para evitar conflictos.
- El correo de usuario existente es de ejemplo y debe estar previamente registrado para validar el caso de usuario duplicado.

---

