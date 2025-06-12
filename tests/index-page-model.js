import { Selector } from 'testcafe';

class Page {
    constructor() {
        // Elements related to phone input section
        this.phoneInput = Selector('#phoneInput');
        this.savePhoneBtn = Selector('#savePhoneBtn');
        this.phoneMessage = Selector('#phoneMessage');

        // Cards linking to different pages
        this.userProfileCard = Selector('.bg-white.bg-opacity-10').withText('用户画像');
        this.recommendationCard = Selector('.bg-white.bg-opacity-10').withText('推荐产品');
        this.virtualTryOnCard = Selector('.bg-white.bg-opacity-10').withText('虚拟试衣');

        // Start conversation button (commented out in your HTML)
        this.startConversationBtn = Selector('button').withText('开始对话');
    }
}

export default new Page();