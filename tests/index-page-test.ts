import IndexPage from './pageModels/index-page-model';

fixture `A set of examples that illustrate how to use TestCafe API`
    .page `http://127.0.0.1:3000/index.html`;

// Tests
test('input mobile', async t => {
    await t
        .typeText(IndexPage.phoneInput, '13912345601')
});