import BasePage from "./BasePage";
import { Selector } from "testcafe";

class ThankYouPage extends BasePage {
    public header = Selector('h1[id="article-header"]');
    
    public async confirmHeaderText(text: string): Promise<TestControllerPromise> {
        await this.test.expect(this.header.innerText).contains(text)
    }
}

export default ThankYouPage