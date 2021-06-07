import Student from '../student/Student';
import Level from '../level/level';
import Skill from '../skill/skill';

interface IProgression {
    student: Student;
    level: Level;
    skill: Skill;
    created_at: Date;
}

type ProgressionProps = {
    student: Student;
    level: Level;
    skill: Skill;
}

export default class Progression implements IProgression {
    public student: Student;
    public level: Level;
    public skill: Skill;
    public created_at: Date;
    constructor(props: ProgressionProps) {
        this.student = props.student;
        this.level = props.level;
        this.skill = props.skill;
        this.created_at = new Date(Date.now());
    }
}