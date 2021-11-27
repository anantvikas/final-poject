import { Component, OnInit } from '@angular/core';
import{MycartServiceService}from '../mycart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss','./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem:number=0;
  constructor(private cartservice:MycartServiceService) { }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(res=>{
      this.totalItem=res.length;
    })
  }

}
