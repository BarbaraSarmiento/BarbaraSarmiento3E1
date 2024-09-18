import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
username:string="Bárbara Sarmiento";
theme:string="";
widthMenu:number=250;
visibleMenu:boolean=true;
setVisibilityMenu():void{
  this.visibleMenu= !this.visibleMenu;
}
setThemeColor(color:string):void{
this.theme=color;
}
setSizeMenu(){
  this.widthMenu += 10;
  if (this.widthMenu > 300) {
  this.widthMenu = 250;
  }
}
}
