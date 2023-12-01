import {AggregateRoot} from '@nestjs/cqrs'
export class Product extends AggregateRoot {
    constructor(private id: string) {
      super();
    }
  
    createProduct(enemyId: string) {
      // Business logic
      this.apply(new HeroKilledDragonEvent(this.id, enemyId));
    }
  }