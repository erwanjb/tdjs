interface ICategory {
    name: string;
}

type CategoryProps = {
    name: string;
}

export default class Category implements ICategory {
    public name: string;
    constructor(props: CategoryProps) {
        this.name = props.name;
    }
}