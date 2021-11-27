import { Component, OnInit} from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  constructor(private _service: MyserviceService) { }
  topHeadingDisplay: any=[];
  
  ngOnInit(): void {
    this._service.topHeading().subscribe((result:any) => {
      console.log(result);
      this.topHeadingDisplay = result
    })
  }

}
