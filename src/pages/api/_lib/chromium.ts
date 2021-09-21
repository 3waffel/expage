import chrome from 'chrome-aws-lambda';
import {ParsedOptions} from './parser';

export async function getContent(option: ParsedOptions) {
    const browser = await chrome.puppeteer.launch({
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: true,
    })

    const page = await browser.newPage();
    await page.setViewport({width: 1376, height: 720});
    await page.goto(option.src);
    const content = await page.content();

    await browser.close();
    return content;
}