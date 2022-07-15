import BasePage from "./BasePage";
import { Selector } from "testcafe";

class ExamplePage extends BasePage {
    public populate = Selector('input[id=populate]')
    public submit = Selector('button[id=submit-button]')

    public async clickPopulate(): Promise<TestControllerPromise> {
        await this.test.click(this.populate)
    }

    public async clickSubmit(): Promise<TestControllerPromise> {
        await this.test.click(this.submit)
    }
}

export default ExamplePage