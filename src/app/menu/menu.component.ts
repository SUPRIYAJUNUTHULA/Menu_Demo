import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
   
  Items:string[]=["Starters","Milkshakes","Icecreams","Desserts"]
   
  constructor(private router:Router) { 
      
  }
  
  ngOnInit(): void {
    
      }
    
   
    
    


  
getData(item:string){
  this.router.navigateByUrl("items/"+item)
}
  
}