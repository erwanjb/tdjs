import User from '../user/user';

interface IStudent {
    lastName: string;
    firstName: string;
    user: User
}

type StudentProps = {
    lastName: string;
    firstName: string;
    user: User
}

export default class Student implements IStudent {
    public lastName: string;
    public firstName: string;
    public user: User
    constructor(props: StudentProps) {
        this.lastName = props.lastName;
        this.firstName = props.firstName;
        this.user = props.user;
    }
}