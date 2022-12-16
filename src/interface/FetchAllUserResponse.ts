// To parse this data:
//
//   import { Convert, Users } from "./file";
//
//   const users = Convert.toUsers(json);

export interface Users {
    data: IUser[];
}

export interface IUser {
    birthday:       string;
    email:          string;
    name:           string;
    id:             string;
    id_auth0?:      string;
    lastname:       string;
    second_lastname: string;
    middlename:     string;
    phone:          string;
    timezone:       string;
    language:       string;
    // is_admin:       boolean;
    // image:          string;
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
