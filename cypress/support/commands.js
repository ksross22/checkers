Cypress.Commands.add('validatePageContent', () => {
    const rulesURL = 'https://en.wikipedia.org/wiki/English_draughts#Starting_position'

    // Assert that the game is called "Checkers"
    cy.get('h1').should('contain.text', 'Checkers');

    // Assert that the game board is visible
    cy.get('#board').should('be.visible');

    // Assert that orange moves first
    cy.get('#message').should('contain.text', 'Select an orange piece to move.'); 
});

Cypress.Commands.add('validateDefaultCheckersBoard', () => {
        const rulesURL = 'https://en.wikipedia.org/wiki/English_draughts#Starting_position'

        // Assert that the game is called "Checkers"
        cy.get('h1').should('contain.text', 'Checkers');

        // Assert that the game board is visible
        cy.get('#board').should('be.visible');
       
        // Check if there are 12 rows with the class 'line'
        cy.get('.line').should('have.length', 8);

        // Check if there are 64 spaces on the board
        cy.get('[name^="space"]').should('have.length', 64);
  
       // Check if there are 12 blue checker pieces (me) and that they can be clicked
        cy.get(`img[src="${Cypress.config('fileNames').blueChecker}"][onclick*="didClick"]`).should('have.length', 12);
        
        // Check if there are orange 12 checker pieces (you) and that they can be clicked
        cy.get(`img[src="${Cypress.config('fileNames').orangeChecker}"][onclick*="didClick"]`).should('have.length', 12);

        // Check if there are 32 empty black spaces
        cy.get(`img[src="${Cypress.config('fileNames').blackSpace}"]`).should('have.length', 32);

        // Check that none of the black spaces contain the didClick function in their onclick attribute
        cy.get(`img[src="${Cypress.config('fileNames').blackSpace}"][onclick*="didClick"]`).should('not.exist');

        // Check if there are 8 empty gray spaces and can be clicked
        cy.get(`img[src="${Cypress.config('fileNames').graySpace}"][onclick*="didClick"]`).should('have.length', 8);

        // Assert that orange moves first
        cy.get('#message').should('contain.text', 'Select an orange piece to move.'); 
});

Cypress.Commands.add('validateFooter', () => {
    const rulesURL = 'https://en.wikipedia.org/wiki/English_draughts#Starting_position'

    // Assert that the "Rules" link has the correct href attribute
    cy.get('a').contains('Rules').should('have.attr', 'href', rulesURL);

    // Assert that the "Restart..." link has the correct href attribute
    cy.get('a').contains('Restart...').should('have.attr', 'href', './');    
});


Cypress.Commands.add('clickSpace', (number) => {
    cy.get(`img[name="space${number}"]`).click();
});

Cypress.Commands.add('moveMyCheckerPiece', (currentNum, newNum) => {
    // Verify that you1.gif is initially present at the desired space
    cy.get(`img[name="space${currentNum}"]`).should('have.attr', 'src', Cypress.config('fileNames').orangeChecker);
        
    // Click the element    
    cy.clickSpace(currentNum);

    // Verify that you1.gif changes to you2.gif after clicking
    cy.get(`img[name="space${currentNum}"]`).should('have.attr', 'src', Cypress.config('fileNames').orangeCheckerClicked);

    // Click the element
    cy.clickSpace(newNum);
});

Cypress.Commands.add('validateValidMove', (currentNum, newNum) => {
    // Verify that checker pieces were moved to a valid space
    cy.get(`img[name="space${newNum}"]`).should('have.attr', 'src', Cypress.config('fileNames').orangeChecker);
    cy.get(`img[name="space${currentNum}"]`).should('not.have.attr', 'src', Cypress.config('fileNames').orangeChecker);
});

Cypress.Commands.add('validateOpponentAdvance', (currentNum, newNum) => {
    // Verify that checker pieces were moved to a valid space
    cy.get(`img[name="space${newNum}"]`).should('not.have.attr', 'src', Cypress.config('fileNames').orangeChecker);
    cy.get(`img[name="space${newNum}"]`).should('have.attr', 'src', Cypress.config('fileNames').graySpace);
    cy.get(`img[name="space${currentNum}"]`).should('have.attr', 'src', Cypress.config('fileNames').blueChecker);
});

Cypress.Commands.add('validateInvalidMove', (currentNum, newNum) => {
    // Verify that newNum space  did not get the checker piece and it stays in currentNum
    cy.get(`img[name="space${newNum}"]`).should('not.have.attr', 'src', Cypress.config('fileNames').orangeChecker);
    cy.get(`img[name="space${currentNum}"]`).should('have.attr', 'src', Cypress.config('fileNames').orangeCheckerClicked);
    cy.get(`img[name="space${newNum}"]`).should('have.attr', 'src', Cypress.config('fileNames').blackSpace);
});

