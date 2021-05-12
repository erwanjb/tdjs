import Category from '../category/category'

interface ISkill {
    name: string;
    description: string;
    category: Category;
}

type SkillProps = {
    name: string;
    description: string;
    category: Category;
}

export default class Skill implements ISkill {
    public name: string;
    public description: string;
    public category: Category;
    constructor(props: SkillProps) {
        this.name = props.name;
        this.description = props.description;
        this.category = props.category;
    }
}