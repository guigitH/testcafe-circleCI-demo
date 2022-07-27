import BasePage from "./BasePage";
import { Selector } from "testcafe";
import { mockResponseWithError } from "../helpers/MockApi";

class ThankYouPage extends BasePage {
    private header: Selector = Selector('h1[id="article-header"]');
    
    public static errorCssResponse = mockResponseWithError(
        /https:\/\/devexpress.github.io\/testcafe\/css\/example-page.css/,
        'GET',
        500,
      );
      
    public async confirmHeaderText(text: string): Promise<TestControllerPromise> {
        await this.controller.expect(this.header.innerText).contains(text)
    }
}

export default ThankYouPage