describe('login', () => {

 beforeEach(() => {

    cy.visit('/')
    
  })

  it(`succes_login`,()=>{
    
    cy.get('#user-name').clear({ force: true}).type('standard_user', { force: true })
    cy.get('#password').clear({ force: true}).type('secret_sauce', { force: true })
    cy.get('#login-button').click({ force: true })
    cy.screenshot()
    cy.url({ timeout: 30000 }).should('include', '/inventory.html')

  })

  it(`fail_login with locked_out_user`,()=>{
    
    cy.get('#user-name').clear({ force: true}).type('locked_out_user', { force: true })
    cy.get('#password').clear({ force: true}).type('secret_sauce', { force: true })
    cy.get('#login-button').click()
    cy.screenshot()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

  })

  it(`succes_login with problem_user`,()=>{
    
    cy.get('#user-name').clear({ force: true}).type('problem_user', { force: true })
    cy.get('#password').clear({ force: true}).type('secret_sauce', { force: true })
    cy.get('#login-button').click({ force: true })
    cy.screenshot()
    cy.url({ timeout: 30000 }).should('include', '/inventory.html')

  })

  it(`succes_login with performance_glitch_user`,()=>{
    
    cy.get('#user-name').clear({ force: true}).type('performance_glitch_user', { force: true })
    cy.get('#password').clear({ force: true}).type('secret_sauce', { force: true })
    cy.get('#login-button').click()
    cy.screenshot()
    cy.url({ timeout: 30000 }).should('include', '/inventory.html')
    
  })

  it(`fail_login with wrong user name`,()=>{
    
    cy.get('#user-name').clear({ force: true}).type('test123', { force: true })
    cy.get('#password').clear({ force: true}).type('secret_sauce', { force: true })
    cy.get('#login-button').click()
    cy.screenshot()
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    
  })  
})