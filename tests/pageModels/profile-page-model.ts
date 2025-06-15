import { Selector } from 'testcafe';

class ProfilePage {
    // Navigation bar elements
    homeLink: Selector;
    profileLink: Selector;
    tryOnLink: Selector;

    // User profile elements
    userName: Selector;
    userPhone: Selector;
    userAvatar: Selector;

    // Product details elements
    productDetails: Selector;
    productImage: Selector;
    productName: Selector;
    productPrice: Selector;

    constructor() {
        // Navigation bar elements
        this.homeLink = Selector('a').withAttribute('href', 'suggest.html');
        this.profileLink = Selector('a').withAttribute('href', 'profile.html');
        this.tryOnLink = Selector('a').withAttribute('href', 'try-on.html');

        // User profile elements
        this.userName = Selector('h2').withText('用户画像');
        this.userPhone = Selector('p').withText('手机号码');
        this.userAvatar = Selector('img').withAttribute('src', /avatar/);

        // Product details elements
        this.productDetails = Selector('details');
        this.productImage = this.productDetails.find('img');
        this.productName = this.productDetails.find('p').withText('修身牛仔裤');
        this.productPrice = this.productDetails.find('p').withText('¥1,299');
    }
}

export default new ProfilePage();