import { VercelRequest } from "@vercel/node";
import escape from 'escape-html';

export type ParsedOptions = {
    src: string;
    type: 'plain';
}

export const parseRequest = ({query}: VercelRequest): ParsedOptions => {
    const {
        src,
        type = 'plain',
    } = query;

    if(Array.isArray(src)) throw new Error('src must not be an array')

    if (type !== 'plain') 
        throw new Error('type must be "plain"');

    return {
        src: escape(src),
        type,
    };
};