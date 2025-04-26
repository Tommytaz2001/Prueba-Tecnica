INSTRUCCIONES PARA EJECUTAR LA AUTOMATIZACIÓN DE LA PÁGINA WEB DEMOBLAZE

1. REQUISITOS PREVIOS
---------------------
- Tener instalado Node.js (versión recomendada: 14.x o superior).
- Tener instalado npm (normalmente se instala junto con Node.js).
- Cypress instalado globalmente o como dependencia local del proyecto.

2. INSTALACIÓN DE DEPENDENCIAS
------------------------------
Si el proyecto cuenta con un archivo package.json, ejecuta:

    npm install

(Si no existe package.json, instala Cypress de forma global con: npm install -g cypress)

3. EJECUCIÓN DEL TEST AUTOMATIZADO
----------------------------------
1. Abre una terminal y navega a la carpeta raíz del proyecto:

    cd "d:\Prueba Devsu"

2. Ejecuta Cypress en modo interactivo (GUI):

    npx cypress open

   Luego, en la ventana de Cypress, navega a e2e > PruebaDemoblaze > Prueba1.cy.js y haz clic para ejecutar el test.

   O bien, ejecuta el test directamente en consola (headless):

    npx cypress run --spec "cypress/e2e/PruebaDemoblaze/Prueba1.cy.js"

