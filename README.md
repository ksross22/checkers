
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