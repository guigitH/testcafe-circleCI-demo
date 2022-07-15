import { Selector } from 'testcafe';

fixture `Examples of tests`
    .page `http://devexpress.github.io/testcafe/example`;

test('Enter name and click populate', async t => {
    await t.typeText('input[id=developer-name', 'Peter Clark')
    await t.setNativeDialogHandler(() => true)
    await t.click('input[id=populate]')
});