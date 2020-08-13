import {createConnection} from "typeorm";
import { Book } from '../domain/entity/book.js';

// connection settings are in the "ormconfig.json" file
createConnection({
    "name": "default",
    "type": "mysql",
    "host": "xx.xx.xx.xx",
    "port": 33066,
    "username": "xxxx",
    "password": "xxxx",
    "database": "xxxx",
    "synchronize": true,
    "entities": [
        "dist/domain/entity/*.js"
    ]
}).then(connection => {
    const book1 = new Book();
    book1.name = '演员的自我修养';
    book1.desc = "这是一本好书";
    console.log(book1);
    return connection
        .getRepository(Book)
        .save(book1)
        .then((savebook) => {
            console.log("book has been saved: ", savebook)
        });
}).catch(error => console.log("Error: ", error));