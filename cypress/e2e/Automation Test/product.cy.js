describe('product', () => {

 beforeEach(() => {

    cy.visit('/')
    cy.get('#user-name').clear({ force: true}).type('standard_user', { force: true })
    cy.get('#password').clear({ force: true}).type('secret_sauce', { force: true })
    cy.get('#login-button').click({ force: true })
    cy.url({ timeout: 30000 }).should('include', '/inventory.html')

  })

  it(`sort product A to Z`,()=>{
    
    cy.get('#header_container > div.header_secondary_container > div > span > select')
      .select('Name (A to Z)')
    cy.get('#item_4_title_link > .inventory_item_name')
      .should('have.text', 'Sauce Labs Backpack').screenshot()

  })

  it(`sort product Z to A`,()=>{
    
    cy.get('#header_container > div.header_secondary_container > div > span > select')
      .select('Name (Z to A)')
    cy.get('#item_3_title_link > .inventory_item_name')
      .should('have.text', 'Test.allTheThings() T-Shirt (Red)')
    cy.screenshot()

  })

  it(`sort product price low to high`,()=>{
    
    cy.get('#header_container > div.header_secondary_container > div > span > select')
      .select('Price (low to high)')
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price')
      .should('have.text', '$7.99')
    cy.screenshot()

  })

  it(`sort product price high to low`,()=>{
    
    cy.get('#header_container > div.header_secondary_container > div > span > select')
      .select('Price (high to low)')
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price')
      .should('have.text', '$49.99')
    cy.screenshot()

  })

  it(`validate detail product`,()=>{

     cy.get('#header_container > div.header_secondary_container > div > span > select')
      .select('Price (high to low)')
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').click( {force:true} )
    cy.get('#item_5_title_link > .inventory_item_name').click( {force:true} )
    cy.screenshot()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.enabled')

  })

   it(`add to chart`,()=>{

     cy.get('#header_container > div.header_secondary_container > div > span > select')
      .select('Price (high to low)')
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').click( {force:true} )
    cy.get('#item_5_title_link > .inventory_item_name').click( {force:true} )
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.enabled').click ( {force:true} )
    cy.screenshot()
    cy.get('[data-test="back-to-products"]').click ({ force:true })
    

  })

})