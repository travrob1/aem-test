describe('Roman Numeral Conversions', () => {
  beforeEach(function() {
    cy.visit('localhost:3000');
  });

  it('Testing some valid return values between 1 and 3,999', function() {
    cy.get('.search').clear().type('5');
    cy.get('p#roman-numeral').contains('V');


    cy.get('.search').clear().type('10');
    cy.get('p#roman-numeral').contains('X');

    cy.get('.search').clear().type('40');
    cy.get('p#roman-numeral').contains('XL');

    cy.get('.search').clear().type('2000');
    cy.get('p#roman-numeral').contains('MM');

    cy.get('.search').clear().type('1240');
    cy.get('p#roman-numeral').contains('MCCXL');

    cy.get('.search').clear().type('3999');
    cy.get('p#roman-numeral').contains('MMMCMXCIX');
  });

  it('Testing some invalid inputs, letters, symbos, large numbers etc...', () => {
    cy.get('.search').clear().type('0');
    cy.get('p#roman-numeral').should('not.exist');
    cy.get('.validation-message').should('exist');
    cy.get('.validation-message').contains('enter a valid');

    cy.get('.search').clear().type('5000');
    cy.get('p#roman-numeral').should('not.exist');
    cy.get('.validation-message').should('exist');
    cy.get('.validation-message').contains('enter a valid');

    cy.get('.search').clear().type('hello');
    cy.get('p#roman-numeral').should('not.exist');
    cy.get('.validation-message').should('exist');
    cy.get('.validation-message').contains('enter a valid');
  });
});

describe('Testing the Locilization Switching', () =>{
  it('should change the languages to italian', () => {
    cy.visit('localhost:3000');

    cy.get('#locales').select('it');
    cy.get('.application-title').contains('CONVERTITORE NUMERICO ROMANO ULTIMATO')

  });

  it('should change the languages to spanish', () => {
    cy.visit('localhost:3000');
    cy.get('#locales').select('es');
    cy.get('.application-title').contains('ULTIMO CONVERTIDOR DE NUMBEROS ROMANOS')

  });
})
