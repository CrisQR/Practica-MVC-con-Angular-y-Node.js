import { Component,OnInit, HostBinding } from '@angular/core';
import { Product } from '../../models/Products';
import { ProductsService } from '../../services/products.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent implements OnInit{
  
  @HostBinding('class') classes='formulario1';

  product: Product={
    codigo: 0,
    nombre: '',
    precio: 0
  };

  edit: boolean = false;

  constructor(private productService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute){

  }
  
  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if (params['id']){
      this.productService.getProduct(params['id'])
        .subscribe(
          (res: any) => {
            console.log(res);
            this.product = res[0];
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveNewProduct() {
    // if (!this.cliente.nombre || !this.cliente.apellido || !this.cliente.edad || !this.cliente.correo){
    //   alert('Por favor ingresa todos los campos');
    //   return;
    // }
    if (isNaN(this.product.codigo)) {
      alert('El codigo del producto debe ser un número');
      return;
    }
    if (isNaN(this.product.precio)) {
      alert('El precio del producto debe ser un número');
      return;
    }
    this.productService.createProduct(this.product)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['']);
      },
      err => console.log(err)
    );
  }

  updateProduct(){
    // if (!this.cliente.nombre || !this.cliente.apellido || !this.cliente.edad || !this.cliente.correo){
    //   alert('Por favor ingresa todos los campos');
    //   return;
    // }
    if (isNaN(this.product.codigo)) {
      alert('El codigo del producto debe ser un número');
      return;
    }
    if (isNaN(this.product.precio)) {
      alert('El precio del producto debe ser un número');
      return;
    }
    this.productService.updateProduct(this.product.codigo, this.product)
    .subscribe(
      res => {
        console.log(res); 
        this.router.navigate(['']);
      },
      err => console.error(err)
    )
  }
}
