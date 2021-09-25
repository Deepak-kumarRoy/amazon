import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user:boolean=false;
admin:boolean=false;
  constructor(private product:ProductServiceService) {
    this.product.user.subscribe(res =>{
      this.user = res;
    });

    this.product.admin.subscribe(res=>{
      this.admin = res;
    });
   }

  ngOnInit(): void {
  }

}
