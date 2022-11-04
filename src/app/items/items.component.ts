import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  Items:string[]=[]
  ListofI:any[]=[];
  Name: any;
  constructor(private route:ActivatedRoute,private service:MenuService) { }

  ngOnInit(): void {
    this.Items=["Starters","Milkshakes","Icecreams","Desserts"]
    this.route.params.subscribe((param) => {
      this.Name=param['item']
      if(this.Name=="Starters"){
        this.ListofI=this.service.Types.Starters
       console.log(this.ListofI)
      }
      else if(this.Name=="Milkshakes"){
        this.ListofI=this.service.Types.Milkshakes
      
      }
      else if(this.Name=="Icecreams"){
        this.ListofI=this.service.Types.Icecreams
      
      }
      else if(this.Name=="Desserts"){
        this.ListofI=this.service.Types.Desserts
      
  }

})
  }

}
