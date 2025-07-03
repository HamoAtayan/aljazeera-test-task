const LivePage = require('../pageObjects/LivePage.js');
let livePage = new LivePage();

Given('I am on the live page', () => {
    livePage.navigateToLivePage();
});

Then('I verify that the video player is visible', () => {
    livePage.verifyStreamPlayerVisible();
});

Then('I verify that the switch player button is visible', () => {
    livePage.verifyAlternatePlayerButtonVisible();
});