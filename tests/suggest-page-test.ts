import { ClientFunction } from 'testcafe'; // ✅ Import ClientFunction as a function
import SuggestPage from './pageModels/suggest-page-model'; // ✅ Add this import

fixture `A set of examples that illustrate how to use TestCafe API`
    .page `http://127.0.0.1:3000/suggest.html`;

// Helper function to get current page URL
const getCurrentPageUrl = ClientFunction(() => window.location.href);

// Test cases
test('Check if all elements are present on the suggest page', async t => {
    await t
        .expect(SuggestPage.homeLink.exists).ok('Home link should exist')
        .expect(SuggestPage.profileLink.exists).ok('Profile link should exist')
        .expect(SuggestPage.tryOnLink.exists).ok('Try-on link should exist')
        .expect(SuggestPage.suggestionTitle.exists).ok('Suggestion title should exist')
        .expect(SuggestPage.suggestionText.exists).ok('Suggestion text should exist')
        .expect(SuggestPage.tryOnButton.exists).ok('Try-on button should exist');
});

test('Navigate to different pages via the navigation bar', async t => {
    await t
        .click(SuggestPage.homeLink)
        .expect(await getCurrentPageUrl()).contains('suggest.html', 'Should navigate to home page')
        .navigateTo('http://127.0.0.1:3000/suggest.html')
        .click(SuggestPage.profileLink)
        .expect(await getCurrentPageUrl()).contains('profile.html', 'Should navigate to profile page')
        .navigateTo('http://127.0.0.1:3000/suggest.html')
        .click(SuggestPage.tryOnLink)
        .expect(await getCurrentPageUrl()).contains('try-on.html', 'Should navigate to try-on page');
});

test('Click the "Try-on Effect" button and verify its behavior', async t => {
    await t
        .click(SuggestPage.tryOnButton)
        .expect(await getCurrentPageUrl()).contains('try-on.html', 'Should navigate to try-on page after clicking the button');
});