import { Component, OnInit } from '@angular/core';
import { MycartServiceService } from '../mycart-service.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss','./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
public elements:any=[]
public totalsum!:number;
  constructor(private service:MycartServiceService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(res=>{
     this.elements=res;
     this.totalsum=this.service.getTotalPrice()
     console.log("a",res);
    })
  }

}
