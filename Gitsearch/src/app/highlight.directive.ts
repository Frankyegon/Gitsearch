import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){}

  @HostListener ("mouseover") onHover(){
    this.textDeco("yellow");
  }

  @HostListener("click") onClicks(){
    this.textDeco("green")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.backgroundColor=action;

  }
}
