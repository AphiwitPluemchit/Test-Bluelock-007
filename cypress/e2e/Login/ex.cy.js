describe('login', () => {
  it('passes', () => {
    // บังคับเป็น desktop (กันสลับไป mobile)


    cy.visit('/')

    // Email
    cy.get('[data-testid="mobile-login-email"]')
      .filter(':visible')        // กันเลือกตัวที่ถูกซ่อน
      .scrollIntoView()
      .click()
      .type('65160205@go.buu.ac.th')

    // Password
    cy.get('[data-testid="mobile-login-password"]')
      .filter(':visible')
      .scrollIntoView()
      .click({ force: true }) 
      .type('123456')

    cy.get('[data-testid="mobile-login-submit"]')
      .filter(':visible')
      .click()
  })
})
