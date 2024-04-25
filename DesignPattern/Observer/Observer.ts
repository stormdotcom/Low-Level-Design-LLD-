// observer interface
interface Observer {
    update(article: string): void;
}

// subject
class NewsPublisher {
    private observers: Observer[] = [];

    // Method to subscribe an observer
    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    // Method to unsubscribe an observer
    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Method to notify observers
    notify(article: string): void {
        this.observers.forEach(observer => observer.update(article));
    }

    // Method to publish a new article
    publishArticle(article: string): void {
        console.log(`Publishing article: "${article}"`);
        this.notify(article);
    }
}

// concrete Observer
class NewsSubscriber implements Observer {
    constructor(private name: string) { }

    update(article: string): void {
        console.log(`${this.name} received a new article: "${article}"`);
    }
}

// usage
const publisher = new NewsPublisher();

const subscriber1 = new NewsSubscriber("Subscriber 1");
const subscriber2 = new NewsSubscriber("Subscriber 2");
const S3 = new NewsSubscriber("Subscriber 3");
publisher.subscribe(subscriber1);
publisher.subscribe(subscriber2);
publisher.subscribe(S3);
publisher.publishArticle("New study reveals benefits of coffee consumption");

publisher.unsubscribe(subscriber1);

publisher.publishArticle("Election  2024");
