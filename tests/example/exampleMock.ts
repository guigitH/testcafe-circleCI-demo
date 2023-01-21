import ThankYouPage from '../pages/ThankYouPage';
import { URL } from '../constants/Url';

fixture `Example of mock test`
	.page `${URL.example}`;

test.meta({id: '1657929371'})
	.page(`${URL.thankYou}`)
	.requestHooks(ThankYouPage.errorCssResponse)('Html page can be loaded with css error response', async t => {
		const thankYouPage = new ThankYouPage(t);
		await thankYouPage.confirmHeaderText('Thank you');
	});