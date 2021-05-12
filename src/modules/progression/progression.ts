import User from '../user/user';
import Level from '../level/level';
import Skill from '../skill/skill';

interface IProgression {
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

export default class Progression implements IProgression {
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
}