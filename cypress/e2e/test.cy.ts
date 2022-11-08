import 'cypress-iframe';
require('cypress-xpath');

/*
    REQISITOS PARA EL CORRECTO FUNCIONAMIENTO DE LAS PRUEBAS
    - Utilizar un navegador Chrome
    - Desactivar la seguridad de Chrome en cypress.config.ts para detectar correctamente el iframe
        chromeWebSecurity: false

    - Instalar en la terminal el cypress-iframe.
        npm install -D cypress-iframe

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

  it('Caso #01, Valida que todo esté lleno correctamente y cambia el select de Club (Santa Ana).', function () {
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

  it('Caso #02, Valida que todo esté lleno correctamente y cambia el select de Club (Zapote).', function () {
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

  it('Caso #03, Valida que todo esté lleno correctamente y cambia el select de Club (Escazu).', function () {
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

  it('Caso #04, Valida que todo esté lleno correctamente y cambia el select de Club (Heredia).', function () {
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

  it('Caso #05, Valida que todo esté lleno correctamente y cambia el select de Club (Llorente).', function () {
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

  it('Caso #06, Valida que todo esté lleno correctamente y cambia el select de Club (Alajuela).', function () {
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

  it('Caso #07, Valida que todo esté lleno correctamente y cambia el select de Club (Tres Rios).', function () {
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

  it('Caso #08, Valida que todo esté lleno correctamente y cambia el select de Club (Liberia).', function () {
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

  it('Caso #09, Valida que todo esté lleno correctamente exepto el Nombre y con el select de Club (Santa Ana).', function () {
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

  it('Caso #10, Valida que todo esté lleno correctamente exepto el Apellido y con el select de Club (Santa Ana).', function () {
    cy.get('input[id=firstName]').type('Jean Carlos');
    //cy.get('[id=lastName]').type('Urbina Silva');
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
    cy.get('label[id=lastName-error]').should('exist');
  });

  it('Caso #11, Valida que todo esté lleno correctamente exepto el correo y con el select de Club (Santa Ana).', function () {
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

  it('Caso #12, Valida que todo esté lleno correctamente exepto el confirmar correo y con el select de Club (Santa Ana).', function () {
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

  it('Caso #13, Valida que todo esté lleno correctamente exepto la contraseña y con el select de Club (Santa Ana).', function () {
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

  it('Caso #14, Valida que todo esté lleno correctamente exepto confirmar contraseña y con el select de Club (Santa Ana).', function () {
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

  it('Caso #15, Valida que todo esté lleno correctamente exepto identificacion y con el select de Club (Santa Ana).', function () {
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

  it('Caso #16, Valida que todo esté lleno correctamente exepto numero de telefono y con el select de Club (Santa Ana).', function () {
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

  it('Caso #17, Valida que todo esté lleno correctamente exepto el Nombre y con el select de Club (Zapote).', function () {
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

  it('Caso #18, Valida que todo esté lleno correctamente exepto el Apellido y con el select de Club (Zapote).', function () {
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

  it('Caso #19, Valida que todo esté lleno correctamente exepto el correo y con el select de Club (Zapote).', function () {
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

  it('Caso #20, Valida que todo esté lleno correctamente exepto el confirmar correo y con el select de Club (Zapote).', function () {
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

  it('Caso #21, Valida que todo esté lleno correctamente exepto la contraseña y con el select de Club (Zapote).', function () {
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

  it('Caso #22, Valida que todo esté lleno correctamente exepto confirmar contraseña y con el select de Club (Zapote).', function () {
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

  it('Caso #23, Valida que todo esté lleno correctamente exepto identificacion y con el select de Club (Zapote).', function () {
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

  it('Caso #24, Valida que todo esté lleno correctamente exepto numero de telefono y con el select de Club (Zapote).', function () {
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

  it('Caso #25, Valida que todo esté lleno correctamente exepto el Nombre y con el select de Club (Escazu).', function () {
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

  it('Caso #26, Valida que todo esté lleno correctamente exepto el Apellido y con el select de Club (Escazu).', function () {
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

  it('Caso #27, Valida que todo esté lleno correctamente exepto el correo y con el select de Club (Escazu).', function () {
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

  it('Caso #28, Valida que todo esté lleno correctamente exepto el confirmar correo y con el select de Club (Escazu).', function () {
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

  it('Caso #29, Valida que todo esté lleno correctamente exepto la contraseña y con el select de Club (Escazu).', function () {
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

  it('Caso #30, Valida que todo esté lleno correctamente exepto confirmar contraseña y con el select de Club (Escazu).', function () {
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

  it('Caso #31, Valida que todo esté lleno correctamente exepto identificacion y con el select de Club (Escazu).', function () {
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

  it('Caso #32, Valida que todo esté lleno correctamente exepto numero de telefono y con el select de Club (Escazu).', function () {
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

  it('Caso #33, Valida que todo esté lleno correctamente exepto el Nombre y con el select de Club (Heredia).', function () {
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

  it('Caso #34, Valida que todo esté lleno correctamente exepto el Apellido y con el select de Club (Heredia).', function () {
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

  it('Caso #35, Valida que todo esté lleno correctamente exepto el correo y con el select de Club (Heredia).', function () {
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

  it('Caso #36, Valida que todo esté lleno correctamente exepto el confirmar correo y con el select de Club (Heredia).', function () {
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

  it('Caso #37, Valida que todo esté lleno correctamente exepto la contraseña y con el select de Club (Heredia).', function () {
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

  it('Caso #38, Valida que todo esté lleno correctamente exepto confirmar contraseña y con el select de Club (Heredia).', function () {
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

  it('Caso #39, Valida que todo esté lleno correctamente exepto identificacion y con el select de Club (Heredia).', function () {
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

  it('Caso #40, Valida que todo esté lleno correctamente exepto numero de telefono y con el select de Club (Heredia).', function () {
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

  it('Caso #41, Valida que todo esté lleno correctamente exepto el Nombre y con el select de Club (LLorente).', function () {
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

  it('Caso #42, Valida que todo esté lleno correctamente exepto el Apellido y con el select de Club (LLorente).', function () {
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

  it('Caso #43, Valida que todo esté lleno correctamente exepto el correo y con el select de Club (LLorente).', function () {
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

  it('Caso #44, Valida que todo esté lleno correctamente exepto el confirmar correo y con el select de Club (LLorente).', function () {
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

  it('Caso #45, Valida que todo esté lleno correctamente exepto la contraseña y con el select de Club (LLorente).', function () {
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

  it('Caso #46, Valida que todo esté lleno correctamente exepto confirmar contraseña y con el select de Club (LLorente).', function () {
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

  it('Caso #47, Valida que todo esté lleno correctamente exepto identificacion y con el select de Club (LLorente).', function () {
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

  it('Caso #48, Valida que todo esté lleno correctamente exepto numero de telefono y con el select de Club (LLorente).', function () {
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

  it('Caso #49, Valida que se aceptan numeros en el campo de nombre.', function () {
    cy.get('input[id=firstName]').type('123'); // no deberia de aceptarse numeros
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

  it('Caso #50, Valida que se aceptan numeros en el campos de apellido.', function () {
    cy.get('input[id=firstName]').type('Alejandro');
    cy.get('[id=lastName]').type('456'); // no deberia de aceptarse numeros
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

  it('Caso #51, No se valida que el correo electronico sea real.', function () {
    cy.get('input[id=firstName]').type('Jean Carlos');
    cy.get('[id=lastName]').type('Urbina Silva');
    cy.get('[id=email]').type('u@a.c'); // este correo no deberia de ser aceptado debido a que no tiene una estructura valida
    cy.get('[id=emailConfirm]').type('u@a.c');
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

  it('Caso #52, No se valida que el correo factura electronica sea real.', function () {
    cy.get('input[id=firstName]').type('Jean Carlos');
    cy.get('[id=lastName]').type('Urbina Silva');
    cy.get('[id=email]').type('urbinasilvajeancarlos@gmail.com');
    cy.get('[id=emailConfirm]').type('urbinasilvajeancarlos@gmail.com');
    cy.get('[id=txtpassword]').type('asd123.');
    cy.get('[id=passwordConfirm]').type('asd123.');
    cy.get('[id=identification]').type('208038091');
    cy.get('[id=phone]').type('85793037');
    cy.get('[id=emailElectronicInvoice]').type('u@a.c'); // este correo no deberia de ser aceptado debido a que no tiene una estructura valida
    cy.get('#terms').check({ force: true });
    cy.get('#shareInfo').check({ force: true });
    cy.get('[id=sendInfoNotAero]').click();
    cy.get('input[id=creditCard]').should('exist');
  });

  //----------------------------------------------------------- Caso de prueba el largo minimo de la contraseña es de 6 -----------------------------------------------------------------------------------

  it('Caso #53, Valida que el largo minimo de la contraseña es de 6.', function () {
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
    ); // este correo no deberia de ser aceptado debido a que no tiene una estructura valida
    cy.get('#terms').check({ force: true });
    cy.get('#shareInfo').check({ force: true });
    cy.get('[id=sendInfoNotAero]').click();
    cy.get('label[id=txtpassword-error]').should(
      'have.text',
      'La contraseña debe contener al menos 6 caracteres'
    );
  });

  //----------------------------------------------------------- Caso de prueba la contraseña contenga al menos un numero y una letra -----------------------------------------------------------------------------------

  it('Caso #54, Valida que la contraseña contenga al menos un numero y una letra.', function () {
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

  it('Caso #55, Valida que las contraseñas coincidan.', function () {
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

  //----------------------------------------------------------- Caso de prueba confirmar el correo electronico -----------------------------------------------------------------------------------

  it('Caso #56, Valida que se confirme el correo electronico.', function () {
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
    ); // este correo no deberia de ser aceptado debido a que no tiene una estructura valida
    cy.get('#terms').check({ force: true });
    cy.get('#shareInfo').check({ force: true });
    cy.get('[id=sendInfoNotAero]').click();
    cy.get('label[id=emailConfirm-error]').should(
      'have.text',
      'El correo electrónico es requerido'
    );
  });

  //----------------------------------------------------------- Casos de prueba en Email preferences form -----------------------------------------------------------------------------------

  it('Caso #57, Validar que se detecte el correo invalido.', function () {
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#personalInfoBlock_txtEmail')
      .type('bryan');
    cy.wait(2000);
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#personalInfoBlock_pnlEmail')
      .click();
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#registraionBlock_btnSubmit')
      .click()
      .then(function () {
        cy.get('#inv-alerts-tool')
          .iframe()
          .find("span[class='input_info--error']")
          .should('have.text', 'Please enter a valid email address.')
          .should('be.visible');
      });
  });

  it('Caso #58, Detectar que el usuario haya seleccionado al menos una preferencia.', function () {
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#personalInfoBlock_txtEmail')
      .type('bryan@gmail.com');
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#preferenceBlock_rbAlerts')
      .click();
    cy.wait(2000);
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#personalInfoBlock_pnlEmail')
      .click();
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#registraionBlock_btnSubmit')
      .click()
      .then(function () {
        cy.get('#inv-alerts-tool')
          .iframe()
          .find('#spnErrorMessage')
          .should('have.text', 'Please select at least one alert preference.')
          .should('be.visible');
      });
  });

  it('Caso #59, Detectar que el usuario no haya completado el captcha.', function () {
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#personalInfoBlock_txtEmail')
      .type('bryan@gmail.com');
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#preferenceBlock_rbAlerts')
      .click();
    cy.get('#inv-alerts-tool')
      .iframe()
      .find("label[for='preferenceBlock_rptAlertTypes_ctl00_cbAllCategories']")
      .click();
    cy.wait(2000);
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#personalInfoBlock_pnlEmail')
      .click();
    cy.get('#inv-alerts-tool')
      .iframe()
      .find('#registraionBlock_btnSubmit')
      .click()
      .then(function () {
        cy.get('#inv-alerts-tool')
          .iframe()
          .find(
            "span[aria-label='-- cas_captcha_req_validation_message isempty --']"
          )
          .should(
            'have.text',
            "Please check the box to let us know you're human (sorry, no robots & spams allowed)."
          )
          .should('be.visible');
      });
  });

  /*
    Nota:
    Esta prueba requiere obligatoriamente de hacer de la interfaz de Cypress (ng e2e) y de intervención humana.
        Esta prueba requiere de haber completado el Captcha correctamente, 
        al no tener acceso al código fuente no es posible completar el captcha dentro de la prueba automatizada utilizando keys.
    Se añade un cy.wait(10000) para darle tiempo al programador que complete el captcha antes de que la prueba continue.

    Dado que la prueba necesita intervención humanada, no fue posible automatizarla.
    Se comenta para evitar errores.
    */
  //   it('Caso #60, Detectar que el usuario no haya seleccionado la opción "Acepto los términos y condiciones".', function () {
  //     cy.get('#inv-alerts-tool')
  //       .iframe()
  //       .find('#personalInfoBlock_txtEmail')
  //       .type('bryan@gmail.com');
  //     cy.get('#inv-alerts-tool')
  //       .iframe()
  //       .find('#preferenceBlock_rbAlerts')
  //       .click();
  //     cy.get('#inv-alerts-tool')
  //       .iframe()
  //       .find("label[for='preferenceBlock_rptAlertTypes_ctl00_cbAllCategories']")
  //       .click();
  //     cy.wait(2000);
  //     cy.get('#inv-alerts-tool')
  //       .iframe()
  //       .find('#personalInfoBlock_pnlEmail')
  //       .click();
  //     cy.wait(10000); //Se esperan 10 segundos para que el programador complete el captcha
  //     cy.get('#inv-alerts-tool')
  //       .iframe()
  //       .find('#registraionBlock_btnSubmit')
  //       .click()
  //       .then(function () {
  //         cy.get('#inv-alerts-tool')
  //           .iframe()
  //           .find("span[aria-label='Please provide your consent.']")
  //           .should('have.text', 'Please provide your consent.')
  //           .should('be.visible');
  //       });
  //   });
});
