import { IProduct } from "../core/domain/product";

export  class CreateProductCommand {
    constructor(
      public readonly newProduct: IProduct,
    ) {}
}

export  class DeleteProductCommand {
    constructor(
      public readonly productId: string,
    ) {}
}

