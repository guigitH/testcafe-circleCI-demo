import { Selector } from 'testcafe';
import ExamplePage from '../pages/ExamplePage';
import ThankYouPage from '../pages/ThankYouPage';
import { URL } from '../constants/Url';

fixture `Examples of tests`
    .page `${URL.example}`;

test.meta({id: "1657929369"})('User can populate a name and submit the form', async t => {
    const examplePage = new ExamplePage(t)
    const thankYouPage = new ThankYouPage(t)

    await examplePage.setNativeHandler()
    await examplePage.clickPopulate()
    await examplePage.clickSubmit()
    await thankYouPage.confirmHeaderText('Thank you, Peter Parker!')
});


test.meta({id: "1657929369"})('User cannot submit the form without valid data', async t => {
    const examplePage = new ExamplePage(t)

    await examplePage.clickSubmit()
    await examplePage.confirmUrl(URL.example)
});

test.meta({id: "1657929369"})('', async t => {
});

test.meta({id: "1657929369"})('', async t => {
});

test.meta({id: "1657929369"})('', async t => {
});