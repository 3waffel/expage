import {VercelApiHandler} from "@vercel/node";
import {getContent} from './_lib/chromium';
import {parseRequest} from './_lib/parser';

const handler: VercelApiHandler = async (req, res) => {
    try {
        const option = parseRequest(req);
        const content = await getContent(option);

        res.status(200);
        res.setHeader('Content-Type', `text/${option.type};charset=utf8`);
        res.setHeader('Cache-Control', 'public, max-age=86400');
        //convert here
        var TurndownService = require('turndown');
        var turndownService = new TurndownService();
        turndownService.remove(['head','style','script'])
        var markdown = turndownService.turndown(content);
        res.end(markdown);
    } catch (error) {
        if(process.env.NODE_ENV !== 'production') {
            console.error(error);
        }
        res.status(500);
        res.end();
    }
};

export default handler;