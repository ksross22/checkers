describe('Checkers Game Test', () => {
    before(() => {
        // Navigate to the board
        cy.visit('/');
    });
    it('Should load the checkers game page with a new board', () => {  
        // Validate that the checkerboard starts out correctly.
        cy.validatePageContent();
        cy.validateDefaultCheckersBoard();
        cy.validateFooter();
    });
    it('Should change between you1.gif and you2.gif when clicking', () => {
        // Verify that you1.gif is initially present
        cy.get('img[name="space62"]').should('have.attr', 'src', Cypress.config('fileNames').orangeChecker);
    
        // Click the element
        cy.clickSpace(62);
    
        // Verify that you1.gif changes to you2.gif after clicking
        cy.get('img[name="space62"]').should('have.attr', 'src', Cypress.config('fileNames').orangeCheckerClicked);

        // Click the element again
        cy.clickSpace(62);

        // Verify that you1.gif changes to you2.gif after clicking
        cy.get('img[name="space62"]').should('have.attr', 'src', Cypress.config('fileNames').orangeChecker);
      });

      it('Should not allow me to move my checker piece to a black space', () => { 
        // Verify that black.gif is initially present at the potential space
        cy.get('img[name="space12"]').should('have.attr', 'src', Cypress.config('fileNames').blackSpace);
    
        // Attempt to move my checker piece from space 22 to space 12
        cy.moveMyCheckerPiece(22, 12);

        // Verify that space 12 did not get the checker piece and it stays in space 22
        cy.validateInvalidMove(22, 12);
      });

      it('Should have one less piece if theres a jump open for my opponent', () => {
        // Verify that it's my first turn
        cy.get('#message').should('contain.text', 'Select an orange piece to move.'); 

        // Move my checker piece from space 62 to space 73
        cy.moveMyCheckerPiece(62, 73);

        // Verify that my checker piece moved from space 62 to space 73
        cy.validateValidMove(62, 73);

        // Verify that it's my turn
        cy.get('#message').should('contain.text', 'Make a move.'); 

        // I try to avoid waits but the network tab is so busy with all the ads - otherwise I would sync with devs on api/network requests I could intercept
        cy.wait(1000);

        // Move my checker piece from space 73 to space 64
        cy.moveMyCheckerPiece(73, 64);

        // Verify that my checker piece moved from space 73 to space 64
        cy.validateOpponentAdvance(73, 64);
        
      });

      it('Should be able to reset the game', () => {
        cy.get('a').contains('Restart...').should('have.attr', 'href', './').click();
        cy.validateDefaultCheckersBoard();
      });

      it('Should not allow me to move my opponents pieces', () => { 
        
        cy.get('img[name="space15"]').should('have.attr', 'src', Cypress.config('fileNames').blueChecker);
    
        // Click the element
        cy.clickSpace(15);

        // Validate the message that occurs when clicking on the opponents piece
        cy.get('#message').should('contain.text', 'Click on your orange piece, then click where you want to move it.'); 

        // Attempt to move my checker piece from space 22 to space 12
        cy.clickSpace(24);

        // Verify that these pieces did not move
        cy.get('img[name="space15"]').should('have.attr', 'src', Cypress.config('fileNames').blueChecker);
        cy.get('img[name="space24"]').should('have.attr', 'src', Cypress.config('fileNames').graySpace);
      });
      
  
  });