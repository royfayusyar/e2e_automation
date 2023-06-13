describe('cart', () => {

 beforeEach(() => {

    cy.visit('/')
    cy.get('#user-name').clear({ force: true}).type('standard_user', { force: true })
    cy.get('#password').clear({ force: true}).type('secret_sauce', { force: true })
    cy.get('#login-button').click({ force: true })
    cy.url({ timeout: 30000 }).should('include', '/inventory.html')
  })

 it(`checkout`,()=>{
    
    cy.get('#header_container > div.header_secondary_container > div > span > select')
      .select('Price (high to low)')
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').click( {force:true} )
    cy.get('#item_5_title_link > .inventory_item_name').click( {force:true} )
    cy.screenshot()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.enabled').click ( {force:true} )

    cy.get('.shopping_cart_link').click({ force: true })
    cy.get('[data-test="checkout"]').click ({ force:true })
    cy.screenshot()
    cy.get('[data-test="continue"]').should('be.enabled')

    cy.get('#first-name').clear({ force: true}).type('Roy').should('have.value', 'Roy')
    cy.get('#last-name').clear({ force: true}).type('SDET').should('have.value', 'SDET')
    cy.get('#postal-code').clear({ force: true}).type('17926').should('have.value', '17926')
    cy.screenshot()

    cy.get('[data-test="continue"]').click({ force: true })
    cy.get('.summary_subtotal_label').should('have.text', 'Item total: $49.99')
    cy.get('.summary_tax_label').should('have.text', 'Tax: $4.00')
    cy.get('.summary_total_label').should('have.text', 'Total: $53.99')
    cy.screenshot()

    cy.get('#finish').click({ force: true })
    cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    cy.screenshot()
    cy.get('#back-to-products').click()
  })



})