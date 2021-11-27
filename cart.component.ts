import { Component, OnInit } from '@angular/core';
import { MycartServiceService } from '../mycart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss','./cart.component.css']
})
export class CartComponent implements OnInit {
  value :any
  value1="BOOTCAMP2021";
  onEnter(value: string) { 
    if(value==="BOOTCAMP2021"){
      this.value='successful 10% off';
    }
    else{ this.value='your coupon is invalid'}
    
    
    
    this.value = value; }
  public products:any=[];
  public totalAmount!:number;
  public newtotal!:number;

  constructor(private cartservice:MycartServiceService) { }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res=>{
      this.products=res;
      this.totalAmount=this.cartservice.getTotalPrice()
    })
  }
  removeitem(item:any){
    this.cartservice.removeCartItem(item);
  }
  emptycart(){
    return this.cartservice.removeAllCart();
    
  }
  mynewtotal(totalAmount:any){
    let sur;
    sur=(totalAmount*10)/100;
    console.log('newtotal',sur)
  }
  
}
