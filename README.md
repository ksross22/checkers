
# Cypress Test Suite

This repository contains a test suite built with Cypress for testing a Checkers game (UI): https://www.gamesforthebrain.com/game/checkers/

## Installation

1. Clone this repository to your local machine:
`git clone https://github.com/ksross22/checkers.git`

2. Navigate to the project directory:
`cd checkers`

3. Install dependencies:
`npm install`

4. Run Tests
`npm run cypress:open`

This will open the Cypress Test Runner, where you can select and run individual test files or the entire suite.

By default, tests will run in the Electron browser. To specify a different browser, use the `--browser` flag:

`npm run cypress:open --browser chrome`

For more options and configurations, refer to the Cypress documentation: [Cypress Configuration](https://docs.cypress.io/guides/references/configuration.html)

**Scenarios Covered:**
- Navigating to the page loads a new checkers board
    - Validating that there is correct text on the page
    - Validating that the board is visible
    - Validating the correct message is present
    - Validating that the board is the correct size
    - Validating that there are 64 spaces on the board
    - Validating the correct number of blue and oranges pieces
    - Validating the correct number of empty spaces (black and gray)
    - Validating that black spaces cannot be clicked (onclick function)
    - Validating that gray spcaes can be clicked (onclick function)
    - Validating the Footer contains Rules and Restart links with correct href
- Image attribute changes when clicking on your own checker piece
- I cannot move my checkers piece to a black space
- I have one less piece if my opponent captures my piece
- I cannot move on of my opponents pieces
- I can reset the game