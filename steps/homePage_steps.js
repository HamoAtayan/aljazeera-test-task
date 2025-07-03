const HomePage = require('../pageObjects/HomePage.js');
let homePage = new HomePage();

Given('I am on the homepage', () => {
  homePage.launchHomePage();
});

When('I scroll to the "Most Read" section', () => {
  homePage.scrollToTrendingSection();
});

Then('I should see the "Most Read" section', () => {
  homePage.verifyTrendingSectionVisible();
});

Then('I should not see the "Most Read" section', () => {
  homePage.verifyTrendingSectionHidden();
});

Then('I assert articles count in "Most Read" section is {int}', (num) => {
  homePage.validateTrendingArticleCount(num);
});

When('I click on empty space in header', () => {
  homePage.tapHeaderArea();
});

When('I open accessibility menu', () => {
  homePage.triggerSkipLinkMenu();
});

When('I click on skip to most read', () => {
  homePage.activateSkipToTrending();
});

Then('I assert {string} is added to the link', (url) => {
  homePage.assertUrlIncludes(url);
});
