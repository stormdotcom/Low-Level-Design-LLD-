
interface RouteStrategy {
    findPath(origin: string, destination: string, mode: string): void;
}

// concrete strategy for driving mode
class DrivingRouteStrategy implements RouteStrategy {
    findPath(origin: string, destination: string, mode: string): void {
        console.log(`Finding driving route from ${origin} to ${destination}`);
        // Example: call Google Maps API for driving directions
    }
}

// concrete strategy for walking mode
class WalkingRouteStrategy implements RouteStrategy {
    findPath(origin: string, destination: string, mode: string): void {
        console.log(`Finding walking route from ${origin} to ${destination}`);
        // Example: call Google Maps API for walking directions
    }
}

// concrete strategy for train mode
class TrainRouteStrategy implements RouteStrategy {
    findPath(origin: string, destination: string, mode: string): void {
        console.log(`Finding train route from ${origin} to ${destination}`);
        // Example: call Google Maps API for train directions
    }
}

// context class that uses the strategy
class GoogleMaps {
    private routeStrategy: RouteStrategy;

    constructor(routeStrategy: RouteStrategy) {
        this.routeStrategy = routeStrategy;
    }

    setRouteStrategy(routeStrategy: RouteStrategy): void {
        this.routeStrategy = routeStrategy;
    }

    findPath(origin: string, destination: string, mode: string): void {
        // Delegate finding path to the strategy
        this.routeStrategy.findPath(origin, destination, mode);
    }
}

// usage
const googleMaps = new GoogleMaps(new DrivingRouteStrategy());
googleMaps.findPath("Origin", "Destination", "car");
googleMaps.setRouteStrategy(new WalkingRouteStrategy());
googleMaps.findPath("Origin", "Destination", "walking");
googleMaps.setRouteStrategy(new TrainRouteStrategy());
googleMaps.findPath("Origin", "Destination", "train");
