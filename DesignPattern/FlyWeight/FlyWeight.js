// concrete Flyweight class for a basic bullet
var BasicBullet = /** @class */ (function () {
    function BasicBullet() {
        this.damage = 10;
        this.size = 1;
        this.speed = 5;
    }
    BasicBullet.prototype.fly = function () {
        console.log("Basic bullet is flying at speed ".concat(this.speed));
        // logic for flying the basic bullet
    };
    return BasicBullet;
}());
var SharpBullet = /** @class */ (function () {
    function SharpBullet() {
        this.damage = 12;
        this.size = 3;
        this.speed = 5;
    }
    SharpBullet.prototype.fly = function () {
        console.log("Sharp bullet is flying at speed ".concat(this.speed));
        // logic for flying the basic bullet
    };
    return SharpBullet;
}());
// flyweight factory for creating and managing bullet instances
var BulletFactory = /** @class */ (function () {
    function BulletFactory() {
        this.bulletTypes = {};
    }
    BulletFactory.prototype.getBullet = function (type) {
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
    };
    return BulletFactory;
}());
// client code - Simulating bullets flying in the game
var bulletFactory = new BulletFactory();
// creating and flying multiple bullets
var bulletTypes = ["basic", "sharp", "basic", "sharp"];
var bulletPositions = [
    { x: 100, y: 200 },
    { x: 300, y: 400 },
    { x: 500, y: 600 },
    { x: 700, y: 800 }
];
bulletTypes.forEach(function (type, index) {
    var bullet = bulletFactory.getBullet(type);
    bullet.fly();
    console.log("Bullet at position (".concat(bulletPositions[index].x, ", ").concat(bulletPositions[index].y, ")"));
    console.log(" \n");
});
