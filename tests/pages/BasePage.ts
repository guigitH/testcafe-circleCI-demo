import { getLocation } from '../helpers/GetLocation';

class BasePage {
	protected controller: TestController;

	constructor(controller: TestController) {
		this.controller = controller;
	}

	public async setNativeHandler(): Promise<TestControllerPromise> {
		await this.controller.setNativeDialogHandler(() => true);
	}

	public async confirmUrl(url: string): Promise<TestControllerPromise> {
		await this.controller.expect(getLocation()).eql(url);
	}
}

export default BasePage;