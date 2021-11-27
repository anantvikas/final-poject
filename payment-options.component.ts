import { Component, OnInit } from '@angular/core';
import { MycartServiceService } from '../mycart-service.service';
@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss','./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {

  constructor(private cartservice:MycartServiceService) { }
  public products:any=[];
  public totalAmount!:number;
  public newtotal!:number;
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
    this.cartservice.removeAllCart();
    
  }
  mynewtotal(totalAmount:any){
    let sur;
    sur=(totalAmount*10)/100;
    console.log('newtotal',sur)
  }
  

}
