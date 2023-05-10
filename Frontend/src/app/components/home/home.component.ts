import { ProductService } from './../../services/product.service';
import { CartService } from './../../services/cart.service';
import { CateegoryService } from './../../services/cateegory.service';
import { Component,OnInit } from '@angular/core';
import { Product } from '../../models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  categories:any
  featured:any
  products:any
  nItems: any
  term=""
  constructor (private productService:ProductService,private categoryService:CateegoryService,private cartService: CartService) {
  }
  addToCart(product: Product) {
    product.itemQuantity=1
    this.cartService.addToCart(product);
    this.nItems=this.cartService.countItems()
  }

  ngOnInit():void{
    this.categoryService.getAllCategories().subscribe((res)=>{
      this.categories=res
    })
    this.productService.getAllProduct().subscribe((res) => {
      this.products = res;
   })
  
    this.nItems=this.cartService.countItems()
  }
}
