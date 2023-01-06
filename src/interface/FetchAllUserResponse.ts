// To parse this data:
//
//   import { Convert, Users } from "./file";
//
//   const users = Convert.toUsers(json);

export interface Users {
    data: IUser[];
}

export interface IUser {
    auth0_id?: string,
    birthday: string,
    email?: string,
    id: string,
    image?: string,
    is_admin?: boolean,
    language?: string,
    lastname?: string,
    middlename?: string,
    name?: string,
    phone?: number,
    second_lastname?: string,    
    timezone?: string
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUsers(json: string): Users {
        return JSON.parse(json);
    }

    public static usersToJson(value: Users): string {
        return JSON.stringify(value);
    }
}
