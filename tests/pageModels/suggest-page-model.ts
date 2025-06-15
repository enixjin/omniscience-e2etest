import { Selector } from 'testcafe';

class SuggestPage {
    // Navigation bar elements
    homeLink: Selector;
    profileLink: Selector;
    tryOnLink: Selector;

    // Suggestion elements
    suggestionTitle: Selector;
    suggestionText: Selector;

    // Try-on button
    tryOnButton: Selector;

    constructor() {
        // Navigation bar elements
        this.homeLink = Selector('a').withAttribute('href', 'suggest.html');
        this.profileLink = Selector('a').withAttribute('href', 'profile.html');
        this.tryOnLink = Selector('a').withAttribute('href', 'try-on.html');

        // Suggestion elements
        this.suggestionTitle = Selector('h3').withText('搭配建议');
        this.suggestionText = Selector('p').withText('这款修身西装外套适合商务场合');

        // Try-on button
        this.tryOnButton = Selector('button').withText('试穿效果');
    }
}

export default new SuggestPage();