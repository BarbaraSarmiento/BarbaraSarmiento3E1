
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
username:string="Bárbara Sarmiento";
theme:string="";
widthMenu:number=250;
marginLeft: number = 25;
visibleMenu:boolean=true;
setVisibilityMenu():void{
  this.visibleMenu= !this.visibleMenu;
}
  setWidth(): void { 
    this.widthMenu += 10;
    this.marginLeft += 10;}
setThemeColor(color:string):void{
this.theme=color;
}
setSizeMenu(){
  this.widthMenu += 10;
  if (this.widthMenu > 400) {
  this.widthMenu = 250;
  }
}
}
