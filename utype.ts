export interface User {
    id: string,
    password: string
}

export class Convert {
    public static toCharacter(json: string): User[] {
        return JSON.parse(json);
    }

    public static characterToJson(value: User[]): string {
        return JSON.stringify(value);
    }
}