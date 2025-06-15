import { ClientFunction } from 'testcafe';
import ProfilePage from './pageModels/profile-page-model';

fixture `Profile Page Tests`
    .page `http://127.0.0.1:3000/profile.html`;

// Test case 1: Verify user profile elements exist
test('Check if all user profile elements are present on the profile page', async t => {
    await t
        .expect(ProfilePage.userName.exists).ok('User name should exist')
        .expect(ProfilePage.userPhone.exists).ok('User phone should exist')
        .expect(ProfilePage.userAvatar.exists).ok('User avatar should exist');
});

// Test case 2: Verify product details elements exist
test('Check if all product details elements are present on the profile page', async t => {
    await t
        .expect(ProfilePage.productDetails.exists).ok('Product details should exist')
        .expect(ProfilePage.productImage.exists).ok('Product image should exist')
        .expect(ProfilePage.productName.exists).ok('Product name should exist')
        .expect(ProfilePage.productPrice.exists).ok('Product price should exist');
});

// Test case 3: Verify navigation bar functionality
test('Navigate to different pages via the navigation bar', async t => {
    await t
        .click(ProfilePage.homeLink)
        .expect(getCurrentPageUrl()).contains('suggest.html', 'Should navigate to home page')
        .navigateTo('http://127.0.0.1:3000/profile.html') // Return to profile page
        .click(ProfilePage.tryOnLink)
        .expect(getCurrentPageUrl()).contains('try-on.html', 'Should navigate to try-on page');
});

// Helper function to get current page URL
function getCurrentPageUrl() {
    return ClientFunction(() => window.location.href)();
}