/* interface Props {
    name: string; 
    age: number;
}

interface ITest {
    name: string;
    age: number;
    salutation: () => void
}

class Test implements ITest {
    public name: string;
    public age: number;
    constructor(props: Props) {
        this.name = props.name;
        this.age = props.age;
    }
    public salutation () : void {
        console.log(`Hello votre nom est : ${this.name} et votre age : ${this.age}`)
    }
}

const toto: ITest | Test = new Test({name: "hello", age: 23})

toto.salutation() */

/* interface IUser {
    firstName: string;
    lastName: string;
}

type UserProps = {
    firstName: string;
    lastName: string;
}

class User implements IUser {
    public firstName: string;
    public lastName: string;
    constructor(props: UserProps) {
        this.firstName = props.firstName;
        this.lastName = props.lastName
    }
} */

/* interface ILevel {
    value: number;
}

type LevelProps = {
    value: number;
}

class Level implements ILevel {
    public value: number;
    constructor(props: LevelProps) {
        this.value = props.value;
    }
} */

/* interface ICategory {
    name: string;
}

type CategoryProps = {
    name: string;
}

class Category implements ICategory {
    public name: string;
    constructor(props: CategoryProps) {
        this.name = props.name;
    }
} */

/* interface ISkill {
    name: string;
    description: string;
    category: Category;
}

type SkillProps = {
    name: string;
    description: string;
    category: Category;
}

class Skill implements ISkill {
    public name: string;
    public description: string;
    public category: Category;
    constructor(props: SkillProps) {
        this.name = props.name;
        this.description = props.description;
        this.category = props.category;
    }
} */

/* interface IProgression {
    user: User;
    level: Level;
    skill: Skill;
    created_at: Date;
}

type ProgressionProps = {
    user: User;
    level: Level;
    skill: Skill;
}

class Progression implements IProgression {
    public user: User;
    public level: Level;
    public skill: Skill;
    public created_at: Date;
    constructor(props: ProgressionProps) {
        this.user = props.user;
        this.level = props.level;
        this.skill = props.skill;
        this.created_at = new Date(Date.now());
    }
} */

