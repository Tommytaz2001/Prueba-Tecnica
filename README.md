# Proyecto de Automatización DemoBlaze

Este repositorio contiene una prueba técnica de automatización para la DemoBlaze, utilizando Cypress para pruebas tanto de interfaz de usuario (E2E) como de servicios REST (API).

## Estructura del Proyecto

El proyecto está organizado en dos componentes principales:

### 1. Pruebas End-to-End (E2E)

**Ubicación:** `E2E/cypress/e2e/PruebaDemoblaze/Prueba1.cy.js`

Estas pruebas automatizan el flujo completo de compra en la tienda DemoBlaze:

- Navegación a la página principal
- Selección de productos
- Adición de productos al carrito
- Verificación del carrito
- Proceso de checkout completo con datos de prueba
- Confirmación de la compra

### 2. Pruebas de API

**Ubicación:** `APIS/cypress/e2e/API.cy.js`

Estas pruebas validan los servicios REST de autenticación de DemoBlaze:

- **Signup (Registro):** Prueba la creación de nuevos usuarios y la validación de usuarios duplicados
- **Login:** Prueba el inicio de sesión con credenciales válidas e inválidas

Cada prueba captura y registra las entradas y salidas para facilitar la depuración y análisis.

## Tecnologías Utilizadas

- **Cypress:** Framework de testing para pruebas E2E y API
- **JavaScript:** Lenguaje de programación utilizado para los scripts de prueba

## Ejecución de Pruebas

### Requisitos Previos
- Node.js (v14 o superior)
- npm (normalmente incluido con Node.js)

### Instalación
```bash
# Instalar dependencias
npm install
```

### Ejecución
```bash
# Abrir Cypress en modo interactivo
npx cypress open

# Ejecutar pruebas en modo headless
npx cypress run --spec "E2E/cypress/e2e/PruebaDemoblaze/Prueba1.cy.js"
npx cypress run --spec "APIS/cypress/e2e/API.cy.js"
```

## Documentación Adicional

Cada componente del proyecto incluye su propia documentación detallada:

- **E2E:** Consulta `E2E/conclusiones.txt` para detalles sobre las pruebas de interfaz
- **API:** Consulta `APIS/readme.md` y `APIS/conclusiones.txt` para información sobre las pruebas de API

---

Proyecto desarrollado como prueba técnica para Devsu.
