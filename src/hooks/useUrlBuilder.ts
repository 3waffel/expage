import {useBaseUrl, useDocBaseUrl} from './useBaseUrl';

export type Builder = (query: {
    src: string;
    type?: string;
}) => string;

export const useDocUrlBuilder: () => Builder = () => {
    const docBaseUrl = useDocBaseUrl();
    return ({src, type}) => {
        const url = new URL(docBaseUrl);
        url.searchParams.set('src', src);
        if (type) url.searchParams.set('type', type);
        return url.toString();
    };
};
