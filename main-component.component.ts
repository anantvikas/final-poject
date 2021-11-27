import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import{MycartServiceService}from '../mycart-service.service';


@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {

  constructor(private service:MyserviceService,private cartservice:MycartServiceService) { }
     public  Data_list:any=[];
      public searchKey:any="";
      public searchTerm:string="";


  ngOnInit(): void {
this.service.topHeading().subscribe((result)=>{
  console.log(result);
  this.Data_list=result;
  this.Data_list.forEach((a:any)=>{
    Object.assign(a,{quantity:1,total:a.price});
  });
});
this.cartservice.search.subscribe((val:any)=>{
  this.searchKey=val;
})

  }
  addtocart(item:any){
    this.cartservice.addToCart(item);


  }
  productDetails(item:any){
    this.cartservice.addToCart(item);
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartservice.search.next(this.searchTerm);
  }

}
