require('cypress-xpath');

/*
repositorio GitHub: https://github.com/IanVargas1/Proyecto-QA.git

    REQISITOS PARA EL CORRECTO FUNCIONAMIENTO DE LAS PRUEBAS
    - Agregar al cypress.config.ts el siguiete codigo:
        e2e: {
            'baseUrl': 'http://localhost:4200',
            supportFile: 'cypress/support/e2e.ts'
        }

    - En cypress/support/e2e.ts agregar el siguiete codigo:
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
*/

describe('QA PriceSmart', function () {
    beforeEach(function () {
        cy.visit(
            'https://www.pricesmart.com/site/cr/es/registro?item_number=989998&club_code=6407'
        );
    });

    afterEach(function () {
        cy.reload();
    });
    /*
        Nombre: QA01
        Objetivo: Validar que todo esté lleno correctamente y cambia el select de Club (Santa Ana).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6407 - Santa Ana
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Todo está llenado correctamente con el club Santa Ana.
    */
    it('Caso #01', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6407');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    /*
        Nombre: QA02
        Objetivo: Validar que todo esté lleno correctamente y cambia el select de Club (Zapote).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6401 - Zapote
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Todo está llenado correctamente con el club Zapote.
    */
    it('Caso #02', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6401');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    /*
        Nombre: QA03
        Objetivo: Validar que todo esté lleno correctamente y cambia el select de Club (Escazu).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6402 - Escazu
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Todo está llenado correctamente con el club Escazu.
    */
    it('Caso #03', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6402');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    /*
        Nombre: QA04
        Objetivo: Validar que todo esté lleno correctamente y cambia el select de Club (Heredia).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6403 - Heredia
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Todo está llenado correctamente con el club Heredia.
    */
    it('Caso #04', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6403');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    /*
        Nombre: QA05
        Objetivo: Validar que todo esté lleno correctamente y cambia el select de Club (Llorente).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6404 - Llorente
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Todo está llenado correctamente con el club Llorente.
    */
    it('Caso #05', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6404');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    /*
        Nombre: QA06
        Objetivo: Validar que todo esté lleno correctamente y cambia el select de Club (Alajuela).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6405 - Alajuela
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Todo está llenado correctamente con el club Alajuela.
    */
    it('Caso #06', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6405');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    /*
        Nombre: QA07
        Objetivo: Validar que todo esté lleno correctamente y cambia el select de Club (Tres Rios).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6406 - Tres Rios
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Todo está llenado correctamente con el club Tres Rios.
    */
    it('Caso #07', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6406');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    /*
        Nombre: QA08
        Objetivo: Validar que todo esté lleno correctamente y cambia el select de Club (Liberia).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6408 - Liberia
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Todo está llenado correctamente con el club Liberia.
    */
    it('Caso #08', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6408');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');

        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    //----------------------------------------------------------- Campos vacios Todos los club Santa Ana campos completados correctamete -----------------------------------------------------------------------------

    /*
        Nombre: QA09
        Objetivo: Valida que todo esté lleno correctamente excepto el Nombre y con el select de Club (Santa Ana).
        Datos:
            Apellido: String
            Club: 6407 - Santa Ana
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El nombre es requerido'
    */
    it('Caso #09', function () {
        //cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6407');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=firstName-error]').should('exist');
    });

    /*
        Nombre: QA10
        Objetivo: Valida que todo esté lleno correctamente excepto el Apellido y con el select de Club (Santa Ana).
        Datos:
            Nombre: String
            Club: 6407 - Santa Ana
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El apellido es requerido'
    */
    it('Caso #10', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        //cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6407');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=lastName-error]').should('exist');
    });

    /*
        Nombre: QA11
        Objetivo: Valida que todo esté lleno correctamente excepto el correo electrónico y con el select de Club (Santa Ana).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6407 - Santa Ana
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El correo electrónico es requerido'
    */
    it('Caso #11', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6407');
        //cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=email-error]').should('exist');
    });

    /*
        Nombre: QA12
        Objetivo: Valida que todo esté lleno correctamente excepto el confirmar correo electrónico y con el select de Club (Santa Ana).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6407 - Santa Ana
            Correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'Por favor confirma tu correo electrónico'
    */
    it('Caso #12', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6407');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        //cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=emailConfirm-error]').should('exist');
    });

    /*
        Nombre: QA13
        Objetivo: Valida que todo esté lleno correctamente excepto la contraseña y con el select de Club (Santa Ana).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6407 - Santa Ana
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #13', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6407');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        //cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=txtpassword-error]').should('exist');
    });

    /*
        Nombre: QA14
        Objetivo: Valida que todo esté lleno correctamente excepto el confirmar contraseña y con el select de Club (Santa Ana).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6407 - Santa Ana
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #14', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6407');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        //cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=passwordConfirm-error]').should('exist');
    });

    /*
        Nombre: QA15
        Objetivo: Valida que todo esté lleno correctamente excepto la cédula/documento de identificación y con el select de Club (Santa Ana).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6407 - Santa Ana
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'La cédula es requerida'
    */
    it('Caso #15', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6407');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        //cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=identification-error]').should('exist');
    });

    /*
        Nombre: QA16
        Objetivo: Valida que todo esté lleno correctamente excepto la número de teléfono y con el select de Club (Santa Ana).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6407 - Santa Ana
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El teléfono es requerido'
    */
    it('Caso #16', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6407');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        //cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=phone-error]').should('exist');
    });

    //----------------------------------------------------------- Campos vacios Todos los club Zapote campos completados correctamete -----------------------------------------------------------------------------

    /*
        Nombre: QA17
        Objetivo: Valida que todo esté lleno correctamente excepto el Nombre y con el select de Club (Zapote).
        Datos:
            Apellido: String
            Club: 6401 - Zapote
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El nombre es requerido'
    */
    it('Caso #17', function () {
        //cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6401');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=firstName-error]').should('exist');
    });

    /*
        Nombre: QA18
        Objetivo: Valida que todo esté lleno correctamente excepto el Apellido y con el select de Club (Zapote).
        Datos:
            Nombre: String
            Club: 6401 - Zapote
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El apellido es requerido'
    */
    it('Caso #18', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        //cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6401');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=lastName-error]').should('exist');
    });

    /*
        Nombre: QA19
        Objetivo: Valida que todo esté lleno correctamente excepto el correo electrónico y con el select de Club (Zapote).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6401 - Zapote
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El correo electrónico es requerido'
    */
    it('Caso #19', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6401');
        //cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=email-error]').should('exist');
    });

    /*
        Nombre: QA20
        Objetivo: Valida que todo esté lleno correctamente excepto el confirmar contraseña y con el select de Club (Zapote).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6401 - Zapote
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #20', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6401');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        //cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=emailConfirm-error]').should('exist');
    });

    /*
        Nombre: QA21
        Objetivo: Valida que todo esté lleno correctamente excepto la contraseña y con el select de Club (Zapote).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6401 - Zapote
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #21', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6401');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        //cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=txtpassword-error]').should('exist');
    });

    /*
        Nombre: QA22
        Objetivo: Valida que todo esté lleno correctamente excepto el confirmar contraseña y con el select de Club (Zapote).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6401 - Zapote
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #22', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6401');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        //cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=passwordConfirm-error]').should('exist');
    });

    /*
        Nombre: QA23
        Objetivo: Valida que todo esté lleno correctamente excepto la cédula/documento de identificación y con el select de Club (Zapote).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6401 - Zapote
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'La cédula es requerida'
    */
    it('Caso #23', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6401');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        //cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=identification-error]').should('exist');
    });

    /*
        Nombre: QA24
        Objetivo: Valida que todo esté lleno correctamente excepto la número de teléfono y con el select de Club (Zapote).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6401 - Zapote
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El teléfono es requerido'
    */
    it('Caso #24', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6401');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        //cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=phone-error]').should('exist');
    });

    //----------------------------------------------------------- Campos vacios Todos los club Escazu campos completados correctamete -----------------------------------------------------------------------------

    /*
        Nombre: QA25
        Objetivo: Valida que todo esté lleno correctamente excepto el Nombre y con el select de Club (Escazu).
        Datos:
            Apellido: String
            Club: 6402 - Escazu
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El nombre es requerido'
    */
    it('Caso #25', function () {
        //cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6402');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=firstName-error]').should('exist');
    });

    /*
        Nombre: QA26
        Objetivo: Valida que todo esté lleno correctamente excepto el Apellido y con el select de Club (Escazu).
        Datos:
            Nombre: String
            Club: 6402 - Escazu
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El apellido es requerido'
    */
    it('Caso #26', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        //cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6402');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=lastName-error]').should('exist');
    });

    /*
        Nombre: QA27
        Objetivo: Valida que todo esté lleno correctamente excepto el correo electrónico y con el select de Club (Escazu).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6402 - Escazu
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El correo electrónico es requerido'
    */
    it('Caso #27', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6402');
        //cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=email-error]').should('exist');
    });

    /*
        Nombre: QA28
        Objetivo: Valida que todo esté lleno correctamente excepto el confirmar correo electrónico y con el select de Club (Escazu).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6402 - Escazu
            Correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'Por favor confirma tu correo electrónico'
    */
    it('Caso #28', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6402');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        //cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=emailConfirm-error]').should('exist');
    });

    /*
        Nombre: QA29
        Objetivo: Valida que todo esté lleno correctamente excepto la contraseña y con el select de Club (Escazu).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6402 - Escazu
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #29', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6402');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        //cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=txtpassword-error]').should('exist');
    });

    /*
        Nombre: QA30
        Objetivo: Valida que todo esté lleno correctamente excepto el confirmar contraseña y con el select de Club (Escazu).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6402 - Escazu
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #30', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6402');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        //cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=passwordConfirm-error]').should('exist');
    });

    /*
        Nombre: QA31
        Objetivo: Valida que todo esté lleno correctamente excepto la cédula/documento de identificación y con el select de Club (Escazu).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6402 - Escazu
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'La cédula es requerida'
    */
    it('Caso #31', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6402');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        //cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=identification-error]').should('exist');
    });

    /*
        Nombre: QA32
        Objetivo: Valida que todo esté lleno correctamente excepto la número de teléfono y con el select de Club (Escazu).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6402 - Escazu
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El teléfono es requerido'
    */
    it('Caso #32', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6402');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        //cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=phone-error]').should('exist');
    });

    //----------------------------------------------------------- Campos vacios Todos los club Heredia campos completados correctamete -----------------------------------------------------------------------------

    /*
        Nombre: QA33
        Objetivo: Valida que todo esté lleno correctamente excepto el Nombre y con el select de Club (Heredia).
        Datos:
            Apellido: String
            Club: 6403 - Heredia
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El nombre es requerido'
    */
    it('Caso #33', function () {
        //cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6403');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=firstName-error]').should('exist');
    });

    /*
        Nombre: QA34
        Objetivo: Valida que todo esté lleno correctamente excepto el Apellido y con el select de Club (Heredia).
        Datos:
            Nombre: String
            Club: 6403 - Heredia
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El apellido es requerido'
    */
    it('Caso #34', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        //cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6403');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=lastName-error]').should('exist');
    });

    /*
        Nombre: QA35
        Objetivo: Valida que todo esté lleno correctamente excepto el correo electrónico y con el select de Club (Heredia).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6403 - Heredia
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El correo electrónico es requerido'
    */
    it('Caso #35', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6403');
        //cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=email-error]').should('exist');
    });

    /*
        Nombre: QA36
        Objetivo: Valida que todo esté lleno correctamente excepto el confirmar correo electrónico y con el select de Club (Heredia).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6403 - Heredia
            Correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'Por favor confirma tu correo electrónico'
    */
    it('Caso #36', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6403');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        //cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=emailConfirm-error]').should('exist');
    });

    /*
        Nombre: QA37
        Objetivo: Valida que todo esté lleno correctamente excepto la contraseña y con el select de Club (Heredia).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6403 - Heredia
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #37', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6403');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        //cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=txtpassword-error]').should('exist');
    });

    /*
        Nombre: QA38
        Objetivo: Valida que todo esté lleno correctamente excepto el confirmar contraseña y con el select de Club (Heredia).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6403 - Heredia
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #38', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6403');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        //cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=passwordConfirm-error]').should('exist');
    });

    /*
        Nombre: QA39
        Objetivo: Valida que todo esté lleno correctamente excepto la cédula/documento de identificación y con el select de Club (Heredia).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6403 - Heredia
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'La cédula es requerida'
    */
    it('Caso #39', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6403');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        //cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=identification-error]').should('exist');
    });

    /*
        Nombre: QA40
        Objetivo: Valida que todo esté lleno correctamente excepto la número de teléfono y con el select de Club (Heredia).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6403 - Heredia
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El teléfono es requerido'
    */
    it('Caso #40', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6403');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        //cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=phone-error]').should('exist');
    });

    //----------------------------------------------------------- Campos vacios Todos los club LLorente campos completados correctamete -----------------------------------------------------------------------------

    /*
        Nombre: QA41
        Objetivo: Valida que todo esté lleno correctamente excepto el Nombre y con el select de Club (Llorente).
        Datos:
            Apellido: String
            Club: 6404 - Llorente
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El nombre es requerido'
    */
    it('Caso #41', function () {
        //cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6404');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=firstName-error]').should('exist');
    });

    /*
        Nombre: QA42
        Objetivo: Valida que todo esté lleno correctamente excepto el Apellido y con el select de Club (Llorente).
        Datos:
            Nombre: String
            Club: 6404 - Llorente
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El apellido es requerido'
    */
    it('Caso #42', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        //cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6404');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=lastName-error]').should('exist');
    });

    /*
        Nombre: QA43
        Objetivo: Valida que todo esté lleno correctamente excepto el correo electrónico y con el select de Club (Llorente).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6404 - Llorente
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El correo electrónico es requerido'
    */
    it('Caso #43', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6404');
        //cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=email-error]').should('exist');
    });

    /*
        Nombre: QA44
        Objetivo: Valida que todo esté lleno correctamente excepto el confirmar correo electrónico y con el select de Club (Llorente).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6404 - Llorente
            Correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'Por favor confirma tu correo electrónico'
    */
    it('Caso #44', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6404');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        //cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=emailConfirm-error]').should('exist');
    });

    /*
        Nombre: QA45
        Objetivo: Valida que todo esté lleno correctamente excepto la contraseña y con el select de Club (Llorente).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6404 - Llorente
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #45', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6404');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        //cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=txtpassword-error]').should('exist');
    });

    /*
        Nombre: QA46
        Objetivo: Valida que todo esté lleno correctamente excepto el confirmar contraseña y con el select de Club (Llorente).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6404 - Llorente
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El campo es requerido'
    */
    it('Caso #46', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6404');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        //cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=passwordConfirm-error]').should('exist');
    });

    /*
        Nombre: QA47
        Objetivo: Valida que todo esté lleno correctamente excepto la cédula/documento de identificación y con el select de Club (Llorente).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6404 - Llorente
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'La cédula es requerida'
    */
    it('Caso #47', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6404');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        //cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=identification-error]').should('exist');
    });

    /*
        Nombre: QA48
        Objetivo: Valida que todo esté lleno correctamente excepto la número de teléfono y con el select de Club (Llorente).
        Datos:
            Nombre: String
            Apellido: String
            Club: 6404 - Llorente
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El teléfono es requerido'
    */
    it('Caso #48', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('select[id=club]').select('6404');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        //cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=phone-error]').should('exist');
    });

    //----------------------------------------------------------- Casos se aceptan numeros en los campos de nombre y apellido y no debería -----------------------------------------------------------------------------

    /*
        Nombre: QA49
        Objetivo: Detectar números en el campo nombre.
        Datos:
            Nombre: Numérico
            Apellido: String
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se aceptan números en el campo de nombre.
    */
    it('Caso #49', function () {
        cy.get('input[id=firstName]').type('123'); // No debería de aceptar números.
        cy.get('[id=lastName]').type('Morales');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    /*
        Nombre: QA50
        Objetivo: Detectar números en el campo apellido.
        Datos:
            Nombre: String
            Apellido: Numérico
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se aceptan números en el campo de apellido.
    */
    it('Caso #50', function () {
        cy.get('input[id=firstName]').type('Alejandro');
        cy.get('[id=lastName]').type('456'); // No debería de aceptar números
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    //----------------------------------------------------------- Caso no se valida que el correo y factura correo sean reales -----------------------------------------------------------------------------------

    /*
        Nombre: QA51
        Objetivo: Detectar formato incorrecto en los campos correo electrónico y confirmar correo electrónico.
        Datos:
            Nombre: String
            Apellido: String
            Correo electrónico: String
            Confirmar correo electrónico: String
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se aceptan formatos incorrectos en los campos correo electrónico y confirmar correo electrónico.
    */
    it('Caso #51', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('[id=email]').type('u@a'); // No se debe aceptar, formato incorrecto.
        cy.get('[id=emailConfirm]').type('u@a'); // No se debe aceptar, formato incorrecto.
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    /*
        Nombre: QA52
        Objetivo: Detectar formato incorrecto en el campo correo factura electrónica.
        Datos:
            Nombre: String
            Apellido: String
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String
        Resultado: Se aceptan formatos incorrectos en el campo correo factura electrónica.
    */
    it('Caso #52', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asd123.');
        cy.get('[id=passwordConfirm]').type('asd123.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type('u@a'); // No se debe aceptar, formato incorrecto.
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('input[id=creditCard]').should('exist');
    });

    //----------------------------------------------------------- Caso de prueba el largo minimo de la contraseña es de 6 -----------------------------------------------------------------------------------

    /*
        Nombre: QA53
        Objetivo: Detectar largo mínimo de contraseña.
        Datos:
            Nombre: String
            Apellido: String
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String, menor a 6 caracteres
            Confirmar contraseña: String, menor a 6 caracteres
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'La contraseña debe contener al menos 6 caracteres'.
    */
    it('Caso #53', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('as.');
        cy.get('[id=passwordConfirm]').type('as.');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=txtpassword-error]').should(
            'have.text',
            'La contraseña debe contener al menos 6 caracteres'
        );
    });

    //----------------------------------------------------------- Caso de prueba la contraseña contenga al menos un numero y una letra -----------------------------------------------------------------------------------

    /*
        Nombre: QA54
        Objetivo: Detectar al menos un número y una letra en la contraseña.
        Datos:
            Nombre: String
            Apellido: String
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String, sin incluir números
            Confirmar contraseña: String, sin incluir números
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'La contraseña requiere al menos un número y una letra'.
    */
    it('Caso #54', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asaaaaa');
        cy.get('[id=passwordConfirm]').type('asaaaaa');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        ); // este correo no deberia de ser aceptado debido a que no tiene una estructura valida
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=txtpassword-error]').should(
            'have.text',
            'La contraseña requiere al menos un número y una letra'
        );
    });

    //----------------------------------------------------------- Caso de prueba las contraseñas coincidan -----------------------------------------------------------------------------------

    /*
        Nombre: QA53
        Objetivo: Detectar que los campos contraseña y confirmar contraseña sean iguales.
        Datos:
            Nombre: String
            Apellido: String
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'Las contraseñas deben coincidir'.
    */
    it('Caso #55', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=txtpassword]').type('asaaaaa123');
        cy.get('[id=passwordConfirm]').type('asaaaaa1');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=passwordConfirm-error]').should(
            'have.text',
            'Las contraseñas deben coincidir'
        );
    });

    //----------------------------------------------------------- Caso de prueba confirmar el correo electronico -----------------------------------------------------------------------------------

    /*
        Nombre: QA56
        Objetivo: Detectar que los campos correo electrónico y confirmar correo electrónico sean iguales.
        Datos:
            Nombre: String
            Apellido: String
            Correo electrónico: String, formato xxx@xxx.xxx
            Confirmar correo electrónico: String, formato xxx@xxx.xxx
            Contraseña: String
            Confirmar contraseña: String
            Cédula/Documento de identificación: Numérico, no mayor a 20 digitos
            Número de teléfono: Numérico, no mayor a 20 digitos
            Correo factura electrónica: String, formato xxx@xxx.xxx
        Resultado: Se detecta correctamente el error 'El correo electrónico es requerido'.
    */
    it('Caso #56', function () {
        cy.get('input[id=firstName]').type('Jean Carlos');
        cy.get('[id=lastName]').type('Urbina Silva');
        cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
        cy.get('[id=emailConfirm]').type('a@a.com');
        cy.get('[id=txtpassword]').type('asaaaaa2');
        cy.get('[id=passwordConfirm]').type('asaaaaa2');
        cy.get('[id=identification]').type('208038091');
        cy.get('[id=phone]').type('85793037');
        cy.get('[id=emailElectronicInvoice]').type(
            'urbinasilvajeancarlos@gmail.com'
        );
        cy.get('#terms').check({ force: true });
        cy.get('#shareInfo').check({ force: true });
        cy.get('[id=sendInfoNotAero]').click();
        cy.get('label[id=emailConfirm-error]').should(
            'have.text',
            'El correo electrónico es requerido'
        );
    });
});
//----------------------------------------------------------- Casos de prueba en Email preferences form -----------------------------------------------------------------------------------

/*
Requisitos para estas pruebas
    Utilizar un navegador Chrome
    Desactivar la seguridad de Chrome en cypress.config.ts: chromeWebSecurity: false
        Esto es necesario para detectar correctamente el iframe que encapsula todo el formulario
    Instalar cypress-iframe.
        npm install -D cypress-iframe
*/

import 'cypress-iframe' //npm install -D cypress-iframe

describe('PriceSmart Investors, Email preferences form', function () {
    beforeEach(function () {
        cy.visit('http://investors.pricesmart.com/investor-resources/email-alerts/');
    });

    afterEach(function () {
        cy.reload();
    });

    /*
       Nombre: QA057
       Objetivo: Detectar que el usuario haya ingresado un correo inválido.
       Datos:
        Email address: String
       Resultado: Mensaje 'Please enter a valid email address.' detectado.
     */
    it('Caso #57', function () {
        cy.get("#inv-alerts-tool").iframe().find("#personalInfoBlock_txtEmail").type("bryan");
        cy.wait(2000);
        cy.get("#inv-alerts-tool").iframe().find("#personalInfoBlock_pnlEmail").click();
        cy.get("#inv-alerts-tool").iframe().find("#registraionBlock_btnSubmit").click().then(function () {
            cy.get("#inv-alerts-tool").iframe().find("span[class='input_info--error']").should('have.text', 'Please enter a valid email address.').should('be.visible')
        });
    });

    /*
       Nombre: QA058
       Objetivo: Detectar que el usuario no haya seleccionado al menos una preferencia.
       Datos:
        Email address: String, con formato xxx@xxx.xxx
        CheckBox suscribir a alteras: True
       Resultado: Mensaje 'Please select at least one alert preference.' detectado.
     */
    it('Caso #58', function () {
        cy.get("#inv-alerts-tool").iframe().find("#personalInfoBlock_txtEmail").type("bryan@gmail.com");
        cy.get("#inv-alerts-tool").iframe().find("#preferenceBlock_rbAlerts").click();
        cy.wait(2000);
        cy.get("#inv-alerts-tool").iframe().find("#personalInfoBlock_pnlEmail").click();
        cy.get("#inv-alerts-tool").iframe().find("#registraionBlock_btnSubmit").click().then(function () {
            cy.get("#inv-alerts-tool").iframe().find("#spnErrorMessage").should('have.text', 'Please select at least one alert preference.').should('be.visible')
        });
    });

    /*
       Nombre: QA059
       Objetivo: Detectar que el usuario no haya completado el captcha.
       Datos:
        Email address: STRING, con formato xxx@xxx.xxx
        CheckBox suscribir a alteras: True
        CheckBox custom news, all: True
       Resultado: Mensaje 'Please check the box to let us know you\'re human (sorry, no robots & spams allowed).' detectado. || Test passed.
     */
    it('Caso #59', function () {
        cy.get("#inv-alerts-tool").iframe().find("#personalInfoBlock_txtEmail").type("bryan@gmail.com");
        cy.get("#inv-alerts-tool").iframe().find("#preferenceBlock_rbAlerts").click();
        cy.get('#inv-alerts-tool').iframe().find("label[for='preferenceBlock_rptAlertTypes_ctl00_cbAllCategories']").click();
        cy.wait(2000);
        cy.get("#inv-alerts-tool").iframe().find("#personalInfoBlock_pnlEmail").click();
        cy.get("#inv-alerts-tool").iframe().find("#registraionBlock_btnSubmit").click().then(function () {
            cy.get("#inv-alerts-tool").iframe().find("span[aria-label='-- cas_captcha_req_validation_message isempty --']").should('have.text', 'Please check the box to let us know you\'re human (sorry, no robots & spams allowed).').should('be.visible')
        });
    });

    /*
       Nota:
        Esta prueba requiere obligatoriamente de hacer de la interfaz de Cypress (ng e2e) y de intervención humana.
            Esta prueba requiere de haber completado el Captcha correctamente, 
            al no tener acceso al código fuente no es posible completar el captcha dentro de la prueba automatizada utilizando keys.
        Se añade un cy.wait(10000) para darle tiempo al programador que complete el captcha antes de que la prueba continue.
 
       Nombre: QA060
       Objetivo: Detectar que el usuario no haya seleccionado la opción 'Acepto los términos y condiciones'.
       Datos:
        Email address: STRING, con formato xxx@xxx.xxx
        CheckBox suscribir a alteras: TRUE
        CheckBox Custom news, All: TRUE
        Captcha: TRUE
       Resultado: Mensaje 'Please provide your consent.' detectado. || Test passed.
 
       Dado que la prueba necesita intervención humanada, no fue posible automatizarla.
       Se comenta para evitar errores.
     *//*
    it('De su consentimiento sobre los términos y condiciones', function () {
        cy.get("#inv-alerts-tool").iframe().find("#personalInfoBlock_txtEmail").type("bryan@gmail.com");
        cy.get("#inv-alerts-tool").iframe().find("#preferenceBlock_rbAlerts").click();
        cy.get('#inv-alerts-tool').iframe().find("label[for='preferenceBlock_rptAlertTypes_ctl00_cbAllCategories']").click();
        cy.wait(2000);
        cy.get("#inv-alerts-tool").iframe().find("#personalInfoBlock_pnlEmail").click();
        cy.wait(10000); //Se esperan 10 segundos para que el programador complete el captcha
        cy.get("#inv-alerts-tool").iframe().find("#registraionBlock_btnSubmit").click().then(function(){
            cy.get("#inv-alerts-tool").iframe().find("span[aria-label='Please provide your consent.']").should('have.text','Please provide your consent.').should('be.visible')
        });
    });
    */
});