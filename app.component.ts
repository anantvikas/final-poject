import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
   })
export class AppComponent {
  title = 'anant-project';
  
  constructor(private service:MyserviceService){}
  

  topHeadingDisplay: any=[];
  
  ngOnInit(): void {
    this.service.topHeading().subscribe((result:any) => {
      console.log(result);
      this.topHeadingDisplay = result
    })
  }



}
