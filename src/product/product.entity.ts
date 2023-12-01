import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import BaseEntity from '../core/common/entity';
import {IProduct} from '../core/domain/product';

@Entity('product')
export class ProductEntity extends BaseEntity implements IProduct {
  @Column()
  sku: string;
  @Column({
    length: 100,
    
  })
  name: string;

}