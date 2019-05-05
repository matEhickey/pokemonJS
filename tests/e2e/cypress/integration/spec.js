it('loads page', () => {
  cy.visit('/index.html')
  cy.contains('My Pocket Monster Fan Art')
})

it('loads framed', () => {
  cy.visit('/index.html?framed')
})
