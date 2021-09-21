import {GetServerSideProps, NextPage} from 'next';
import React from 'react';
import {useDocUrlBuilder} from '~/hooks/useUrlBuilder';

export type UrlQuery = {
    src?: string;
    type?: string;
};

export type PageProps = {
    src?: string;
    type?: string;
}

export const getServerSideProps: GetServerSideProps<
    UrlQuery,
    PageProps
> = async ({query}) => {
    return {
        props: {
            ...{
                src:
                    query.src && typeof query.src === 'string' ? query.src : undefined,
            },
            ...{
                type:
                    query.type && query.type === 'string' ? query.type : undefined,
            },
        },
    };
};

export const Page: NextPage<PageProps> = ({
    src,
    type,
    ...props
}) => {
    const urlBuilder = useDocUrlBuilder();

    return (
        <div>
        </div>
    );
};
export default Page;