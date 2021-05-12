interface IUser {
    firstName: string;
    lastName: string;
}

type UserProps = {
    firstName: string;
    lastName: string;
}

export default class User implements IUser {
    public firstName: string;
    public lastName: string;
    constructor(props: UserProps) {
        this.firstName = props.firstName;
        this.lastName = props.lastName
    }
}