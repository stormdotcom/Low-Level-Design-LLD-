class Singleton {
    constructor() {
        if (!Singleton.instance) {
            // create the instance if it does not exist
            this.data = [];
            Singleton.instance = this;
        }
        return Singleton.instance;
    }


    addData(item) {
        this.data.push(item);
    }


    getData() {
        return this.data;
    }
}

const S1 = new Singleton();
S1.addData("Data 1");

const S2 = new Singleton();
S2.addData("Data 2");

console.log(S1.getData());
console.log(S2.getData());
console.log(S1 === S2);
