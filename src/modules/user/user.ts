interface IUser {
    email: string;
    password: string;
    isAdmin: boolean;
    lastLogin: Date | null
}

type UserProps = {
    email: string;
    password: string;
    isAdmin: boolean;
}

export default class User implements IUser {
    public email: string;
    public password: string;
    public isAdmin: boolean;
    public lastLogin: Date | null
    constructor(props: UserProps) {
        this.email = props.email;
        this.password = props.password;
        this.isAdmin = props.isAdmin;
        this.lastLogin = null;
    }
}