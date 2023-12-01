import { IProduct } from "../../core/domain/product";

export class CreateProductEvent {
    constructor(
      public readonly newProduct:IProduct
    ) {}
}