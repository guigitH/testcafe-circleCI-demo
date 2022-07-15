import { getLocation } from '../helpers/GetLocation'

class BasePage {
    public test: TestController

    constructor(test: TestController) {
        this.test = test
    }

    public async setNativeHandler(): Promise<TestControllerPromise> {
        await this.test.setNativeDialogHandler(() => true)
    }

    public async confirmUrl(url: string): Promise<TestControllerPromise> {
        await this.test.expect(getLocation()).eql(url)
    }
}

export default BasePage