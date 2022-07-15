import { Selector } from 'testcafe';

fixture `Examples of tests`
    .page `http://devexpress.github.io/testcafe/example`;

test.meta({id: "1657929369"})('User can populate a name', async t => {
    await t.setNativeDialogHandler(() => true)
    await t.click('input[id=populate]')
});


test.meta({id: "1657929369"})('', async t => {
});

test.meta({id: "1657929369"})('', async t => {
});

test.meta({id: "1657929369"})('', async t => {
});

test.meta({id: "1657929369"})('', async t => {
});