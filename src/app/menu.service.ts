import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  Types=
  {Starters:[{name:"Manchuria",cost:200},{name:"Noodles",cost:200},{name:"Pizza",cost:200},{name:"Burger",cost:200}],
  Milkshakes:[{name:"Mango Milkshake",cost:200},{name:"Strawberry Milkshake",cost:200},{name:"red velevet Milkshake",cost:200},{name:"Choclate Milkshake",cost:200}],
  Icecreams:[{name:"Mango Icecream",cost:200},{name:"Strawberry Icecream",cost:200},{name:"red velevet Icecream",cost:200},{name:"Choclate Icecream",cost:200}],
  Desserts:[{name:"Mango Dessert",cost:200},{name:"Strawberry Dessert",cost:200},{name:"red velevet Dessert",cost:200},{name:"Choclate Dessert22",cost:200}]

}
}