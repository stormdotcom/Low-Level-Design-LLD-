// common interface for databases
interface Database {
    connect(): void;
    query(query: string): void;
}

// concrete databases
class MySQLDatabase implements Database {
    connect() {
        console.log('Connected to MySQL database.');
    }

    query(query: string) {
        console.log(`Executing MySQL query: ${query}`);
    }
}

class MongoDBDatabase implements Database {
    connect() {
        console.log('Connected to MongoDB database.');
    }

    query(query: string) {
        console.log(`Executing MongoDB query: ${query}`);
    }
}

// Factory class
class DatabaseFactory {
    createDatabase(type: string): Database {
        switch (type) {
            case 'mysql':
                return new MySQLDatabase();
            case 'mongodb':
                return new MongoDBDatabase();
            default:
                throw new Error('Invalid database type.');
        }
    }
}

// iin client class
const factory = new DatabaseFactory();

const mysqlDb = factory.createDatabase('mysql');
mysqlDb.connect();
mysqlDb.query('SELECT * FROM users');

const mongodbDb = factory.createDatabase('mongodb');
mongodbDb.connect();
mongodbDb.query('db.users.find()');
