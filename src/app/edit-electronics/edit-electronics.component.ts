import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-edit-electronics',
  templateUrl: './edit-electronics.component.html',
  styleUrls: ['./edit-electronics.component.css']
})
export class EditElectronicsComponent implements OnInit, OnDestroy {
  alert:boolean=false;
  newData = new FormGroup({
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    link: new FormControl('', Validators.required)
  });
  constructor(private router: ActivatedRoute, private product: ProductServiceService) { }

  ngOnInit(): void {
    this.product.admin.next(true);
    this.product.getCurrentElectronicProduct(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.newData = new FormGroup({
        image: new FormControl(result['image']),
        price: new FormControl(result['price']),
        text: new FormControl(result['text']),
        link: new FormControl(result['link'])
      });  
     });
  }

  ngOnDestroy(){
    this.product.admin.next(false);
  }

  submit(){
    this.product.updateElectronicList(this.router.snapshot.params.id, this.newData.value).subscribe((result:any)=>{
      this.alert=true;
      this.newData.reset('');
    });
  }

}
