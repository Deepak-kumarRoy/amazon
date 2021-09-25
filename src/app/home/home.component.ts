import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
products:any;
  constructor( private product: ProductServiceService) { }

  ngOnInit(): void {
    this.product.user.next(true);
    this.product.getList().subscribe((results:any)=>{
      this.products=results;
      console.log(this.products);
    });
  }

  ngOnDestroy(){
    this.product.user.next(false);
  }

}
