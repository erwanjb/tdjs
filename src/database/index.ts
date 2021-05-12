import { createConnection } from 'typeorm';
import {USERNAME_DB, PASSWORD_DB, NAME_DB, PORT_DB, HOST_DB, IS_PROD} from '../constants';
import {User} from '../entities/User';
import {Category} from '../entities/Category';
import {Level} from '../entities/Level';
import {Skill} from '../entities/Skill';
import {Progresssion} from '../entities/Progression';

export const startConnexion = async () => {
    createConnection({
        type: "mysql",
        host: HOST_DB,
        port: PORT_DB,
        username: USERNAME_DB,
        password: PASSWORD_DB,
        database: NAME_DB,
        entities: [User, Category, Level, Skill, Progresssion],
        synchronize: true,
        logging: !IS_PROD ? true: false
    }).then(connection => {
        console.log(connection)
    }).catch(error => console.log(error));
}