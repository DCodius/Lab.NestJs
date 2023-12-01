
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(private commandBus: CommandBus) {}

  async createProduct(IProduct: newProduct) {
    return this.commandBus.execute(
      new KillDragonCommand(heroId, killDragonDto.dragonId)
    );
  }
}