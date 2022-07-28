import { RequestMock } from 'testcafe';

export function mockResponseWithError(
	pattern: RegExp,
	method: string,
	statusCode = 500,
): RequestMock {
	return RequestMock()
		.onRequestTo({ url: pattern, method: method })
		.respond((req, res) => {
			{
				res.headers['access-control-allow-origin'] = '*';
				res.headers['content-type'] = 'application/json;charset=UTF-8';
				res.statusCode = statusCode;
			}
		});
}