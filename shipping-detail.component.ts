import { Component, OnInit } from '@angular/core';
import { MycartServiceService } from '../mycart-service.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.scss','./shipping-detail.component.css'],
})
export class ShippingDetailComponent implements OnInit {


//shipping form validatin 
shippingform=new FormGroup({
  firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('vikas'),
  Address:new FormControl(''),
  Address2:new FormControl(''),
  city:new FormControl(''),
  zipcode:new FormControl(''),
  email:new FormControl(''),

})
//shippingformdata function
shippingformdata(){
  console.warn(this.shippingform.value);
}
//getters
get firstname(){
  return this.shippingform.get('firstname')
}

  constructor(private cartservice:MycartServiceService) { }
  public products:any=[];
  public totalAmount!:number;
  public newtotal!:number;
  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res=>{
      this.products=res;
      this.totalAmount=this.cartservice.getTotalPrice()
    })
    console.log("tottalamount",this.totalAmount)
  }
  removeitem(item:any){
    this.cartservice.removeCartItem(item);
  }
  emptycart(){
    this.cartservice.removeAllCart();
    
  }
  mynewtotal(totalAmount:any){
    let sur;
    sur=(totalAmount*10)/100;
    console.log('newtotal',sur)
  }
   
  // activefun(){
  //   return active;
  // }

}
