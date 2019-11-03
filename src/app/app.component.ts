import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from './product.model'
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'shopping-cart';

  products: Product[];
  totalItemsParent: number = 0;
  subTotalMoney: number = 0;


  removeProduct(productId: number) {
    const index = this.productService.findProducIndex(productId);
    const nameProduct = this.products[index].name;

    //Goi sang Service de xoa san pham
    this.productService.removeProduct(productId);

    const isRemove = this.productService.removeProduct
    //Neu xoa thanh cong thi thong bao len man hinh
    if (isRemove) {
      alert('Da xoa san pham: ' + nameProduct)
    }

  }

  changeQuanlityParent(obj: {
    maSanpham: number;
    soLuong: number;
  }) {

    const product = this.products.find(product => product.id === obj.maSanpham);
    product.quantity = obj.soLuong

    //Tinh lai tong so luong san pham:
    this.totalItemsParent = this.productService.getSumQuantityProduct();
  }

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.products;
  }
  ngDoCheck() {
    let money = 0;
    for (const product of this.products) {
      money += Number(product.price) * Number(product.quantity);
    }
    this.subTotalMoney = money;
    this.totalItemsParent = this.productService.getSumQuantityProduct();

  }
}
