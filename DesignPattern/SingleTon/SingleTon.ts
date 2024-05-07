class Singleton {
  private static instance: Singleton | null = null;
  private data: any[] = [];

  private constructor() {
    if (!Singleton.instance) {
      // create the instance if it does not exist
      this.data = [];
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public addData(item: any): void {
    this.data.push(item);
  }

  public getData(): any[] {
    return this.data;
  }
}

const S1 = Singleton.getInstance();
S1.addData("Data 1");

const S2 = Singleton.getInstance();
S2.addData("Data 2");

console.log(S1.getData());
console.log(S2.getData());
console.log(S1 === S2);
