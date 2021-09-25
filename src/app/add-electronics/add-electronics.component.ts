import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-electronics',
  templateUrl: './add-electronics.component.html',
  styleUrls: ['./add-electronics.component.css']
})
export class AddElectronicsComponent implements OnInit, OnDestroy {
  alert:boolean=false;
  newData = new FormGroup({
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required)
  });
  constructor(private product: ProductServiceService) { }
  electronic: any;
  ngOnInit(): void {
    this.product.admin.next(true)
    this.product.getElectronicList().subscribe((result:any)=>{
      this.electronic=result; 
    })
  }

  ngOnDestroy(){
    this.product.admin.next(false);
  }

  submit(){
    this.product.saveElectronicList(this.newData.value).subscribe((result:any)=>{
      this.alert=true;
      this.newData.reset('');
    });
  }

  delete(item:any){
    this.product.deleteElectronicList(item).subscribe((result:any)=>{
      console.log("result", result)
    })
  }

}
