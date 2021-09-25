import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit, OnDestroy {
  alert:boolean=false;
  newData = new FormGroup({
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required)
  });
  constructor(private product: ProductServiceService) { }
products:any;
  ngOnInit(): void {
    this.product.admin.next(true);
    this.product.getList().subscribe((result:any)=>{
      this.products=result; 
    })
  }

  ngOnDestroy(){
    this.product.admin.next(false);
  }
  
  submit(){
     this.product.saveList(this.newData.value).subscribe((result:any)=>{
       this.alert=true;
       this.newData.reset('');
     });
   }
  
   delete(item:any){
     this.product.deleteList(item).subscribe((result:any)=>{
       console.log("result", result)
     })
   }

}
