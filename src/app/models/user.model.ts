export class User {
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public coursePreference: string,
                public hobbies?: string[]) {}
}