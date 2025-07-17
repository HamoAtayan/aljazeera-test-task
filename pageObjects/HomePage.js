const {I} = inject();

class HomePage {
    trendingSection = '#most-read-container';
    featuredNewsSection = '#featured-news-container';
    trendingArticles = '.article-trending';
    skipLinksSection = '.bypass-block-links-container';
    skipToTrendingLink = 'Skip to Most Read';
    headerArea = '.container--header';

    scrollToTrendingSection() {
        I.waitForVisible(this.featuredNewsSection);
        I.scrollTo(this.trendingSection);
    }

    verifyTrendingSectionVisible() {
        I.seeElement(this.trendingSection);
    }

    verifyTrendingSectionHidden() {
        I.dontSeeElement(this.trendingSection);
    }

    validateTrendingArticleCount(count) {
        I.seeNumberOfElements(this.trendingArticles, count);
    }

    launchHomePage() {
        I.amOnPage('https://aljazeera.com/');
    }

    activateSkipToTrending() {
        I.waitForVisible(this.skipLinksSection);
        I.click(this.skipToTrendingLink);
    }

    tapHeaderArea() {
        I.click(this.headerArea);
    }

    triggerSkipLinkMenu() {
        I.pressKey('Tab');
    }

    assertUrlIncludes(value) {
        I.waitInUrl(value);
    }

}

module.exports = HomePage;
