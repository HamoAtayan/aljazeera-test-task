const { I } = inject();

class LivePage {
    streamPlayer = '#vjs_video_3_html5_api';
    alternatePlayerToggle = '#liveStreamPlayerHelpButton';

    navigateToLivePage() {
        I.amOnPage('/live');
    }

    verifyStreamPlayerVisible() {
        I.seeElement(this.streamPlayer);
    }

    verifyAlternatePlayerButtonVisible() {
        I.seeElement(this.alternatePlayerToggle);
    }
}

module.exports = LivePage;
