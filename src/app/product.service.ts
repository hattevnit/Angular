import { Injectable } from '@angular/core';
import { Product } from './product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: Product[] = [
  {
    id: 1,
    name: 'Iphone',
    price: 1000,
    description: 'màu tím đỏ',
    quantity: 20,
    image: 'https://galaxydidong.vn/wp-content/uploads/2017/07/iphone-7-128gb-quoc-te-dep-95-99.jpg'
  },
  {
    id: 2,
    name: 'Samsung',
    price: 2000,
    description: 'lưng màu xanh lá, tràn viền ',
    quantity: 5,
    image: 'https://cdn.tgdd.vn/Products/Images/42/161554/samsung-galaxy-s10-white-400x460.png'
  }
];
findProducIndex(productId: number): number{
  const index = this.products.findIndex(product => product.id === productId);
  return index;
}
removeProduct(productId: number): boolean {
  const index = this.findProducIndex(productId)
  if (index !== -1) { 
    this.products.splice(index, 1) ;
    return true;
  };
  return false;
}

changeQuantity(productId: number, quantity: number){



  
}

getSumQuantityProduct(): number {
  var toTalItem: number = 0;
  for (const product of this.products) {
    toTalItem += Number(product.quantity);
  }
  return toTalItem;

}

}
