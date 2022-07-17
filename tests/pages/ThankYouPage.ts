import BasePage from "./BasePage";
import { Selector } from "testcafe";

class ThankYouPage extends BasePage {
    private header: Selector = Selector('h1[id="article-header"]');
    
    public async confirmHeaderText(text: string): Promise<TestControllerPromise> {
        await this.controller.expect(this.header.innerText).contains(text)
    }
}

export default ThankYouPage