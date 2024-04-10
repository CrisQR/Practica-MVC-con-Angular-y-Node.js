import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {

  listProducts: any = [];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.listProducts().subscribe(
      res => {
        this.listProducts = res;
      },
      err => console.log(err)
    )
  }
}
