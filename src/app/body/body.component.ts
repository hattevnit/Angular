import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  @Input() products: Product[]
  @Output() onRemoveProduct = new EventEmitter()

  @Output() onChangeProductQuantity = new EventEmitter()

  removeProduct(productId: number) {
    this.onRemoveProduct.emit(productId)
  }

  changeQuantity(InputElement:HTMLInputElement, productId: number) {
    
    this.onChangeProductQuantity.emit({
      maSanpham: productId, 
      soLuong: InputElement.value
  });
}
  constructor() { }

  ngOnInit() {}
   
}
