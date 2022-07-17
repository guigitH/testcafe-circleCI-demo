import BasePage from "./BasePage";
import { Selector } from "testcafe";

class ExamplePage extends BasePage {
    private populate = Selector('input[id=populate]')
    private submit = Selector('button[id=submit-button]')

    public async clickPopulate(): Promise<TestControllerPromise> {
        await this.controller.click(this.populate)
    }

    public async clickSubmit(): Promise<TestControllerPromise> {
        await this.controller.click(this.submit)
    }
}

export default ExamplePage