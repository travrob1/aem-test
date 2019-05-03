describe('Testing The return values', function() {
  it('Should return many different results', function() {
    cy.visit('localhost:3000');

    cy.get('.search').clear().type('5');
    cy.get('p#roman-numeral').contains('V');


    cy.get('.search').clear().type('10');
    cy.get('p#roman-numeral').contains('X');

    cy.get('.search').clear().type('40');
    cy.get('p#roman-numeral').contains('XL');

    cy.get('.search').clear().type('1240');
    cy.get('p#roman-numeral').contains('MCCXL');
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
