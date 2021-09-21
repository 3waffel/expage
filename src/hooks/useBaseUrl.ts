export const useBaseUrl = () => new URL(process.env.BASE_URL!).toString();

export const useDocBaseUrl = () => {
    const baseUrl = useBaseUrl();
    return new URL('/api', baseUrl).toString();
}