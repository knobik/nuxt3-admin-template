import type { NitroFetchRequest, $Fetch } from 'nitropack'
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
};

export const users = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
    async all(): Promise<User[]> {
        return fetch<User[]>('/users')
    }
})