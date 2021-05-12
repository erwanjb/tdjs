interface ILevel {
    value: number;
}

type LevelProps = {
    value: number;
}

export  default class Level implements ILevel {
    public value: number;
    constructor(props: LevelProps) {
        this.value = props.value;
    }
}