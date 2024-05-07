// flyweight interface for bullets
interface Bullet {
    damage: number;
    size: number;
    speed: number;
    fly(): void;
}

// concrete Flyweight class for a basic bullet
class BasicBullet implements Bullet {
    damage: number = 10;
    size: number = 1;
    speed: number = 5;

    fly(): void {
        console.log(`Basic bullet is flying at speed ${this.speed}`);
        // logic for flying the basic bullet
    }
}

class SharpBullet implements Bullet {
    damage: number = 12;
    size: number = 3;
    speed: number = 5;

    fly(): void {
        console.log(`Sharp bullet is flying at speed ${this.speed}`);
        // logic for flying the basic bullet
    }
}

// flyweight factory for creating and managing bullet instances
class BulletFactory {
    private bulletTypes: { [key: string]: Bullet } = {};

    getBullet(type: string): Bullet {
        if (!this.bulletTypes[type]) {
            switch (type) {
                case "basic":
                    this.bulletTypes[type] = new BasicBullet();
                    break;
                case "sharp":
                    this.bulletTypes[type] = new SharpBullet();
                    break;
                default:
                    throw new Error("Invalid bullet type");
            }
        }
        return this.bulletTypes[type];
    }
}

// client code - Simulating bullets flying in the game
const bulletFactory = new BulletFactory();

// creating and flying multiple bullets
const bulletTypes: string[] = ["basic", "sharp", "basic", "sharp"];
const bulletPositions: { x: number, y: number }[] = [
    { x: 100, y: 200 },
    { x: 300, y: 400 },
    { x: 500, y: 600 },
    { x: 700, y: 800 }
];

bulletTypes.forEach((type, index) => {
    const bullet = bulletFactory.getBullet(type);
    bullet.fly();
    console.log(`Bullet at position (${bulletPositions[index].x}, ${bulletPositions[index].y})`);
    console.log(" \n");
});
