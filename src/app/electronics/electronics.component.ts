import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit, OnDestroy {

  constructor(private product: ProductServiceService) { }
electronic:any;
  ngOnInit(): void {
    this.product.user.next(true);
    this.product.getElectronicList().subscribe((results:any)=>{
      this.electronic=results;
    });
  }

  ngOnDestroy(){
    this.product.user.next(false);
  }

}
